const itemsController = require("../controllers/items-controller");
const Router = require("express").Router;
const router = new Router();
router.get(`/`, itemsController.getItems);
router.post(`/`, itemsController.createItem);

module.exports = router;
