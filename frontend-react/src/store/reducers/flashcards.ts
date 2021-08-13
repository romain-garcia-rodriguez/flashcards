// States
import initialState from "../state";

// Actions
import actions from "../actions";

// Namespaces
const DECK_CREATE = "DECK/CREATE";

const reducer = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case DECK_CREATE:
      return actions.deck.add(state, payload);
    default:
      return state;
  }
};

export default reducer;
