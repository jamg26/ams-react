import axios from 'axios';

export const newAsset = data => async dispatch => {
  const asset = await axios.post('/api/assets', data);
  dispatch({ type: 'NEW_ASSET_ADDED', payload: asset.data });
};

export const getAssets = () => async dispatch => {
  const asset = await axios.get('/api/assets');
  dispatch({ type: 'ASSET_FETCHED', payload: asset.data });
};
