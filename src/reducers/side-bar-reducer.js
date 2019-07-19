const initState = {
  sideBar: ''
};

const toogleSideBar = (state=initState, action) => {
  switch (action.type) {
    case 'OPEN_SIDE_BAR':
      return Object.assign({}, state, {
        sideBar: 'open',
      });
    case 'CLOSE_SIDE_BAR':
      return Object.assign({}, state, {
        sideBar: '',
      });
    default:
      return state;
  }
}

export default toogleSideBar;