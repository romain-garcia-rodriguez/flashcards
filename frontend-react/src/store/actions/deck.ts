export const add = (state: any, payload: any) => {
  let decks = [...state.decks];
  decks = [...decks, { ...payload }];
  return { ...state, decks: [...decks] };
};
