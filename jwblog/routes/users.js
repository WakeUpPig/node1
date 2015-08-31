var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/reg', function(req, res, next) {
  res.render('user/reg',{
    title:"欢迎注册",
  });
});
router.post('/reg', function(req, res, next) {
  //res.send(req.body);
  db.user.inset({username:req.body["re-password"]});
  res.redirect('/');
});
module.exports = router;
