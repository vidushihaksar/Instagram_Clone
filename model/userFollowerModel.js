const db = require("./connection");
const userRouter = require("../router/userRouter");

// follow request send follower ke ui 
const createRequest = function (mappingObj) {
    return new Promise(function (resolve, reject) {
        db.query('INSERT INTO user_follower SET ?', mappingObj, function (err, result) {
            // Neat!
            if (err) {
                reject(err)
            } else {
                resolve(mappingObj);
            }
        });
    })
}
module.exports.createRequest = createRequest;
