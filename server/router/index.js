const cardsController = require("../controllers/cards-controller");
const Router = require("express").Router;
const router = new Router();

router.post(`/card`, cardsController.addCard);
router.get(`/cards`, cardsController.getCards);

module.exports = router;
