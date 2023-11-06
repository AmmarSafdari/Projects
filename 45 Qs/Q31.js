var names = ["Admin", "Iqbal", "Qasim", "Amir", "Okasha"];
function greetusers(names) {
    if (names.length === 0) {
        console.log("We need to get users!");
        return;
    }
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        if (name_1.toLowerCase() === "Admin") {
            console.log("Hello Admin, What are we geting sone today");
        }
        else {
            console.log("Greetings " + names + " We are at your services");
        }
    }
}
console.log("For non empty username:\n");
greetusers(names);
