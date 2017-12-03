// @flow
import { Observable } from 'rxjs/Observable';
import PaletteAPI from '../../api/PaletteAPI';
import type { ReduxStore } from '../../constants/FlowTypes';
import likedColorsSelector from '../selectors/likedColorsSelector';
import dislikedColorsSelector from '../selectors/dislikedColorsSelector';


const fetchPaletteWithColors = (
  state: ReduxStore,
) => {

  return Observable.fromPromise(
    PaletteAPI.getWithColors(
      likedColorsSelector(state),
      dislikedColorsSelector(state)
    ))
};

export default fetchPaletteWithColors;
