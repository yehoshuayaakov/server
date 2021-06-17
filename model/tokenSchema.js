const Encrypt = require ("../utils/encrypt.js")
var split = "*~*";
var time = 1000 * 60 * 60;
function Token (isNew, token, name, Id,  phonenumber){
    if (isNew){
        this.name = name;
        this.Id = Id;
        this.phonenumber = phonenumber;
        this.expirationTime = Date.now() + time;
        this.token = Encrypt.getEncrypt(
            name + split + Id + split  + phonenumber + split + this.expirationTime
        )
    }
    else {
        this.token = token;
        var tokenString = Encrypt.getDecrypt(token).split(split);
        this.name = tokenString[0];
        this.Id = tokenString[1];
        this.phonenumber = tokenString[2];
        this.expirationTime = tokenString[3];
    }
    this.isNotExpired = function () {
        if(this.expirationTime && parseInt(this.expirationTime)> Date.now()){
            return true;
        }
        console.log("token expired(function)")
        return false;
    }
}

module.exports = Token;