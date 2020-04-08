const mongoose = require('mongoose');
const AssetSetup = mongoose.model('hr_asset_setups');
const Asset = mongoose.model('hr_assets');
const AssetRequest = mongoose.model('hr_asset_requests');
const AssetTransactionLog = mongoose.model('hr_asset_transaction_logs');

module.exports = app => {
  app.get('/api/pending_asset_setup_list', async (req, res) => {
    const asset_tags = await AssetSetup.find({ asset_setup_status : 'Pending'})
    
    res.send(asset_tags);
  });
  app.get('/api/checked_out_asset_list', async (req, res) => {
    const asset_tags = await AssetRequest.find({ $or : [{ request_status : '1.1'}, {request_status : '2'}] }).populate('asset_tag').populate('emp_id');
    
    res.send(asset_tags);
  });
  app.get('/api/maintenance_asset_list', async (req, res) => {
    const asset_tags = await Asset.find({ asset_approval : 'Confirmed', asset_transaction_status : 'Maintenance'})
    
    res.send(asset_tags);
  });
  app.get('/api/request_logs_list', async (req, res)=>{
    const list = await AssetTransactionLog.find().populate('asset_tag').populate('log_action_requestor_id');

    res.send(list)
  })
  app.get('/api/asset_management_officer_pending_request', async (req, res)=>{
    const list = await Asset.find({ $or : [{asset_approval : 'Pending'}, {asset_approval : undefined},{asset_approval : ''} ]})
    const asset_setup = await AssetSetup.find({ asset_setup_status : 'Pending'})
    var collection= [];
        for(var c=0; c<list.length;c++){
          collection.push([list[c].asset_setcheck_defualt,list[c]._id,list[c].date_added,list[c].data_entry_by,'New Fixed Asset',list[c].asset_description,"N/A","","","NEW_ASSET"]);
        }
        for(var c=0; c<asset_setup.length;c++){
          collection.push([asset_setup[c].ticket_no,asset_setup[c]._id,asset_setup[c].created_at,asset_setup[c].requested_by,'New Asset Setup',asset_setup[c].asset_setup_tag,"N/A","","","NEW_ASSET_SETUP"]);
        }

    res.send(collection);
  })
  app.get('/api/fixed_asset_officer_pending_request', async (req, res)=>{
    const list = await Asset.find({asset_approval : 'Approved'})
    const asset_setup = await AssetSetup.find({ asset_setup_status : 'Approved'})
    var collection= [];
        for(var c=0; c<list.length;c++){
          collection.push([list[c].asset_setcheck_defualt,list[c]._id,list[c].date_added,list[c].data_entry_by,'New Fixed Asset',list[c].asset_description,"N/A","","","NEW_ASSET"]);
        }
        for(var c=0; c<asset_setup.length;c++){
          collection.push([asset_setup[c].ticket_no,asset_setup[c]._id,asset_setup[c].created_at,asset_setup[c].requested_by,'New Asset Setup',asset_setup[c].asset_setup_tag,"N/A","","","NEW_ASSET_SETUP"]);
        }
    res.send(collection);
  })
  app.get('/api/data_entry_officer_pending_request', async (req, res)=>{
    const list = await Asset.find({asset_approval : 'Denied'})
    var collection= [];
        for(var c=0; c<list.length;c++){
          collection.push([list[c].asset_setcheck_defualt,list[c]._id,list[c].date_added,list[c].data_entry_by,'New Fixed Asset',list[c].asset_description,"N/A","","","NEW_ASSET"]);
        }

    res.send(collection);
  })



  app.post('/api/approve_new_asset', async (req, res)=>{
    const request = req.body;
    const assets = await Asset.findByIdAndUpdate(
      request.id,
      { asset_approval : request.status },
      {
        useFindAndModify: false,
      }
    );
    await assets.save();
    res.send(request)
  })
  app.post('/api/approve_new_asset_setup', async (req, res)=>{
    const request = req.body;
    const assets = await AssetSetup.findByIdAndUpdate(
      request.id,
      { asset_setup_status : request.status },
      {
        useFindAndModify: false,
      }
    );
    await assets.save();
    res.send(request)
  })
  
};
