
module.exports.routes = {
  '/': { view: 'pages/homepage' },
  'post /data/add': 'DataController.add',
  'get /data/list': 'DataController.list',
  'put /data/update': 'DataController.update',
  'delete /data/delete': 'DataController.delete'
};
