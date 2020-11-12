export default function fontSizeReducer(state = 18, action) {
  // console.log(state);

  switch (action.type) {
    case 'INCREASE_FONT_SIZE':
      return state !== 22 ? state + 2 : state;
    case 'DECREASE_FONT_SIZE':
      return state !== 16 ? state - 2 : state;
    default:
      return state;
  }
}
