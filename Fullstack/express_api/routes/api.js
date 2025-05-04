var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/record_post', function (req, res, next) {
  if (!req.body) {
    return;
  }

  const item = Object.assign({
    title: '',
  }, req.body);

  res.json({
    success: true, message: {
      id: Date.now(),
      title: item.title
    }
  });
});

module.exports = router;
