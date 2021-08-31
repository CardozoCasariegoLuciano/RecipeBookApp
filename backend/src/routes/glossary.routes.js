const {Router} = require("express")
const router = Router()
const {getGlossaryes, addAGlossarye, getAsingleGlossarye, deleteAGlossarye, updateAGlossarye} = require("../controllers/glossary.controllers")

router.route("/")
    .get(getGlossaryes)
    .post(addAGlossarye)

router.route("/:id")
    .get(getAsingleGlossarye)
    .delete(deleteAGlossarye)
    .put(updateAGlossarye)

module.exports = router