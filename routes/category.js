const express = require('express');
const router = express.Router();

router.get('/category', (req, res, next) => {
    res.send({ data: [{ id: 1, name: "Jelek" }, { id: 2, name: "Jelek Banget" }, { id: 3, name: "Gak Usah Dibeli" }] })
});

module.exports = router