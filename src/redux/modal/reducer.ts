import { TOGGLE_MODAL } from './actions';
import { ModalAction } from './types';

const initialState = {
  isModalOpen: false,
};

export const modal = (state = initialState, action: ModalAction) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    default:
      return state;
  }
};
