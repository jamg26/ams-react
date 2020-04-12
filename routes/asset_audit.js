const mongoose = require('mongoose');
const Asset = mongoose.model('hr_assets');

module.exports = (app) => {
  app.post('/api/audit', async (req, res) => {
    const { asset_location, asset_site } = req.body;
    const assets = await Asset.find({
      asset_location,
      asset_site,
    });
    res.send(assets);
  });
};
