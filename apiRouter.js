const { Router } = require('express');
const { getQuiz, registerQuiz } = require('./dbAgent.js')

const router = Router();

router.get("/get-quiz/:id", (req, res) => {
    try {
        let quiz = getQuiz(req.params.id)
        res.status(200).send({
            "status": "OK",
            "quiz": quiz
        })
    } catch (error) {
        res.status(404).send({"status": "ERROR", "code": "NO-DATA", "message": "The requested data does not exist."})
    }
})

router.post("/upload-quiz", (req, res) => {
    // TODO
    try {
        
    } catch (error) {
        res.status(500).send({"status": "ERROR", "code": "INTERNAL-ERROR", "message": "Interval server error."})
    }
})

module.exports = router;