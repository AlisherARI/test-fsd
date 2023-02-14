import { AxiosPromise } from "axios";
import { apiClient } from "~/shared/api";

export const getAllProductsCategoriesRequest = (): AxiosPromise<string[]> => {
  return apiClient.get(`products/categories`);
};
