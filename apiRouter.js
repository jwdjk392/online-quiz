const { Router } = require('express');
const { getQuiz, registerQuiz } = require('./dbAgent.js')

const router = Router();

router.get("/get-quiz/:id", (req, res) => {
    try {
        getQuiz(req.params.id)
    } catch (error) {
        res.status(404).send({"status": "ERROR", "code": "NO-DATA", "message": "The requested data does not exist."})
    }
})

router.post("/upload-quiz", (req, res) => {
    // TODO
})

module.exports = router;