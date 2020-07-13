const express = require('express');
const router = express.Router();

router.get('/books', (req, res, next) => {
    res.send({
        message: "OK",
        data: [{
            id: 1,
            name: "Wadidaw"
        }, {
            id: 2,
            name: "Hahahaha"
        }, {
            id: 3,
            name: "Uhuyyyy!!!"
        }]
    })
});
router.get('/book-detail', (req, res, next) => {
    res.send({ id: 1, name: "Wadidaw" })
})

module.exports = router