//class
class about {
    constructor(public name:string,
        public age:number,
        public gender:string,
        public dateOfbirth:string,
        public Address:string,
        public currentcity :string,
        public homecity:string,
        public phonenumber:number,                    //constructor parameters
        public Email:string,
        public study:string[],
        public languagesKnown:string[],
        public familyMembers:string[],
        public relationshipStatus:string,
       ){
           this.name=name;
           this.age=age;
           this.gender=gender;
           this.dateOfbirth=dateOfbirth;
           this.Address=Address;
           this.currentcity=currentcity;
           this.homecity=homecity;
           this.phonenumber=phonenumber;
           this.Email=Email;
           this.study=study;
           this.languagesKnown=languagesKnown;
           this.familyMembers=familyMembers;
           this.relationshipStatus=relationshipStatus;


    }
    //methods
    userDetails=()=>{
        console.log(user);       //prints entire user information
    }
    getname(){
        return this.name;            // similarly you can get age ,gender, date of birth etc..
    }
    addLanguages=()=>{
        let newlang:string = " ";
        while(newlang){
            newlang=window.prompt("enter new lang");      // adding languages,similarly you can add location and add current city
                                                                
            if(newlang==null){
                break;
            }
            this.languagesKnown.push(newlang);
        }
        console.log(this.languagesKnown);
        this.savechanges();   //saving the changes
    }
    Removelanguage=()=>{
        this.languagesKnown.pop();                       //removing languages
        console.log(this.languagesKnown);
        this.savechanges();
    }
    update(){
          console.log("profile updated!!");
    }
    savechanges(){
      this.update();
    }
 

}
let user = new about("sam",25,"female","30 jun 1994","thirupathi","Hyderabad","Banglore",8989898,"sahanahan@gmail.com",["10th","inter","btech"
],["Telugu","hindi","english"],["ram","rahim"],"single")
user.userDetails();
user.addLanguages();
