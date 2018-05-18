//class
var about = /** @class */ (function () {
    function about(name, age, gender, dateOfbirth, Address, currentcity, homecity, phonenumber, //constructor parameters
    Email, study, languagesKnown, familyMembers, relationshipStatus) {
        var _this = this;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.dateOfbirth = dateOfbirth;
        this.Address = Address;
        this.currentcity = currentcity;
        this.homecity = homecity;
        this.phonenumber = phonenumber;
        this.Email = Email;
        this.study = study;
        this.languagesKnown = languagesKnown;
        this.familyMembers = familyMembers;
        this.relationshipStatus = relationshipStatus;
        //methods
        this.userDetails = function () {
            console.log(user); //prints entire user information
        };
        this.addLanguages = function () {
            var newlang = " ";
            while (newlang) {
                newlang = window.prompt("enter new lang"); // adding languages,similarly you can add location and add current city
                if (newlang == null) {
                    break;
                }
                _this.languagesKnown.push(newlang);
            }
            console.log(_this.languagesKnown);
            _this.savechanges(); //saving the changes
        };
        this.Removelanguage = function () {
            _this.languagesKnown.pop(); //removing languages
            console.log(_this.languagesKnown);
            _this.savechanges();
        };
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.dateOfbirth = dateOfbirth;
        this.Address = Address;
        this.currentcity = currentcity;
        this.homecity = homecity;
        this.phonenumber = phonenumber;
        this.Email = Email;
        this.study = study;
        this.languagesKnown = languagesKnown;
        this.familyMembers = familyMembers;
        this.relationshipStatus = relationshipStatus;
    }
    about.prototype.getname = function () {
        return this.name; // similarly you can get age ,gender, date of birth etc..
    };
    about.prototype.update = function () {
        console.log("profile updated!!");
    };
    about.prototype.savechanges = function () {
        this.update();
    };
    return about;
}());
var user = new about("sam", 25, "female", "30 jun 1994", "thirupathi", "Hyderabad", "Banglore", 8989898, "sahanahan@gmail.com", ["10th", "inter", "btech"
], ["Telugu", "hindi", "english"], ["ram", "rahim"], "single");
user.userDetails();
user.addLanguages();
