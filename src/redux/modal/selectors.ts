import { RootState } from 'redux/store';

export const selectIsModalOpen = (state: RootState) => state.modal.isModalOpen;
