export interface ModalAction {
  type: ModalActionType.TOGGLE_MODAL;
}

export enum ModalActionType {
  TOGGLE_MODAL = 'TOGGLE_MODAL',
}
