import { OPEN_MODAL, CLOSE_MODAL } from '../constants/constants';

const openModalAction = () => ({
  type: OPEN_MODAL,
});
const closeModalAction = () => ({
  type: CLOSE_MODAL,
});

export { openModalAction, closeModalAction };
