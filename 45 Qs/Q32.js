var current_users = ["Ammar", "Zia", "Amir", "Imran", "Hamzah"];
var new_users = ["AMMar", "Okasha", "Shehzad", "Iqbal", "Qasim", "zia"];
function checkusername(current_users, new_users) {
    var lowercasedCurrentUsers = current_users.map(function (user) { return user.toLowerCase; });
    for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
        var newuser = new_users_1[_i];
        var loercasedNewUser = newuser.toLowerCase();
        if (loercasedNewUser.includes(loercasedNewUser)) {
            console.log("Username " + newuser + " is already taken");
        }
        else {
            console.log("Username " + newuser + " is available");
        }
    }
}
checkusername(current_users, new_users);
