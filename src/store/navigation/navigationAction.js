import {
  GOBACK,
  NAVIGATE,
  NAVIGATE_WITH_PROPS,
  NAV_DISPATCH,
  REPLACE,
  SET_NAVIGATION_REF,
} from "../actionConstant";

export function setNavigation(data) {
  return {
    type: SET_NAVIGATION_REF,
    data,
  };
}

export function navigate(data) {
  return {
    type: NAVIGATE,
    data,
  };
}

export function replace(data) {
  return {
    type: REPLACE,
    data,
  };
}

export function goBack() {
  return {
    type: GOBACK,
  };
}

export function navDispatch(data) {
  return {
    type: NAV_DISPATCH,
    data,
  };
}

export function navigateWithProps(data) {
  return {
    type: NAVIGATE_WITH_PROPS,
    data,
  };
}
