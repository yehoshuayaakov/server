var Crypto = require("crypto-js");
const Bcrypt = require("bcryptjs");
const key = "ggkknnlkjoijoijfja";
function crypto(){

    function cryptPassword(password){
        const hash = Bcrypt.hashSync(password, 10);
        return hash;
    }

    function compare(password1, password2){
        return Bcrypt.compareSync(password1, password2);

    }

    function getEncrypt(input){
        const encryption = Crypto.AES.encrypt(input, key);
        return encryption.toString();
    }

    function getDecrypt(input){
        const decrypt = Crypto.AES.decrypt(input, key);
        return decrypt.toString(Crypto.enc.Utf8);

    }
    return{
        cryptPassword : cryptPassword,
        getEncrypt,
        getDecrypt,
        compare,
        
    }
}
module.exports = crypto();