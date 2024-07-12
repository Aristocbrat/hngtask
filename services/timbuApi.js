import axios from 'axios'

const Apikey = process.env.NEXT_PUBLIC_TIMBU_API_KEY;
const Appid = process.env.NEXT_PUBLIC_TIMBU_APPID;
// const API_KEY_PARAM = process.env.NEXT_PUBLIC_TIMBU_APIKEY;
const BASE_URL = 'https://api.timbu.com/v2';

const timbuApi = axios.create({
    baseURL: BASE_URL,
  });

  timbuApi.interceptors.request.use((config) => {
    config.params = {
      ...config.params,
      Appid,
      Apikey,
    };
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  export const getProducts = async ({ organization_id, reverse_sort, page, size }) => {
    try {
      const response = await timbuApi.get('/products', {
        params: { organization_id, reverse_sort, page, size }
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };
  export const addToCart = async (productId, quantity = 1) => {
    try {
      const response = await timbuApi.post('/cart', {
        productId,
        quantity
      });
      return response.data;
    } catch (error) {
      console.error("Error adding to cart:", error);
      throw error;
    }
  };