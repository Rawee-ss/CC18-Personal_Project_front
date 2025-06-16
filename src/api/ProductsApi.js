import axios from "axios";

export const creatProducts = async (token, form) => {
  return await axios.post("http://localhost:8000/products/", form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getProducts = async (token, count = 20) => {
  return await axios.get("http://localhost:8000/products/" + count, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getProductDetail = async (token, id) => {
  return await axios.get(`http://localhost:8000/products/detail/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProducts = async (token, form, id) => {
  return await axios.patch(`http://localhost:8000/products/${id}`, form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteProduct = async (token, productId) => {
  return axios.delete(`http://localhost:8000/products/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
