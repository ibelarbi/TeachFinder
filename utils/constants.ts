export const NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV;

export const MOCK_API_URL = "http://mockapi.com/api";

export const S3_URL = process.env.NEXT_PUBLIC_S3_URL;

export const STOREFRONT_API_KEY = process.env.NEXT_PUBLIC_STOREFRONT_API_KEY;

export const STOREFRONT_API_URL = process.env.NEXT_PUBLIC_STOREFRONT_API_URL;

export const STOREFRONT_MAX_DISPLAYED_ITEMS_COUNT = Number(
  process.env.NEXT_PUBLIC_STOREFRONT_MAX_DISPLAYED_ITEMS_COUNT
);

export const BUILD_ID = process.env.NEXT_PUBLIC_BUILD_ID;

export const BUILD_DATE = process.env.NEXT_PUBLIC_BUILD_DATE;

export const BUILD_SHA = process.env.NEXT_PUBLIC_BUILD_SHA;

export const STORE_URL = "/stores";

export const ALL_CATEGORIES_URL = "/categories";

export const MOST_POPULAR_CATEGORIES_URL = "/categories/most-popular";

export const ALL_PRODUCTS_URL = "/items/";

export const FILTERED_PRODUCTS_URL = "/items/filter";

export const MOST_POPULAR_PRODUCTS_URL = "/products/most-popular";

export const CREATE_ONLINE_ORDER_URL = "/online-orders/create";

export const ONLINE_ORDERS_URL = "/online-orders/";

export const DEFAULT_PHONE_COUNTRY = "ma";

export const INYAD_LINK = "https://inyad.com/";

export const EGYPT_PHONE_CODE = "+20";

export const DEFAULT_PRODUCT_IMAGE = "/assets/images/image-default.png";

export const ALL_TEACHERS_URL = "/teachers";

export const TEACHER_BY_ID_URL = "/teachers/";

export const TEACHERS_BY_UUIDS_URL = "/teachers/by-uuids";

export const TEACHFINDER_API_URL = "http://localhost:8080";

export const NAV_PATHS = {
  HOME: "/",
  TEACHERS: "/teachers",
  PROFILE: "/profile",
  LOGIN: "/login",
  REGISTER: "/register",
};
