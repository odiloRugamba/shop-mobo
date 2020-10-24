import {
  SET_MEMBERSHIPS
} from '../actions/memberships';

const initialState = {
  memberships: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MEMBERSHIPS:
      return {
        memberships: action.memberships
      };
  }
  return state;
};
