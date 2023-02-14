import { AxiosPromise } from "axios";
import { apiClient } from "~/shared/api";
import { productModel } from "~/shared/models";

export const getCategoryProductsRequest = (
  slug: string
): AxiosPromise<TResponse> => {
  return apiClient.get(`products/category/${slug}`);
};
type TResponse = {
  products: productModel.TProduct[];
};
