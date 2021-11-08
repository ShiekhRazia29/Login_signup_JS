const fs=require("fs");
let read_data=require("readline-sync");
function password(Pass_word){
    special_char=/[!@#$%^&*()_+<>?/]/,number=/[0-9]/,upper_case=/[A-Z]/,lower_case=/[a-z]/
    if(special_char.test(Pass_word)&&number.test(Pass_word)&&upper_case.test(Pass_word) &&lower_case.test(Pass_word)){
        return true
    }else{
        return false
    }
}
function fileExist(fileName) {
    const File_path = "C:\Users\Shiekh Razia\Desktop\loginpage\login.js" + fileName
    console.log(File_path,"fgh");
    var exist = fs.existsSync(fileName);
    //console.log(exist);
    return exist
}
function read_File(fileName) {
    var data = fs.readFileSync(fileName);
    converted_data = JSON.parse(data);
    return converted_data;
}
function write_In_File(fileName, data) {
    p = fs.writeFileSync(fileName, data);
}
function checkId(id) {
    var data = read_File('User_Details.json');
    for (i of converted_data) {
        // console.log(i);
        if (i["username"] === id) {
            return true
        }
    }
    return false
}
function checkPwd() {
    var data = read_File("User_Details.json") 
    for (i of converted_data) {
        if (i["password"] === pwd_1) {
            return true
        }
    } return false
}
const choose_Option = read_data.question("Enter the option, 1 for login and 2 to for signup:")
if (choose_Option === "1") {
    login()
    
   
}
else {
    signUp()
}
function signUp() {
    var username = read_data.question("Enter username:");
    var pwd = read_data.question("Enter password:");
    var fileexist = fileExist("User_Details.json");
    console.log(fileexist);
    if (fileexist == true) {
        var readingData = read_File('User_Details.json')
        if (checkId(username) === true) {
            console.log(username,"already Exists.\nPlease Choose a new Username.");
            signUp()
        } else {
            var checkingPwd = password(pwd)
            if (checkingPwd === true) {
                var hobiies = read_data.question("Enter hobbies:");
                var gender = read_data.question("Enter the gender:")
                var designation=read_data.question("Enter Your Designation:")
                var More_about=read_data.question("Let us know more about you:")
                dic=readingData.push({ username: username, password: pwd, gender: gender, hobbies: hobiies,designation:designation,More_about:More_about})
                console.log(readingData)
                write_In_File('User_Details.json', JSON.stringify(readingData, null, 3))
            }
            else {
                //alert("Weak Password");//
                console.log("Please enter the strong password:");
                signUp();
            
            }

        }

    }
    else {
        empty = []
        // readingData = readAfile(data.json)
        a = write_In_File("User_Details.json", JSON.stringify(empty, readingData))
        signUp();
    }
}
function login() {
    user = read_data.question("Enter the name:")
    pwd_1 = read_data.question("Enter the password:")
    readFile = read_File("User_Details.json")
    file_exist = fileExist("User_Details.json")
    if (file_exist === true) {
        if (checkId(user) === true) {
            check_pwd = checkPwd(pwd_1)
            if (check_pwd === true) {
                console.log(user," is logged in succesfully");
                console.log("Here are the details:");
                // response=showDetails()
                function showDetails(){
                    open_file=read_File("User_Details.json")
                    for(i of open_file){
                        if(i["username"] === user){
                            return`your name is ${i["username"]} and your hobbies are ${i["hobbies"]} and your gender is ${i["gender"]}Your Designation is ${i["designation"]}More Details are ${i["More_about"]}`
                        }

                    }


                }
                response=showDetails()
                console.log(response);
                //  open funcytion load the data again loop on list you got find out the user by using its username and send the string
                // return `his name is ${i.name} and his hobbies are ${}`
                // console.log(response);
            } else {
                console.log("please enter the correct password.");
            }
        } else {
            console.log(user,"OOPS!  Account Not Found.");
            // signUp()
        }
    } else {
        console.log("This File doesn't exsit please creat your account.");
        signUp()
    }
}