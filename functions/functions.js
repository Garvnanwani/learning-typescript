"use strict";
// how you define types for fn in ts with return type
exports.__esModule = true;
exports.betterGetNames2 = exports.betterGetNames = exports.getNames = exports.introduce = exports.fetchData = exports.printFormat = exports.format = exports.addStrings = void 0;
function addNumbers(a, b) {
    return a + b;
}
// you dont have module.exports in ts
exports["default"] = addNumbers;
// arrow function in ts
// also default value is shown
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = ""; }
    return str1 + " " + str2;
};
exports.addStrings = addStrings;
// Union types
// sometimes you want to have a variable or a function take two or more different types and unions help there
var format = function (title, param) {
    return title + " " + param;
};
exports.format = format;
// void type is used when function doesnt returns something
var printFormat = function (title, param) {
    console.log(exports.format(title, param));
};
exports.printFormat = printFormat;
// Promise type
var fetchData = function (url) {
    return Promise.resolve("Data from " + url);
};
exports.fetchData = fetchData;
// rest parameters
var introduce = function (salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return salutation + " " + names.join(" ");
};
exports.introduce = introduce;
// IMP
// TS inforces types at compile time and not run time so keep that in mind
// so if this code gets compiled and used in javascript, and lets say you dont pass first and last, you will get run time error which we dont want
var getNames = function (user) {
    return user.first + " " + user.last;
};
exports.getNames = getNames;
//  better way is to do optional chaining ( ?. ) and check if user exists before using its properties
// will return undefined if first, last not defined instead of run time error
var betterGetNames = function (user) {
    return (user === null || user === void 0 ? void 0 : user.first) + " " + (user === null || user === void 0 ? void 0 : user.last);
};
exports.betterGetNames = betterGetNames;
// can make it even better with null coalescing operator ( ?? ) that wont return undefined but a default
var betterGetNames2 = function (user) {
    var _a, _b;
    return ((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : 'first') + " " + ((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : 'last');
};
exports.betterGetNames2 = betterGetNames2;
