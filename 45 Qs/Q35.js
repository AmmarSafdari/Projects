var anim = ["Horse", "Camel", "Goat"];
console.log("List of animals");
for (var _i = 0, anim_1 = anim; _i < anim_1.length; _i++) {
    var list = anim_1[_i];
    console.log(list);
}
console.log("\nStatements on Animals: ");
for (var _a = 0, anim_2 = anim; _a < anim_2.length; _a++) {
    var list = anim_2[_a];
    if (list === "Horse") {
        console.log("A " + list + " is the best animal");
    }
    else if (list === "Camel") {
        console.log("A " + list + " was a very widely used mode of transport in the desert");
    }
    else if (list === "Goat") {
        console.log("A " + list + " is used for getting milk and also to be enjoyed on Eid");
    }
}
console.log("\n What do they all have in common you may ask");
console.log("They are all mammals!");
