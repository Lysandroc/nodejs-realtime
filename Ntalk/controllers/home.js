
module.exports = function(app) {
  var HomeController = {
    index: function(req, res) {
      res.render('views/home/index');
    } 
  };
  return HomeController;
};