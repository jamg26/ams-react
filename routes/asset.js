const mongoose = require('mongoose');
const Asset = mongoose.model('hr_assets');

module.exports = (app) => {
  app.post('/api/assets', async (req, res) => {
    const asset = await new Asset(req.body).save();
    res.send(asset);
  });

  app.get('/api/assets', async (req, res) => {
    const assets = await Asset.find({});
    res.send(assets);
  });

  app.patch('/api/assets', async (req, res) => {
    const body = req.body;
    const assets = await Asset.findByIdAndUpdate(
      req.body._id,
      { $set: body },
      {
        useFindAndModify: false,
      }
    );
    res.send(assets);
  });
};
