export const filterInitialValue = {};

export const filterReducer = (state, action) => {
  if (action.type === "initRange") {
    return { ...state, filterRange: action.filterRange };
  } else if (action.type === "initCheck") {
    return { ...state, filterCheck: action.filterCheck };
  } else if (action.type === "reset") {
    return { ...state, filterCheck: [], filterRange: 0 };
  }
};
