import Product from '../../models/product';
import API from '../../constants/API';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const fetchOrganisations = () => {
  // return async (dispatch, getState) => {
  //   // any async code you want!
  //   const userId = getState().auth.userId;
  //   console.log(userId);
  //   try {
  //     const response = await fetch(
  //       `${API.url}/organisations/members/${userId}`
  //     );

  //     if (!response.ok) {
  //       throw new Error('Something went wrong!');
  //     }

  //     const resData = await response.json();
  //     const loadedProducts = [];

  //     for (const key in resData) {
  //       loadedProducts.push(
  //         new Product(
  //           key,
  //           resData[key].ownerId,
  //           resData[key].title,
  //           resData[key].imageUrl,
  //           resData[key].description,
  //           resData[key].price
  //         )
  //       );
  //     }

  //     dispatch({
  //       type: SET_PRODUCTS,
  //       products: loadedProducts,
  //       userProducts: loadedProducts.filter(prod => prod.ownerId === userId)
  //     });
  //   } catch (err) {
  //     // send to custom analytics server
  //     throw err;
  //   }
  // };
};

