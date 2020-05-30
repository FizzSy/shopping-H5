const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");
let ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
    UserId: { type: ObjectId },
    userName: { unique: true, type: String },
    password: String,
    createAt: { type: Date, default: Date.now() },
    lastLoginAt: { type: Date, default: Date.now() },
});

userSchema.pre("save", function (next) {
    bcrypt.genSalt(10, (error, salt) => {
        //生成随机字符salt
        next();
        if (error) return next(error);
        bcrypt.hash(this.password, salt, null, (err, hash) => {
            //用随机字符进行加密
            if (err) {
                return next(err);
            } else {
                this.password = hash;
                next();
            }
        });
    });
});

userSchema.methods = {
    comparePassword: (_password, password) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(_password, password, (err, isMatched) => {
                if (!err) resolve(isMatched);
                else reject(err);
            });
        });
    },
};

mongoose.model("User", userSchema);
