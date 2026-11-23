/**
 * Single source of truth for every image on the site.
 * To swap a dummy image, replace the file in /public/images/placeholders
 * (keeping the filename) or change the path/URL below.
 */
const BASE_PATH = "/images/placeholders";

export const IMAGE_ASSETS = {
  logo: `${BASE_PATH}/kem-fresh-logo-placeholder.svg`,

  hero: `${BASE_PATH}/hero-farming.svg`,

  categories: {
    organicFarming: `${BASE_PATH}/organic-farming.svg`,
    naturalFood: `${BASE_PATH}/natural-food.svg`,
    sustainableLiving: `${BASE_PATH}/sustainable-living.svg`,
    community: `${BASE_PATH}/community.svg`,
  },

  market: {
    vegetables: `${BASE_PATH}/fresh-vegetables.svg`,
  },

  farms: {
    landscape: `${BASE_PATH}/farm-landscape.svg`,
  },

  stories: {
    organicRecipe: `${BASE_PATH}/organic-recipe.svg`,
    farming: `${BASE_PATH}/farming-story.svg`,
    farmhouse: `${BASE_PATH}/farmhouse.svg`,
    traditionalFood: `${BASE_PATH}/traditional-food.svg`,
  },
} as const;
