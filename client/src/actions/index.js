import axios from 'axios';

export const newAsset = data => async dispatch => {
  const asset = await axios.post('/api/assets', data);
  dispatch({ type: 'NEW_ASSET_ADDED', payload: asset.data });
};
