import { ModalAction, ModalActionType } from './types';

const initialState = {
  isModalOpen: false,
};

export const modal = (state = initialState, action: ModalAction) => {
  switch (action.type) {
    case ModalActionType.TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    default:
      return state;
  }
};
