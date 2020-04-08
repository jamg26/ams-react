export default function (state = null, action) {
  switch (action.type) {
    case 'NEW_ASSET_ADDED':
      return { ...state, newAsset: action.payload } || false;
    case 'ASSET_FETCHED':
      return { ...state, assets: action.payload } || false;
    case 'ASSET_EDIT':
      return { editAsset: action.payload } || false;
    case 'ASSET_UPDATE':
      return { editAsset: action.payload } || false;
    default:
      return state;
  }
}
