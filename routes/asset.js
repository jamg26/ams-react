const mongoose = require('mongoose');
const Asset = mongoose.model('hr_assets');

module.exports = app => {
  app.post('/api/assets', async (req, res) => {
    const asset = await new Asset(req.body).save();

    res.send(asset);
  });
};
