const initState = {
  modalOpen: false
};

const toogleModal = (state=initState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return Object.assign({}, state, {
        modalOpen: true,
      });
    case 'CLOSE_MODAL':
      return Object.assign({}, state, {
        modalOpen: false,
      });
    default:
      return state;
  }
}

export default toogleModal;