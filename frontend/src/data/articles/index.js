// ============================================================
// PRODUCT ARTICLES REGISTRY & ENGINE
// Provides rich editorial guides, comparisons & FAQs for all products
// ============================================================

import { curatedArticles } from './curatedArticles';
import { generateProductArticle } from './articleGenerator';

/**
 * Returns an in-depth article object for any product
 * @param {Object} product - Product object with id, title, description, category, etc.
 * @returns {Object} Comprehensive article with story, whyBetter, comparison, and FAQs
 */
export const getProductArticle = (product) => {
  if (!product) return null;

  // 1. Check for specific hand-curated article
  if (product.id && curatedArticles[product.id]) {
    const curated = curatedArticles[product.id];
    // Return curated article, providing safe defaults for any missing properties
    return {
      ...generateProductArticle(product),
      ...curated
    };
  }

  // 2. Fallback to intelligent dynamic article generator
  return generateProductArticle(product);
};

export default getProductArticle;
