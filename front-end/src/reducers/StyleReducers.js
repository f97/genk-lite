import { CHANGE_COLOR, CHANGE_SIZE, CHANGE_FONT } from '../constants/ActionTypes';

const initialState = {
  color: 'black',
  size: 14
};

export default function Style(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COLOR:
      return [{
        color: action.color,
      }]
  }
}