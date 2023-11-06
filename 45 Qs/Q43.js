var MagicName = ["David Blanie", "Harry Houdini", "Uri Geller"];
function shows_magicians(MNames) {
    for (var _i = 0, MNames_1 = MNames; _i < MNames_1.length; _i++) {
        var name_1 = MNames_1[_i];
        console.log(name_1);
    }
}
function making_great(MNames) {
    var makegreat = MNames.map(function (MNames) { return "Honorable Great " + MNames; });
    return makegreat;
}
var Greatnames = making_great(MagicName);
console.log("True OG Magicians: ");
shows_magicians(MagicName);
console.log("\nGreat Magicians!: ");
shows_magicians(Greatnames);
