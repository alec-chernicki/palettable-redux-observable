import { put, takeLatest, select, call } from 'redux-saga/effects';
import { setIsStale, setIsFetching } from 'redux/actions/dataStatus';
import { dislikeColor } from 'redux/actions/dislikedColors';
import { changeColor } from 'redux/actions/likedColors';
import likedColorsSelector from 'redux/selectors/likedColorsSelector';
import dislikedColorsSelector from 'redux/selectors/dislikedColorsSelector';
import suggestedColorSelector from 'redux/selectors/suggestedColorSelector';
import { receivePalette } from 'redux/actions/suggestedColors';
import url from 'utils/url';
import PaletteAPI from 'api/PaletteAPI';

function* dislikeColorGenerator({ payload: { color } }) {
  yield put(setIsFetching(true));
  yield put(setIsStale(true));

  const likedColors = yield select(likedColorsSelector);
  const dislikedColors = yield select(dislikedColorsSelector);
  const newSuggestedColors = yield call(() =>
    PaletteAPI.getWithColors(likedColors, dislikedColors)
  );

  yield put(receivePalette(newSuggestedColors));
  yield put(setIsFetching(false));
  yield put(setIsStale(false));

  const { hexCode } = yield select(suggestedColorSelector);

  yield put(changeColor({ color, newHexCode: hexCode }));

  const newPalette = yield select(likedColorsSelector);
  yield url.setColors(newPalette);
}

function* dislikeColorSaga() {
  yield takeLatest(dislikeColor().type, dislikeColorGenerator);
}

export default dislikeColorSaga;
