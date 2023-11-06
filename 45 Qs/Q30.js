var username = ["Admin", "Ammar", "Hamah", "Amir", "Okasha"];
function greetusers() {
    for (var i in username) {
        if (username[i].toLowerCase() == "Admin") {
            console.log("Hello Admin, what work are we getting done today?");
        }
        else {
            console.log("Greetings " + username[i] + " We are at your services ");
        }
    }
}
greetusers();
