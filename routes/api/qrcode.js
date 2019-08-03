const express = require("express");
const router = express.Router();
const qr = require('qr-image');



router.get("/query", (req, res) => {
    if (!req.query.url) {
        res.json({
            status: 2,
            msg: "生成内容不能为空"
        })
    } else {
        res.end(qr.imageSync(req.query.url))
    }

});

module.exports = router;