var MagicNames = ["David Blanie", "Harry Houdini", "Uri Geller"];
function show_magicians(MNames) {
    for (var _i = 0, MNames_1 = MNames; _i < MNames_1.length; _i++) {
        var name_1 = MNames_1[_i];
        console.log(name_1);
    }
}
function make_great(MNames) {
    var makegreat = MNames.map(function (MNames) { return "Honorable Great " + MNames; });
    return makegreat;
}
var greatnames = make_great(MagicNames);
console.log("True OG Magicians: ");
show_magicians(MagicNames);
console.log("\nGreat Magicians!: ");
show_magicians(greatnames);
