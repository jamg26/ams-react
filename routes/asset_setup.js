const mongoose = require('mongoose');
const SETUP = mongoose.model('hr_asset_setups');

module.exports = app => {
  app.get('/api/asset_setup_list', async (req, res) => {
    const asset_tags = await SETUP.find({asset_setup_status : '1', asset_setup_tag : 'Asset Tag'});
    const asset_site_and_location = await SETUP.find({asset_setup_status : '1', asset_setup_tag : 'Site And Location'});
    var result = {
        asset_tags,
        asset_site_and_location
    }
    res.send(result);
  });

};
