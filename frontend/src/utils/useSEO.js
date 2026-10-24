import { useEffect } from 'react';

/**
 * Custom hook to dynamically manage document title, SEO meta tags, and JSON-LD schema markup.
 *
 * @param {Object} options
 * @param {string} options.title - Page title
 * @param {string} [options.description] - Page meta description
 * @param {string} [options.canonical] - Canonical URL
 * @param {string} [options.image] - OpenGraph image URL
 * @param {string} [options.type='website'] - OpenGraph type
 * @param {string|string[]} [options.keywords] - Meta keywords
 * @param {string} [options.robots='index, follow'] - Robots crawler directive
 * @param {Object|Object[]} [options.schema] - JSON-LD Structured Data Schema (Product, FAQPage, etc.)
 */
export const useSEO = ({
  title,
  description,
  canonical,
  image,
  type = 'website',
  keywords,
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  schema,
}) => {
  useEffect(() => {
    // 1. Update Title
    const baseTitle = 'Hotnighties';
    let fullTitle;
    if (!title) {
      fullTitle = `${baseTitle} | Premium Nightwear & Lingerie in Pakistan`;
    } else if (title.toLowerCase().includes(baseTitle.toLowerCase())) {
      fullTitle = title;
    } else {
      fullTitle = `${title} | ${baseTitle}`;
    }
    document.title = fullTitle;

    // Helper to create or update meta tag
    const setMetaTag = (attrName, attrValue, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Description
    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
      setMetaTag('name', 'twitter:description', description);
    }

    // 3. Keywords
    if (keywords) {
      const kwString = Array.isArray(keywords) ? keywords.join(', ') : keywords;
      setMetaTag('name', 'keywords', kwString);
    }

    // 4. Robots Directives
    if (robots) {
      setMetaTag('name', 'robots', robots);
    }

    // 5. OpenGraph & Twitter Titles & Defaults
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:site_name', 'Hotnighties');
    setMetaTag('property', 'og:locale', 'en_PK');
    setMetaTag('name', 'twitter:card', image ? 'summary_large_image' : 'summary');

    // 6. OpenGraph Image
    if (image) {
      setMetaTag('property', 'og:image', image);
      setMetaTag('name', 'twitter:image', image);
    }

    // 7. Canonical Link
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
      setMetaTag('property', 'og:url', canonical);
    }

    // 8. JSON-LD Structured Data Schema Markup (FAQPage, Product, Breadcrumbs)
    const scriptId = 'seo-schema-ldjson';
    let existingScript = document.getElementById(scriptId);

    if (schema) {
      const schemaData = Array.isArray(schema)
        ? { '@context': 'https://schema.org', '@graph': schema }
        : { '@context': 'https://schema.org', ...schema };

      if (!existingScript) {
        existingScript = document.createElement('script');
        existingScript.id = scriptId;
        existingScript.type = 'application/ld+json';
        document.head.appendChild(existingScript);
      }
      existingScript.textContent = JSON.stringify(schemaData);
    } else if (existingScript) {
      existingScript.remove();
    }

    // Cleanup on unmount or navigation
    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, canonical, image, type, keywords, robots, schema]);
};

export default useSEO;
