import {NAV_ACTION_TYPES} from "./nav.types";

const INITIAL_STATE = {
  currentTab: "homeKey",
};

export const navReducer = (state = INITIAL_STATE, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case NAV_ACTION_TYPES.SET_CURRENT_TAB:
      return {...state, currentTab: payload};
    default:
      return state;
  }
};
