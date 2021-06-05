var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hamza Chat' });
});

router.get("/chat/:room", function (req, res, next) {  
  res.render("chat", { title: "Chat", room: req.params.room  });
});



module.exports = router;
