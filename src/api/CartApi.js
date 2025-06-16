import axios from "axios";

export const createCart = async (token, productsId) => {
  return await axios.post(
    `http://localhost:8000/cart/${productsId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getCart = async (token) => {
  return await axios.get("http://localhost:8000/cart", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteItemCart = async (token, cartItemId) => {
  return await axios.delete(`http://localhost:8000/cart/${cartItemId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
