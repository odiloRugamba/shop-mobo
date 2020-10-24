import { AsyncStorage } from 'react-native';
import API from '../../constants/API';
import Membership from '../../models/Membership';

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

let timer;

export const authenticate = (userId, token, expiryTime) => {
  return dispatch => {
    dispatch(setLogoutTimer(expiryTime));
    dispatch({ type: AUTHENTICATE, userId: userId, token: token });
  };
};

export const signup = (firstName, lastName, email, password) => {
  return async dispatch => {
    console.log( API.url + "/auth/signup");
    const response = await fetch(
      API.url + "auth/signup",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        })
      }
    );
      console.log(!response);
    if (!response.ok) {
      const errorResData = await response.json();
      console.log(errorResData.error);
      let message = 'Something went wrong!';
      if(errorResData.message)
        message = errorResData.message;

      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);
    dispatch(
      authenticate(
        resData.localId,
        resData.idToken,
        parseInt(9999999999) * 1000
      )
    );
    const expirationDate = new Date(
      new Date().getTime() + parseInt(9999999999) * 1000
    );
    saveDataToStorage(resData.idToken, resData.localId, expirationDate);
  };
};

export const login = (email, password) => {
  return async dispatch => {
    const response = await fetch(
      API.url + "auth/signin",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      }
    );
    console.log("Here");
    if (!response.ok) {
      const errorResData = await response.json();
      let message = 'Something went wrong!';
      if(errorResData.message)
        message = errorResData.message;
      throw new Error(message);
    }

    const res = await response.json();
    const resData = res.data;
    console.log(resData);
    dispatch(
      authenticate(
        resData.user._id,
        resData.token,
        parseInt(99999999999) * 1000
      )
    );
    // const memberships = [];
    
    // for (const membership of resData.memberships) {
    //   loadedOrders.push(
    //     new Membership(
    //       membership._id,
    //       membership.name,
    //       membership.nameAbbr,
    //       membership.logo
    //     )
    //   );
    // }
    // dispatch({type: SET_ORGANISATIONS, action: memberships});

    // persist('memberships', memberships);

  };
  
};

export const logout = () => {
  clearLogoutTimer();
  AsyncStorage.removeItem('userData');
  return { type: LOGOUT };
};

const clearLogoutTimer = () => {
  if (timer) {
    clearTimeout(timer);
  }
};

const setLogoutTimer = expirationTime => {
  return dispatch => {
    timer = setTimeout(() => {
      dispatch(logout());
    }, expirationTime);
  };
};

const saveDataToStorage = (token, userId, expirationDate) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      token: token,
      userId: userId,
      expiryDate: expirationDate.toISOString()
    })
  );
};

const persist = (identifier, data) => {
  AsyncStorage.setItem(
    identifier,
    JSON.stringify(data)
  );
}