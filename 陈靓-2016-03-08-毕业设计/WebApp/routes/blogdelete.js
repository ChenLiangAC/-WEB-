//文章删除
var express = require('express'),
    router = express.Router(),
    Mood = require('../models/moodData.add.js'),

    TITLE_LOGIN = '文章删除';

router.get('/:mood_id_', function (req, res, next) {

    var moodid_ = req.params.mood_id_;

    if (moodid_ != null && moodid_ != "") {
        Mood.deleteMood(moodid_, function (err) {
            if (err) {
                next(err);
            } else {
                res.redirect("/blog");
            }
        });
    } else {
        next(new Error("新闻不存在"));
    }
    console.log("删除成功", moodid_);
});
module.exports = router;