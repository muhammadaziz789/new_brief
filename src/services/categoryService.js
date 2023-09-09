import { useQuery } from "react-query";
import { request } from "./http-client";

const getCategoriesFn = async (params, data) =>
  await request.get(`/categories`, { params });
const getCategoryFn = async (slug, params) =>
  await request.get(`/categories/${slug}`, { params });

export const useCategory = ({
  categoriesParams,
  categoryParams,
  categorySlug,
  lang,
}) => {
  const categoryies = useQuery(
    [`GET_CATEGORIES`, categoriesParams, lang],
    () => getCategoriesFn(categoriesParams, {}),
    {
      enabled: !!categoriesParams,
    }
  );
  const category = useQuery(
    [`GET_CATEGORY`, categoryParams],
    () => getCategoryFn(categorySlug, categoryParams),
    {
      enabled: !!categorySlug,
    }
  );

  return {
    categories: categoryies?.data ?? [],
    category: category?.data ?? [],
  };
};

const categoryService = {
  getCategories: (params) => request.get(`/categories`, { params }),
  getCategory: (slug, params) => request.get(`/categories/${slug}`, { params }),
};

export default categoryService;
