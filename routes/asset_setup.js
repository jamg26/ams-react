const mongoose = require('mongoose');
const SETUP = mongoose.model('hr_asset_setups');

module.exports = app => {
  app.get('/api/asset_setup_list', async (req, res) => {
    const asset_tags = await SETUP.find({ asset_setup_status : '1', asset_setup_tag : 'Asset Tag' })
    const asset_tags_groupped = await SETUP.aggregate([ 
      {$match :{asset_setup_status : '1', asset_setup_tag : 'Asset Tag'}},
      {$group:{_id:"$asset_setup_description", data:{$push:"$$ROOT"}}}]);
    const asset_tags_category_groupped = await SETUP.aggregate([ 
      {$match :{asset_setup_status : '1', asset_setup_tag : 'Asset Tag'}},
      {$group:{_id:"$asset_setup_category", data:{$push:"$$ROOT"}}}]);
    const asset_tags_sub_category_groupped = await SETUP.aggregate([ 
      {$match :{asset_setup_status : '1', asset_setup_tag : 'Asset Tag'}},
      {$group:{_id:"$asset_setup_sub_cat", data:{$push:"$$ROOT"}}}]);  
    const asset_site_and_location = await SETUP.find({asset_setup_status : '1', asset_setup_tag : 'Site And Location'});
    const asset_site_groupped = await SETUP.aggregate([ 
      {$match :{asset_setup_status : '1', asset_setup_tag : 'Site And Location'}},
      {$group:{_id:"$asset_setup_site", data:{$push:"$$ROOT"}}}]);
    const asset_location_groupped = await SETUP.aggregate([ 
          {$match :{asset_setup_status : '1', asset_setup_tag : 'Site And Location'}},
          {$group:{_id:"$asset_setup_location", data:{$push:"$$ROOT"}}}]);
    var result = {
        asset_tags,
        asset_site_and_location,
        asset_tags_groupped,
        asset_tags_category_groupped,
        asset_tags_sub_category_groupped,
        asset_site_groupped,
        asset_location_groupped
    }
    res.send(result);
  });

  app.post('/api/save_asset_setup', async (req,res)=>{
    const request = req.body;
    const response= await new SETUP({
      asset_setup_tag : 'Asset Tag',
      asset_setup_description : request.AssetDescription,
      asset_setup_ad : request.AssetDescriptionCode,
      asset_setup_category : request.AssetCategory,
      asset_setup_ac : request.AssetCategoryCode,
      asset_setup_sub_cat : request.AssetSubCategory,
      asset_setup_sc : request.AssetSubCategoryCode,
      uom : request.SerialNumber,
      uom_abbr : request.PlateNumber,
      asset_setup_status : 'NEW',
    })
    await response.save();
    res.send(request)
  })
  app.post('/api/save_site_and_location', async (req, res)=>{
    const request = req.body;
    const response= await new SETUP({
      asset_setup_tag : 'Site And Location',
      asset_setup_location : request.asset_setup_location,
      asset_setup_site : request.asset_setup_site,
      asset_setup_status : 'NEW',
    })
    await response.save();
    res.send(request)
  })
};
