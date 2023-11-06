var num = [9, 8, 7, 6, 5, 4, 3, 2, 1];
for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
    var number = num_1[_i];
    var ordinal = void 0;
    if (number === 1) {
        ordinal = "st";
    }
    else if (number === 2) {
        ordinal = "nd";
    }
    else if (number === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log("".concat(number).concat(ordinal));
}
