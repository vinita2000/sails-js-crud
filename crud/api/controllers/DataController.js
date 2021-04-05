
module.exports = {
  add: function(req, res){
    const {name, age} = req.body;
    Data.create({name, age}).exec((err)=>{
      if (err){
        res.status(500).json({
          message: 'Failed'
        });
      }
      res.status(200).json({
        message: 'Data added'
      });
    });
  },
  list: async(req, res) => {
    const data = await Data.find();
    if(!data){
      res.send(500, {message: 'db error'});
    }
    res.status(200).json({
      message: 'Data List',
      data: data
    });
  },
  update: async (req, res) => {
    try{
      console.log(req.body);
      const data = await Data.update(
        {_id:req.userID},
        {name:req.body.newName}).fetch();
      if(!data){
        throw new Error('No user found');
      }
      res.status(200).json({
        message: 'New data',
        data: data
      });
    }catch(e){
      res.status(500).json({
        message: e.message
      });
    }
  },
  delete: async (req, res) => {
    try{
      console.log(req.body);
      await Data.destroyOne({_id:req.body.userID});
      res.status(200).json({
        message: 'Data deleted'
      });
    }catch(e){
      res.status(500).json({
        message: e.message
      });
    }
  }
};

