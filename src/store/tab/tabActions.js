export const SET_SELECTED_TAB = "SET_SELECTED_TAB";

export const setSelectedTabSuccess = (selectedTab) => ({
  type: SET_SELECTED_TAB,
  payload: selectedTab,
});

export const setSelectedTab = (data) => {
  return {
    type: SET_SELECTED_TAB,
    payload: data,
  };
};
