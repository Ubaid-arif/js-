

// var first = prompt("Enter Your first name.");
// var last = prompt("Enter your last name.");
// var fullname = first + " " +last;
// document.write("<h1>");
// document.write (fullname);
// document.write("<h1>");




// var mobile = prompt("which favorite mobile phone model is yours?");
// document.write("<h1>");
// document.write("My favorite phone is: "+ mobile +"<br>");
// document.write("Lenght of string: "+ mob.length);
// document.write("</h1>");




//  var pak = "Pakistan";    
//  document.write("<h1>");
// document.write("String is: "+ pak+"<br>");
// document.write("index of 'n': "+pak.indexOf("n"));
// document.write("</h1>");




// var a = "Hello World";
// document.write("<h1>");
// document.write("String is: "+ a+"<br>");
// document.write("List of index 'l': "+ a.lastIndexOf("l"));
// document.write("</h1>");




// var string = "Pakistani";              
// var res =  string.charAt(3)
// document.write("<h1>");
// document.write("String is: " + string + "<br>");
// document.write("caracter at index 3: " + res);
// document.write("</h1>");






// var firs = prompt("Enter Your first name");
// var last = prompt("Enter your last name");
// var fullname = (firs.concat(last));
// alert (fullname);




// var a = "karachi";
// document.write("<h1>");
// document.write("City is: "+ a+"<br>");
// document.write(" After replacment: "+ a.replace("karachi","Islamabad"));
// document.write("</h1>");



// var message = "ubaid and zain are best friends. They play cricket and football together";
//  document.write("<h1>");
// document.write(" After replacment: "+ message.replace(/and/gi, "&"));
// document.write("</h1>");

  

// var value = 472;
// var b = value.toString();
// var num = Number(b);
// document.write("<h1>")
// document.write("value:" + b +"<br>");
// document.write(" Type:"+ "string" +"<br>");
// document.write("value:" + num +"<br>");
// document.write(" Type:"+ "number" +"<br>");
// document.write("</h1>")
// console.log(b)



// var val = prompt("enter any word");
// document.write("<h1>")
// document.write("User input: "+ val + "<br>")
// document.write("Upper Case : "+ val.toUpperCase());
// document.write("</h1>")


// var headcase = prompt("Enter any text") ;
// var firstchar = headcase.slice(0,1);
// var othercase = headcase.slice(1);
// firstchar = firstchar.toUpperCase()
// othercase = othercase.toLowerCase()
// var z = firstchar + othercase;
// document.write("<h1>")
// document.write("User input:" + headcase + "<br>");
// document.write("Title case: "+ z );
// document.write("</h1>")




// var  num = 35.36;  
// var val = num.toString()
// var firstchar = val.slice(0,2);
// var othercase = val.slice(3);
// var z = firstchar + othercase;
// document.write("<h1>")
// document.write("Number: " + num + "<br>");
// document.write("Result: " + z);
// document.write("</h1>")




// var username = prompt("Please enter your username");
// for (var i = 0 ; i<username.length ; i++){
//     var char = username.charCodeAt(i)
//     if(char ===33 || char=== 44 || char === 46 || char === 64){
//         document.write("Please enter a vaild username")
//         var matchfound = 1
//         break
//     }
// }
// if (matchfound !== 1){
//     document.write("your username is valid ")
// }




// var A = ["cakes", "applepie", "cookies", "hips", "patties"];
// var  search = prompt("Welcome to shahzad sweets.what do yo want order sir/ma'am? ")
// search = search.toLowerCase()
// if (A.lastIndexOf(search)!== -1) {
//     alert("Cookie is available at index of  "+A.lastIndexOf(search)+  "  in over shop")
// }
// else{
//     alert("we are sorry. "+search+ "  is not available in over shop ")
// }


     


    // var password = prompt("Enter your password.");

    // var passw = /^[A-Za-z]\w{6,}$/;
    // if (password.match(passw)) {
    //     alert('Correct, try another...')
    // }
    // else {
    //     alert('Wrong...!')
    // }




// var university = "University of Karachi"
// var a = university.split("")
// document.write("<h1>")
// for (var i in a) {
//    document.write(" " + a[i]+"<br>");
// }
// document.write("</h1>")




// var input = prompt("Enter value check last char");
// var strlenght = input.length;
// document.write("<h1>")
// document.write("user input: "+ input + "<br>");
// document.write("last character of input: "+input.charAt(strlenght - 1));
// document.write("</h1>")






// var text = "The quick brown fox jumps over the lazy dog";
// var count = (text.match(/the/g) || [0]).length;
// document.write("<h1>");
// document.write("Text: "+ text+"<br>");
// document.write("There are "+count+ " occurrences of word “the”")
// document.write("</h1>");



// var number = prompt("Enter postivie interger","2.23456");
// document.write("<h1>")
// document.write("Number: "+ number + "<br>")
// document.write("Round of vlue: "+ Math.round(number)+ "<br>")
// document.write("Floor vlue: "+ Math.floor(number)+"<br>")
// document.write("Ceil value: "+ Math.ceil(number))
// document.write("</h1>")





// var number = prompt("Enter nagative interger","-2.673");
// document.write("<h1>")
// document.write("Number: "+ number + "<br>")
// document.write("Round of vlue: "+ Math.round(number)+ "<br>")
// document.write("floor vlue: "+ Math.floor(number)+"<br>")
// document.write("Ceil value: "+ Math.ceil(number))
// document.write("</h1>")






// var num = 4;
// document.write("<h1>")
// document.write("The absolute value of -4 is " + Math.abs(num));
// document.write("</h1>")



// var  val1 = 4;
// var val2 = 6; 
// var  dice = Math.random(7)*2 ;
// var floor = Math.floor(dice);
// document.write("<h1>")
// if (floor ===0){
//     document.write("random dice vlue: "+ val1 );
// }
// else {
//     document.write("random dice vlue: "+ val2);
// }
// document.write("</h1>")





// var val1 = "Heads"
// var val2 = "Tails"
// var coin = Math.random() * 2;
// var floor = Math.floor(coin);
// document.write("<h1>");
// if (floor === 0) {
//     document.write("2 <br>random coin vlue: " + val1);
// }
// else {
//     document.write("1 <br> random coin vlue: " + val2);
// }
// document.write("</h1>");





// var count = Math.random()*100;
// var floor = Math.floor(count);
// document.write("<h1>");
// document.write("random number between 1 and 100: "+ floor);
// document.write("</h1>");





// var weidht = prompt("Enter your weidth in kg.")
// document.write("<h1>");
// document.write("The weight of user is " +weidht + " kg")
// document.write("</h1>");





// var game = prompt ("Enter a number between 1 and 10")
// var count = Math.random()*10;
// var floor = Math.floor(count);
// console.log(floor)
// if(floor === 7 ){
//     alert("congratulate you win the game")
// }
// else{
//     alert("try again")
// }




// var a = new Date();
// document.write("<h1>");
// document.write(a);
// document.write("<h1>");





// var month = ["january", "february","March", "April","May", "june","July","Auguest","September","October","November","December"];
// var d = new Date();
// var n = month[d.getMonth()];
// document.write("<h1>");
// document.write("Current month: " + n) 
// document.write("</h1>");





// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var d = new Date();
// var n = dayNames[d.getDay()];
// document.write("<h1>");
// document.write("This is " + n) 
// document.write("</h1>");





// var daysNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var d = new Date();
// var n = daysNames[d.getDay()];
// document.write("<h1>");
// if(n === "Sun" || n=== "Sat"){
//  document.write("it's Fun Day " ) 
// }
// else{
//     document.write("This is "+n)
// }
// document.write("</h1>");






// var d = new Date();
// var n = d.getDate();
// document.write("<h1>");
// if( n <= 16){
//  document.write(" First fifteen days of the month" ) 
// }
// else{
//     document.write("Last days of the month")
// }
// document.write("</h1>");



 


// var d = new Date();
// var todaymali = d.getTime();
// var acuminit= (todaymali/(1000*60));
// document.write("<h1>");
// document.write("Current Date: " + d + "<br>");
// document.write("Elapsend millisecond since january 1 , 1970: " + todaymali + "<br>");
// document.write("Elapsend minutes since january 1 , 1970: "  + acuminit );
// document.write("</h1>");




// var d = new Date();
// var n = d.getHours();
// document.write("<h1>");
// if(n <=12){
//  document.write(" It's AM" ) 
// }
// else{
//     document.write("It's PM")
// }
// document.write("</h1>");




// var d = new Date("December 31, 2020");
// document.write("<h1>");
// document.write("Later date: "+d);
// document.write("</h1>");





// var firstRamadan = new Date("April 13 , 2021");
// var ramadanmili = firstRamadan.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = ramadanmili - todaymili;
// var accuday = Math.floor(diff/(1000*60*60*30));
// document.write("<h1>");
// document.write(accuday +" day have passed since 1st Ramadan ,2021");
// document.write("</h1>");



 


// var start20 = new Date("jan 1 ,2020");
// var startmili = start20.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - startmili;
// var accusec = Math.floor(diff / (1000));
// document.write("<h1>");
// document.write("On reference date "+today+ ",<br>");
// document.write(accusec + " seconds had passed since beginning of 2015 ")
// document.write("</h1>");




// var now = new Date();
// var d = new Date();
//  d.setHours(8);
// document.write("<h1>");
// document.write("Current Date: " + now + "<br>");
// document.write("1 hours age, it was "+d)
// document.write("</h1>");





// var now = new Date();
// var d = new Date();
//  d.setFullYear(1920);
// alert("Current Date: " + now );
// alert("100 years back, it was "+d)






// var dob = new Date(prompt("Enter birth year "," 1970"));
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// var accuage =Math.floor( diff/(1000*60*60*24*30*12));
// document.write("<h1>");
// document.write("Your age is "+ accuage+ "<br>")
// document.write("Your birth year is "+ dob.getFullYear());
// document.write("</h1>");






// var custmername = "M zain";
// var month = "june";
// var unit = "410";
// var chargeper = "16";
// var withindue = unit * chargeper;
// var latecharg = "350";
// var afterdue = (6560) + (350);
// document.write("<h1>");
// document.write("K-Electric bill");
// document.write("</h1>");
// document.write("Customer Name: " + custmername.bold() + "<br>")
// document.write("Month: " + month.bold() + "<br>");
// document.write("Number of units: " + unit.bold() + "<br>");
// document.write("Charges per unit: " + chargeper.bold() + "<br>")
// document.write("<br>")
// document.write("Net Amount Payable (within Due Date): " + withindue + "<br>");
// document.write("Late Payment Surcharge: " + latecharg.bold() + "<br>")
// document.write("Gross Amount Payable (after Due Date): " + afterdue);





// function date (){
//     var d = new Date();
//     return d;
// }
// document.write(date());





// function fullname() {
//     var firs = prompt("Enter Your first name");
//     var last = prompt("Enter your last name");
//     var fullname = firs + " " + last;
//     return fullname;
// }
// document.write(fullname())





// function add(a,b){
//      var z = a+b
//      return z;
// }
// var x = add(5,2);
// document.write(x)






// function calculater(num1 , oper , num2){
// if (oper === "+") {
//     return num1 + num2

// }
// else if (oper === "-") {
//    return  num1 - num2

// }
// else if (oper === "*") {
//  return   num1 * num2
// }
// else if (oper === "/") {
//   return  num1 / num2
// }
// else if (oper === "%") {
//  return  num1 / num2 * 100 + "%"
// }
// }
// document.write(calculater(2,"+",6))




// function square(x) {
//     return x * x;
//   };

//   document.write(square(12));




// function factorial(n) {
//     var answer = 1;
//     switch (n) {
//         case n == 0 || n == 1:
//             return answerl
//             break;

//         default:
//             for (var i = n; i >= 1; i--) {
//                 answer = answer * i
//             }
//             return answer;
//             break;
//     }
// }
// var n = 4;
// answer = factorial(n)
// document.write("The factorial of " + n + " is " + answer);



// function counting() {
// var i = prompt("enter first value")
// var j = prompt("Enter secend value")
//     for ( i ; i <j; i++) {
//      document.write( (i) +"<br>")
//           }
//           return is;
// }
// document.write(counting())




// function Hypotenuse(base, perpendicular){
//   return Math.sqrt(Math.pow(base, 2) + Math.pow(perpendicular, 2));
// }
// document.write("<h1>");
// document.write("Outer function: ");
// document.write(Hypotenuse( 5, 12));
// document.write("</h1>");




// function area(length, width) {
//     return length * width;
// }
// document.writeln('The area of your rectangle is ' + area(2, 3));      





// function check_Palindrome(str_entry){
//        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
//     // Check whether the string is empty or not
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
//     // Check if the length of the string is even or odd 
//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {
//     // If the length of the string is 1 then it becomes a palindrome
//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {
//     // If the length of the string is odd ignore middle character
//                 ccount = (cstr.length - 1) / 2;
//             }
//         }
//     // Loop through to check the first character to the last character and then move next
//         for (var x = 0; x < ccount; x++) {
//     // Compare characters and drop them if they do not match 
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a palindrome.");
//         return true;
//     }
//   document.write ( check_Palindrome("A man, a plan, a canal. Panama"));





// function uppercase(text) {
//     var arr = text.split(" ");
//     var newarr = [];
//     for (var i = 0; i < arr.length; i++) {
//         newarr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
//     }
//     return newarr.join(" ");
// }
// document.write("<h1>");
// document.write("STRING: "+" the quick brown fox"+"<br>")
// document.write(uppercase("OUTPUT: "+"the quick brown fox"));
// document.write("</h1>");


///////// // Chapter============= # 35-38   Task 12           

// function find_longest_word_in_string(text)
// {
//   var arr = text.match(/\w[a-z]{0,}/gi);
//   var find = arr[0];

//   for(var i = 1 ; i < arr.length ; i++)
//   {
//     if(find.length < arr[i].length)
//     {
//     find = arr[i];
//     } 
//   }
//   return find;
// }
// document.write("<h1>");
// document.write("STRING: "+"Web Development Tutorial"+"<br>")
// document.write("OUTPUT: ")
// document.write(find_longest_word_in_string( "Web Development Tutorial"));
// document.write("</h1>");





// function foo(a , b){
//     return a+" "+b;

// }
// document.write(foo(" JSResourceS.com","O"))




// function calcCircumference(text,radius) {
//     var radius;
//     var Circumference = (2 * 3.142 * radius);
//     return  text + Circumference;
// }
// document.write(calcCircumference("The circumference is ", 20))

// function calcArea(text,radius) {
//     var radius;
//     var area = (3.142 * (radius*20.0));
//     return  text + area;
// }
// document.write(calcArea("The area is ", 20))




