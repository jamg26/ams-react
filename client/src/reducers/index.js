import { combineReducers } from 'redux';
import assets from './asset';
import tab_asset_parent from './tab_asset_parent';

export default combineReducers({
  assets,
  tab_asset_parent,
});
