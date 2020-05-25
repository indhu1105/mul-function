let indhu = require('./node_modules/indhu-test/indhu');
let mul = require('./mul');

let result = mul(4);
let expected = 12.56;

indhu.test(result).toBeEqualTo(expected);

/* check the always positive case*/
result = mul(3);
expected = 9.42;

indhu.test(result).toBeEqualTo(expected);

/*Fail case*/
result = mul(6);
expected = 18.8;

indhu.test(result).toBeEqualTo(expected);