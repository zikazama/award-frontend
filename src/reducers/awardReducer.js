export const awardInitialValue = [];

export const awardReducer = (state, action) => {
  if (action.type === "init") {
    return { ...state, award: action.award };
  } else if (action.type === "add") {
    return { ...state, award: [...state.award, ...action.award] };
  }
};
