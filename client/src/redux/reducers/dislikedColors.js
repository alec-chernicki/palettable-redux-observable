// @flow
import type { DislikedColorActions } from '../actions/dislikedColors';
import type { ColorType } from '../../constants/FlowTypes';
import {
  DISLIKE_COLOR,
  ADD_DISLIKED_COLOR
} from '../actions/ActionTypes';

type State = Array<ColorType>;

const initialState = [];

const dislikedColorsReducer = (
  state: State = initialState,
  action: DislikedColorActions
): State => {
  switch (action.type) {
    case DISLIKE_COLOR:
      return [
        ...state,
        action.payload
      ];

    case ADD_DISLIKED_COLOR:
      return [
        ...state,
        action.payload
      ];
      
    default:
      return state;
  }
}

export default dislikedColorsReducer;
