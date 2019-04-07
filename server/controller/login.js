const Router = require('express').Router;

const router = new Router();

router.get('/:id', (req, res, next) => {
    res.send({status: true});
});

module.exports = router;