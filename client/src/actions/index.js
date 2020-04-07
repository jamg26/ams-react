import axios from 'axios';

// assets (assets.js)
export const newAsset = (data) => async (dispatch) => {
  const asset = await axios.post('/api/assets', data);
  dispatch({ type: 'NEW_ASSET_ADDED', payload: asset.data });
};

export const getAssets = () => async (dispatch) => {
  const asset = await axios.get('/api/assets');
  dispatch({ type: 'ASSET_FETCHED', payload: asset.data });
};

export const editAsset = (data) => async (dispatch) => {
  dispatch({ type: 'ASSET_EDIT', payload: data });
};

export const updateAsset = (id, data) => async (dispatch) => {
  const asset = await axios.patch('/api/assets', {
    ...data,
    _id: id,
  });
  dispatch({ type: 'ASSET_UPDATE', payload: asset.data });
};

// assets parent tabs navigation (tab_asset_parent.js)
export const gotoTab = (tab) => async (dispatch) => {
  dispatch({ type: 'GOTO_TAB', payload: tab });
};
