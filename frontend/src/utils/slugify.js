/**
 * Generates a clean, SEO-optimized URL slug from a product title or text.
 * - Converts to lowercase
 * - Replaces '&' with 'and'
 * - Strips quotes, special punctuation, and non-alphanumeric characters
 * - Normalizes hyphens and trims leading/trailing dashes
 *
 * Example:
 * "Black & White Textured Contrast 2-Piece Bikini Set"
 * => "black-and-white-textured-contrast-2-piece-bikini-set"
 */
export function slugify(text) {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/['’"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Gets the canonical SEO slug for any product object.
 * @param {Object} product - Product object
 * @returns {string} Clean URL slug
 */
export function getProductSlug(product) {
  if (!product) return '';
  if (product.slug) return product.slug;
  if (product.title) return slugify(product.title);
  return product.id || '';
}

export default slugify;
