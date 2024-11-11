const bcrypt = require('bcrypt');
const hash = "$2b$10$bg3iAP6WvWZWXfnRTbsyuODVGD04Vv6nKRrFQ.cNvDn24KaLe0.46"; // From DB
const password = "Ankit124"; // Plaintext password

bcrypt.compare(password, hash, (err, isMatch) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Password Match:', isMatch);
    }
});