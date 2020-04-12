import axios from 'axios';

// asset queries
export const fetchAuditByLocationAndSite = async (asset_location, asset_site) => {
  return axios.post('/api/audit', { asset_location, asset_site });
};
