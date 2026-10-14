import { useEffect } from 'react';

/**
 * Custom hook to dynamically manage document title and essential SEO meta tags.
 *
 * @param {Object} options
 * @param {string} options.title - Page title
 * @param {string} [options.description] - Page meta description
 * @param {string} [options.canonical] - Canonical URL
 * @param {string} [options.image] - OpenGraph image URL
 * @param {string} [options.type='website'] - OpenGraph type
 */
export const useSEO = ({
  title,
  description,
  canonical,
  image,
  type = 'website',
}) => {
  useEffect(() => {
    // 1. Update Title
    const baseTitle = 'Hotnighties';
    const fullTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} | Premium Nightwear & Lingerie in Pakistan`;
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

    // 3. OpenGraph & Twitter Titles
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('property', 'og:type', type);

    // 4. OpenGraph Image
    if (image) {
      setMetaTag('property', 'og:image', image);
      setMetaTag('name', 'twitter:image', image);
    }

    // 5. Canonical Link
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
  }, [title, description, canonical, image, type]);
};

export default useSEO;
