export default function (state = 'view', action) {
  switch (action.type) {
    case 'GOTO_TAB':
      return action.payload || false;
    default:
      return state;
  }
}
