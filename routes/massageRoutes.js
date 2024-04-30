const {
  _getAllMassages,
  _getMassageById,
  _postMassage,
  _deleteMassage,
  _updateMassage,
} = require("../controllers/massageControoler.js");
const express = require(`express`);
const router = express.Router();

router.get(`/`, _getAllMassages);
router.get(`/:uid`, _getMassageById);
router.post(`/:uid`, _postMassage);
router.delete("/:userId/:massageId", _deleteMassage);
router.put(`/:uid`, _updateMassage);
module.exports = router;
