var rule = require("./lib/rule");


var decompose = function (numbers) {
    "use strict";
    return numbers;
};


module.exports = function (city, district, street, rest) {
    "use strict";
    return rule[city][district][street](decompose(rest));
};
