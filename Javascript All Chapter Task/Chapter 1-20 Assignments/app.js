			//...................chapter 1 to chaper 20...................
//chapter 1 
alert("Chapter 1. Alert");
// Alert
	 alert(" 1. Thanks For Visit");  // 1.
	
	 alert(" 2. Error! Please Enter a valid Password");	// 2.
	
	 alert(" 3. Welcome to JS Land... \n Happy Coding!");	// 3.
	
	 alert(" 4.1 Welcome to JS Land...");	// 4.1
	 alert(" 4.2 Happy Coding!")				//4.2
	
	 console.log(alert(" 5. Hello... i can run JS through my web brower console"));	// 5.


//chapter 2. Varaible For Strings
	alert("Chapter 2. Varaible For Strings");
	
	
	var username="1. Muhammad"; // 1.
	var myName= " 2. Salman"; //2.
	alert("2. " + username + " "+ myName);
	
	var message;	//3.a
	message="Hello World"; // 3.b
	alert("3. " + message); // 3.c

// 4.
	alert("4. Student Bio Data");
	alert("John Doe");
	alert("15 Year Old");
	alert("Certified Mobile Application Development");


//5.
	alert("5. \n PIZZA \n PIZZ \n PIZ \n PI \n P ");

//6.
	var email="xyz@mail.com";
	alert ("MY email adress is " + email);

// 7.
	var book="A smarter way to learn JavaScript";
	alert("i am trying to learn the book " + book);

//8.
	document.write(" <br> 8. Yah! I can write HTML content through JavaScript \n");

//9.
	console.log(alert("9. \n ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"));



// chapter 2 end

//chapter 3. varaible for number
	alert("Chapter 3. Varaible for number");

//1.
	var age = 15;
	alert(" 1. i am " + age + " Year old ");

//2.


//3.
	var birthYear=2000;
	document.writeln("<br> chap 3. task 3.<br> My Birth Year is :" + birthYear );
	document.writeln("<br> data type of my declared varaible is number <br>");

//4.
alert("Chapter 3. Task 4")
	var visitorName= prompt("Your Name", "Enter Name");
	var productTitle= prompt("Product", "Enter Product Title");
	var quantity= +prompt("Enter Quantity", "how many you want to buy ");	
	document.write("<br>" + "<b>"+visitorName+"</b>"+ " " + "Ordered"+ " " +"<b>"+ quantity+"</b>"+ " " + "<b>"+ productTitle+"</b>");

// chapter 3. end

//chapter 4.

// VARIABLE NAMES: LEGAL & ILLEGAL
// Tasks.

//1.
	var one=1,two=2,three=3;

//2. Declare 5 legal & 5 illegal variable names.

//Declare 5 legal
	var carColor ="black"; //1st.
	var _$;	//2nd
	var bulb_1;	//3rd
	var _123;	//4th
	var muhammadSalmanShaikh="shan shaikh online tips channel on youtube";	//5th


//Declare 5 illegal
	// 1st. var car Color ="black";
	// 2nd.	var S2_a!&$#;
	// 3rd. var checkbalance*;
	// 4th.	var !shan;
	// 5th. var 2result;

//3.
document.write("<br><br>________Chapter 4. Task: 3________");

	document.write("<h1>Rules for naming JS variables</h1><br><br>");
	document.write("Variable names can only contain number, $, __ and aplhapet. For example <b>$my_1stVariable</b> <br>");
	document.write("Variables must begin with a Letter, $ or __. For example : <b>$name, _name or name</b> <br>");
	document.write( "Variable names are case sensitive");
	document.write("Variable names should not be JS Keywords");


// Chapter 5. MATH EXPRESSIONS
//Tasks.


document.write("<br><br><b>________Chapter 5. Tasks________</b>");

//1.
document.write("<br><b>__task 1.__</b>");
	var a=5;
	var b=3;

	document.write( "<h2> Sum Of 			"+ a +" and "+ b+" is : " + (a+b)+"</h2>");

//2.
document.write("<br><b>__task 2.__</b><br>");
	document.write( "<h2> Subtraction Of 	"+ a +" and "+ b+" is : " + (a-b)+"</h2>");
	document.write( "<h2> Multiplication Of "+ a +" and "+ b+" is : " + (a*b)+"</h2>");
	document.write( "<h2> Division Of 		"+ a +" and "+ b+" is : " + (a/b)+"</h2>");
	document.write( "<h2> Modulus Of 		"+ a +" and "+ b+" is : " + (a%b)+"</h2>");


//3.
document.write("<br><b>__task 3.__</b><br>");

	var abc;
	document.write("<br>Value after variable declaration is: " + abc);
	abc=5;
	document.write("<br>Initial value: " + abc);
	abc++;
	document.write("<br>Value after increment is: " +abc);
	abc+=7;
	document.write("<br>Value after addition is:" + abc);
	abc--;
	document.write("<br>Value after decrement is: " +abc)
	abc2=abc%3;
	document.write("<br>after dividing the variable’s value by 3. The remainder is : " + abc2);

//4.
document.write("<br><b>__task 4.__</b><br>");

	var ticketPrize=600;
	document.write("<br><br>Total cost to buy 5 tickets to a movie is " +(ticketPrize*5)+ "PKR");

//5.
document.write("<br><br><b>__task 5.__</b><br>");
	
	
	var tableNumber= 4;
	document.write("<br>Table Of :" + tableNumber);
	
	for (var i=1;i<=10; i++) {
		document.write("<br>"+ tableNumber+ " x "+ i + " = " + (i*tableNumber));
	};

//6.
document.write("<br><br><b>__task 6.__</b><br>");

	var cel=35;
	var celToFahr=(cel*9/5)+32;
	document.write("The Temperature in celcius : " + "<b>"+cel+"\xB0C "+"</b>" +"convert into fahrenheit is : " + "<b>" + celToFahr +"\xB0F "+"</b><br>");
	
	var fahr=95;
	var fahrToCel=((fahr-32)*5/9);
	document.write("The Temperature in celcius : " + "<b>"+fahr+"\xB0C "+"</b>" +"convert into fahrenheit is : " + "<b>" + fahrToCel +"\xB0F "+"</b><br>");

//7.
document.write("<br><br><b>__task 7.__</b><br>");

	document.write("<br><h1>Shopping Cart</h1><br>");
	var prizeItem1=650;
	var prizeItem2=100;
	var quantity1=3;
	var quantity2=7;
	var shippingChrgs=100;
	
	document.write("Prize of item 1 is : " + prizeItem1 + "<br>");
	document.write("Quantity of item 1 is : " + quantity1 + "<br>");
	document.write("Prize of item 2 is : " + prizeItem2 + "<br>");
	document.write("Quantity of item 1 is : " + quantity2 + "<br>");
	document.write("Shipping Charges : " + shippingChrgs + "<br>");
	document.write("<br> Total cost of your order is : " +((prizeItem1*quantity1)+(prizeItem2*quantity2)+shippingChrgs));


//8.
document.write("<br><br><b>__task 8.__</b><br>");

	document.write("<h1>Mark Sheet</h1>");
	var totalMarks=980;
	var obtainMarks=804;
	var percentage=obtainMarks/totalMarks*100;
	
	document.write("Total Marks : " + totalMarks + "<br>");
	document.write("Obtain Marks : " + obtainMarks+ "<br>");
	document.write("Percentage : " + percentage+ "<br>");


//9.
document.write("<br><br><b>__task 9.__</b><br>");

	document.write("<h1>Currency in PKR </h1><br><br>");
	var usdollarRate=104.80;
	var saudiRiyalRate=28;
	var conversion=(usdollarRate*10)+(saudiRiyalRate*25);
	document.write("Total Currency in PKR : " + conversion);


//10.
document.write("<br><br><b>__task 10.__</b><br>");

	document.write("<h1>Perform all calculations in a single expression</h1><br>");
	var multiplicate= 3;
	var aftercalculation = ((multiplicate+3)*10)/2;
	document.write("AFter Perfoming all Calculations : " + aftercalculation);

//11.
document.write("<br><br><b>__task 11.__</b><br>");

	document.write("<h1>Age Calculator</h1><br>");

	var currentYear=2020;
	var birthYear = 2000;
	var age= (currentYear - birthYear);
	
	document.write("Current Year : "+ currentYear+"<br>");
	document.write("Birth Year : "+ birthYear+"<br>");
	document.write("Your Age is : "+ age +"<br>");


//12.
document.write("<br><br><b>__task 12.__</b><br>");

	document.write("<h1>The Geometrizer</h1><br>");

	var radius = 20;
	var circumference = Math.PI * 2*radius;
	document.write("The circumference is : " + "<b>"+circumference +"</b>"+"<br>");
	var area = Math.PI * (radius*radius);
	document.write("The area is : " + "<b>"+area+"</b>" +"<br>");


//13.
document.write("<br><br><b>__task 13.__</b><br>");

	document.write("<h1>The Geometrizer</h1><br>");

	var fvrtSnake= "Lays";
	var age = 20;
	var maxAge = 65;
	var numPerDay = 2;
	var totalNeeded = (numPerDay * 365) * (maxAge - age);
	


	document.write("Favourite Snake : "+"<b>" +fvrtSnake+ "</b>"+"<br>");
	document.write("Current age : "+ "<b>"+age+"</b>" +"<br>");
	document.write("Estimated Maximum Age : " + "<b>"+maxAge+ "</b>"+"<br>");
	document.write("Amount of Snaks per day : "+ "<b>"+numPerDay+ "</b>"+"<br>");

	document.write("You will need : " +  "<b>"+totalNeeded + " " + fvrtSnake + " </b>"+ "to last you until the ripe old age of : " + "<b>"+maxAge +"</b>" +"<br>");


document.write("<br><br><b>__Chapter 5. End...__</b><br>");
//chapter 5. End.

//chapter 6-9. Math Expression
document.write("<br><br><b>________Chapter 6-9. Math Expression Tasks________</b>");

//1.
document.write("<br><br><b>__task 1.__</b><br>");

	var ab2=10;
	document.write("<b>Result : </b><br>");
	document.write("<b>The Value of a is : " +ab2 + "<br></b>");
	document.write("------------------------------------ <br><br>");

	document.write("The value of <b>++a</b> is : "+(++ab2) +"<br>");
	document.write("Now the value of <b>a</b> is : "+ ab2 +"<br><br>");

	document.write("The value of <b>a++</b> is : "+(ab2++)  +"<br>");
	document.write("Now the value of <b>a</b> is : "+ ab2+"<br><br>");

	document.write("The value of <b>++a</b> is : "+ (--ab2)+"<br>");
	document.write("Now the value of <b>a</b> is : "+ ab2+"<br><br>");

	document.write("The value of <b>++a</b> is : "+ (ab2--)+"<br>");
	document.write("Now the value <b>of <b>a</b> is : "+ ab2+"<br><br>");

//2.
document.write("<br><br><b>__task 2.__</b><br>");

	var a=2;
	var b=1;
	document.write("a is : " + a +" <br>");
	document.write("b is : " + b +" <br>");
	var result=--a - --b + ++b + b--;

	document.write("result is  : " + result +" <br>");

//3.
document.write("<br><br><b>__task 3.__</b><br>");

var yourName= prompt("What Is Your Name : ", "Please Enter Name");
	alert("Thank For Visiting "+yourName+ "\n Welcome To Our Website ");

//4.
document.write("<br><br><b>__task 4.__</b><br>");

	document.write("<br><b>__User Input Table__</b><br>");
	
	var tableNumber= parseInt(prompt("Enter Table Number", "4"));
	document.write("<br>Table Of :" + tableNumber);
	
	for (var i=1;i<=10; i++) {
		document.write("<br>"+ tableNumber+ " x "+ i + " = " + (i*tableNumber));
	};

//5.
// task five in html file.
// Chapter 6-9 Ends...

//9-11.
//	USER INPUT & CONDITIONAL STATEMENT
document.write("<br><br><b>__Chapter 9-11.__</b><br>"); 
document.write("<b>__USER INPUT & CONDITIONAL STATEMENT.__</b><br>");
document.write("<br><b>__task 1.__</b><br>");

	var cityName = prompt("What is your City name ?", "we have karachi multan lahore");

	if (cityName=== "karachi") {
		alert("Welcome to city of lights");
	}
	else if (cityName==="multan") {
		alert("Welcome To City of Sufis ");
	}
	else if (cityName=== "lahore") {
		alert("Welcome To City of Gardens ");
	}
	else{
		alert("Sorry we Dont have This City In Data ");
	}

//2.
document.write("<br><b>__task 2. Check On Alert__</b><br>");

	var gender= prompt("task 2.chap 9-11 \nYour Gender", "male  Female");
	if (gender === "male") {
		alert("Good Morning Sir.")
	}
	else if (gender === "female") {
		alert("Good Morning Ma'am.")
	}
	else {
		alert("Not Valid Gander");
	}

//3.
document.write("<br><b>__task 3. Check On Alert__</b><br>");

	var signal = prompt("task 2.chap 9-11 \n Enter Color of road Traffic Signal", "red green blue");
	if (signal=== "red") {
		alert("Must Stop")
	}
	else if (signal=== "green") {
		alert("Ready To Move")
	}
	else if (signal=== "blue") {
		alert("Move Now")
	}
	else {
		alert("Enter Wrong Light");
	}

//4.
document.write("<br><b>__task 4.__</b><br>");
document.write("<b><h1>Feul</h1></b><br><br>");

	var feul= +prompt("Chap 9-11. Task 4. \nHow Many Letter Feul in your Car","0");

	if (feul < 0.25) {
		document.write("Please refill the fuel in your car");
	}
	else{
		document.write("Feul Greater Than 0.25 Liters")
	}
//5.
document.write("<br><b>__task 5. Run code and record output task  Check in app.js File__</b><br>");

	//Run code and record output task

	/* a = 4;
	if (++a === 5){
		alert("given condition for variable a is true"); 
	}
	var b = 82;
	if (b++ === 83){
		alert("given condition for variable b is true"); 
	}
	var c = 12;
	if (c++ === 13){
		alert("condition 1 is true"); 
	} if (c === 13){
		alert("condition 2 is true"); 
	} if (++c < 14){ 
		alert("condition 3 is true"); 
	} if(c === 14){
		alert("condition 4 is true");
	}
	var materialCost = 20000;
	var laborCost = 2000;
	

	var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){
		alert("The cost equals"); 
	}

	if (true){
		alert("True");
	} if (false){
		alert("False"); 
	}
	if("car" < "cat"){
		alert("car is smaller than cat"); 
	}
*/
	// Show 6 Alert in Dialog Box.
	// 1st. given condition for variable a is true
	// 2nd.	condition 2 is true
	// 3rd.	condition 4 is true
	// 4th.	The cost equals
	// 5th.	True
	// 6th.	car is smaller than cat



//6.
document.write("<br><b>__task 6.__</b><br>");
document.write("<br><h1><b>__Mark Sheet__</b></h1><br><br>");
	
	var totalMarkss=300;
	var obtainMarkss= +prompt("Enter Obtain Marks", "0");
	var percentages = (obtainMarkss/totalMarkss)*100;
	
	document.write(" Total Marks : " + totalMarkss +"<br>");
	document.write(" Obtain Marks : " + obtainMarkss +"<br>");
	document.write(" Percentages : " + percentages +"<br>");

	if (percentages >=80 && percentages<=100) {

		document.write(" Grade : A-One <br>")
		document.write(" Remarks : Excellent <br>");
	}
	else if (percentages >=70 && percentages<80) {
		document.write(" Grade : A <br>")
		document.write(" Remarks : Good <br>");
	}
	else if (percentages >=60 && percentages<70) {
		document.write(" Grade : B <br>")
		document.write(" Remarks : You need to Improve <br>");
	}
	else if (percentages <60 && percentages>=0) {
		document.write(" Grade : Fail <br>")
		document.write(" Remarks : Sorry <br>");
	}
	 else{
	 	document.write("  non Valid Obtain Marks Entered")
	 }

//7.
document.write("<br><b>__task 7.__</b><br>");
document.write("<b><h1>Guess The Number</h1></b><br><br>");

    var y = Math.floor(Math.random() * 10 + 1); 
      
    var guess = 1; 
    var x = +prompt("chapter 9-11 task 7. \n\n Guess Number from 1-10", "0");
  
   if(x == y) 
   {     
       alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
               + guess + " GUESS "); 
   } 
   else if(x > y) /* if guessed number is greater 
                   than actual number*/ 
   {     
       guess++; 
       alert("OOPS SORRY!! TRY A SMALLER NUMBER"); 
   } 
   else
   { 
       guess++; 
       alert("OOPS SORRY!! TRY A GREATER NUMBER") ;
   } 

 //8.
document.write("<br><b>__task 8.__</b><br>");
document.write("<b><h1>Check Your Number is Divisible By 3</h1></b><br><br>");

	var divisioNumber= +prompt(" Chapter 9-11 Task 7. \n\n Enter Number That Divisible By 3", "0");

	if (divisioNumber%3 === 0 ) {

		document.write("<b>Yes</b> Your Number : " + divisioNumber + " is Divisible By 3" )
	}else {
		document.write("<b>No</b> Your Number : " + divisioNumber + " is not Divisible By 3" )
	}
 //9.
document.write("<br><b>__task 9.__</b><br>");
document.write("<b><h1>Check Your Number Is Even Or Odd</h1></b><br><br>");

	var checkNumber= +prompt("Chapter 9-11. Taks 9. \n \n Check Your Number Is Even Or Odd","Enter Number");

	if (checkNumber%2 == 0){
		document.write("Your Number Is : <b>Even Number</b>");
	}
	else{
		document.write("Your Number Is : <b>Odd Number</b>");
	}

//10.
document.write("<br><b>__task 10.__</b><br>");
document.write("<b><h1>Temperature Checker</h1></b><br><br>");

	 var temp= +prompt("Chapter 9-11. Task 10. \n\n Enter Temperature ", " EnterTemperature in celcius");
	 if (temp>=40) {
	 	alert("Chapter 9-11. Task 10. \n \n It is Too Hot Outside")
	 }
	 else if (temp>=30 && temp<40) {
		alert("Chapter 9-11. Task 10. \n \n The Weather today is Normal")
	 }
	 else if (temp>=20 && temp<30) {
		alert("Chapter 9-11. Task 10. \n \n Today’s Weather is cool")
	 }
	 else if (temp>=10 && temp<20) {
		alert("Chapter 9-11. Task 10. \n \n OMG! Today’s weather is so Cool")
	 }else {
	 	alert("Chapter 9-11. Task 10. \n \n Enter Greater Then 10 ")
	 }

//11.
document.write("<br><b>__task 11.__</b><br>");
document.write("<b><h1>Calculator</h1></b><br>");

	var aFirst= +prompt("Chapter 9-11. Task 1. \n \n Enter First Number", "0");
	var operator= prompt("Chapter 9-11. Task 11. \n \n Enter Operator Number", "(+, -, *, /, %)");
	var bSecond= +prompt("Chapter 9-11. Task 11. \n \n Enter Number", "0");

	var calcresult;
	if (operator=== "+") {
		calcresult=(aFirst+bSecond);
		alert(" Chapter 9-11. Task 11. \n \n  result is : "  + calcresult);
	}
	else if (operator=== "-") {
		calcresult=(aFirst-bSecond);
		alert(" Chapter 9-11. Task 11. \n \n  result is : "   + calcresult)
			}
	else if (operator=== "/") {
		calcresult= (aFirst/bSecond);
		alert(" Chapter 9-11. Task 11. \n \n  result is : "   + calcresult)
	}
	else if (operator=== "*") {
		calcresult= (aFirst*bSecond);
		alert("Chapter 9-11. Task 11. \n \n  result is : "  + calcresult)
	}
	else if (operator=== "%") {
		calcresult= (aFirst%bSecond);
		alert("Chapter 9-11. Task 11. \n \n result is : "  + calcresult)
	}

	document.write(aFirst + " "+" " +operator +" "+" "+  bSecond+" "+ " = " +calcresult);


// chapter 9-11 End...

// 			Chapter 12-13 .. 
//	IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS

document.write("<br><br><b>__Chapter 12-13.__</b><br>"); 
document.write("<b>__IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS.__</b><br>");

//1.
document.write("<br><b>__task 1.__</b><br>");
document.write("<b><h1> CheckerHow Many Number Charater Upper Or Lower in Para</h1></b><br>");

	var str=prompt("Chapter 12-13. task. 1. \n\n Check How Many Number Or uppercase or lowercase Alphabet in Your paragraph", "Type");
	var upper = 0, lower = 0, number = 0, special = 0; 
	var length=str.length;
	for (var i = 0; i < length; i++) 
	{ 
		if (str[i] >= 'A' && str[i] <= 'Z') 
			upper++; 
		else if (str[i] >= 'a' && str[i] <= 'z') 
			lower++; 
		else if (str[i]>= '0' && str[i]<= '9') 
			number++; 
		else
			special++; 
	} 
	document.write('<br>Upper Case Character :' + upper);
	document.write('<br>lower Case Character :' + lower);
	document.write('<br>Number :' + number);
	document.write('<br>Special Character is:' + special);

//2.
document.write("<br><b>__task 2.__</b><br>");
document.write("<b><h1>Display Integer Value Larger And show Equality</h1></b><br>");

	var integ1 = +prompt("Chapter 12-13 tasks 2. \n\n Write First Integer Value", "Type Any Number");
	var integ2 = +prompt("Chapter 12-13 tasks 2. \n\n Write Second Integer Value", "Type Any Number");

	document.write("<h2>input integer 1 is :"+integ1+"<br>input integer 2 is :"+integ2+"</h2>")

	if (integ1 === integ2) {
		document.writeln("Your both Integers are Equals...");
	};

//3.
document.write("<br><b>__task 3.__</b><br>");
document.write("<b><h1>Check Integer Positve Negative or Zero</h1></b><br>");

	var checkint= +prompt("Chapter 12-13 tasks 3. \n\n Check Integer Positve Negative or Zero","Enter Number");

	if (checkint<0) {
		document.write("Your Input Integer : " + checkint  + " Is Negative");
	}else if (checkint ===0) {
		document.write("Your Input Integer is : 0 ");
	}else if (checkint>0) {
		document.write("Your Input Integer : " + checkint  + " Is Positive");
	}

//4
document.write("<br><b>__task 4.__</b><br>");
document.write("<b><h1>Check Your Char Is Vowel Or Not</h1></b><br>");

	var charvowels=prompt("Chapter 12-13 tasks 4. \n\n Check Your Char Is Vowel Or Not", "Type Character");
	charvowels = charvowels.toUpperCase();

	if (charvowels.length == 1) {
		if (charvowels == "A" || charvowels == "E"||charvowels == "I"||charvowels == "O"||charvowels == "U") {
			alert("Chapter 12-13 tasks 4. \n\n <br>Yes</b> Your Input Character Is Vowel");
			document.write("Yes Your Input Character Is Vowel");
		}else{
			alert("Chapter 12-13 tasks 4. \n\n <br>No</b> Your Input Character"+charvowels+" Is Not Vowel");
			document.write(" No Your Input Character"+charvowels+" Is Not Vowel");
		}
	}else{
		alert("Invalid Input Enter Only one Character");
		document.write("Invalid Input Enter Only one Character");
	}

//5.
document.write("<br><b>__task 5..__</b><br>");
document.write("<b><h1>Store Password</h1></b><br>");


	var correctPass= prompt("Chapter 12-13 tasks 5. \n\n Please Enter correct Password ",);
	document.write("First Alert Correct Pass you enter : " + correctPass+"<br>");

	var pass=prompt("Chapter 12-13 tasks 5. \n\n Please Enter Password ",);
	document.write("Second Alert Correct Pass you enter : " + pass+"<br>")

	if (pass=="") {
		while (pass=="") {
			var pass=prompt("Chapter 12-13 tasks 5. \n\n Please Enter Password ",);
		}
		
	}
	if (correctPass===pass) {
		alert("Chapter 12-13 tasks 5. \n\n Enter Password Is Correct!");
		document.write("<br>Enter Password Is Correct!")
	}else{
		document.write("<br>Enter Password Is Incorrect password")
	}

//6.
document.write("<br><b>__task 6.__</b><br>");
document.write("<b><h1>Fix If Else Statement</h1></b><br>");
	var greeting;
	var hour = 13;
	if (hour < 18) 
		greeting = "Good day";
	else 
		greeting = "Good evening";

	document.write(".-----"+greeting+"-----.<br>");
	document.write("<b>Statement Fixed</b>");

//7.
document.write("<br><b>__task 7.__</b><br>");
document.write("<b><h1>UserInput 24 hours clock Greeting</h1></b><br>");
	
	var time=+prompt("Chapter 12-13 tasks 7. \n\n Enter Current Time In this Format ('1900')=7pm","0000");



	if (time>=0000 && time<1200) {
		alert ('Chapter 12-13 tasks 7. \n\n "Good Morning!"')
		document.write('"Good Morning!"')
	}
	else if (time>=1200 && time<1700){
		alert ('Chapter 12-13 tasks 7. \n\n "Good Afternoon!"')
		document.write('"Good Afternoon!"')

	}
	else if (time>=1700 && time<2100){
		alert ('Chapter 12-13 tasks 7. \n\n "Good Evening!"')
		document.write('"Good Evening!"')

	}
	else if (time>=2100 && time<2359){
		alert ('Chapter 12-13 tasks 7. \n\n "Good Night!"')
		document.write('"Good Night!"')

	}
	else {
		alert ('Chapter 12-13 tasks 7. \n\n "Good Morning!"')
		document.write("Enter Wrong Time ")
	}

	document.write("<br>Chapter 12-13 Ends....<br>");

//Chapter 12-13 Ends....
// Chapter 14-16 Tasks.
document.write("<h1>Array sort</h1>");

// Chapter 14-16 Tasks. 1.
document.write("<h3>storing students in future</h3>");

// Chapter 14-16 Tasks. 2.
var Arr = new Array();
Arr.push("anas");
Arr.push("salman");

// Chapter 14-16 Tasks. 3.
document.write("<h3>string array</h3>");

var string = ["hannan ","labib ","hammad ","rafay "];
for(var i = 0; i < string.length; i++){
    document.write(string[i]);
}

// Chapter 14-16 Tasks. 4.
document.write("<h3>Number array</h3>");

var num = [1,2,3,4,45,56,78];
for(var i = 0; i < num.length; i++){
    document.write(num[i]);
}

// Chapter 14-16 Tasks. 5.
document.write("<h3>Boolean array</h3>");

var myArr = [];
var value = 2;
for(var i = 0; i < value; i++) {
   myArr.push(false);
}
alert("boolean array result: "+myArr);


// Chapter 14-16 Tasks. 6.
document.write("<h3>Mixed array</h3>");

var num = [1,2, "anas",90.9,false];
for(var i = 0; i < num.length; i++){
    document.write(num[i]);
}

// Chapter 14-16 Tasks. 7.
document.write("<h3>storing qualification array</h3>");

var num = ["ssc","hsc","bs","ms","phd"];

document.write("Qualification: "+num+"<br>");
for(var i = 0; i < num.length; i++){
    document.write(i+1 + ")" + num[i] + "<br>");
}


// Chapter 14-16 Tasks. 8.
document.write("<h3> Future adding Value Result</h3>");


for(var i = 0; i < Arr.length; i++){
    document.write(i+1 + ")" + Arr[i] + "<br>");
}


// Chapter 14-16 Tasks. 9.
document.write("<h1>Array sort</h1>");

var arr = [1,0,4,2,5,90,3,45];

var a = arr.sort();
document.write(a);

document.write("<h1>Array Copy method</h1>");


// Chapter 14-16 Tasks. 10.
var array = ["hyd","karachi","mirpur","lahour","los angles"];

for(var i = 0; i < array.length; i++){
    document.write("["+array+"]");
}
// // Chapter 14-16 Tasks. 11.
document.write("<h1>Copied</h1>");
var a = array.slice(0,3);
document.write(a);

//// Chapter 14-16 Tasks. 12.
document.write("<h1>Array Joins method</h1>");

var array1 = ["hyd","karachi","mirpur","lahour","los angles"];

document.write(array1);

document.write("<h3>After Join</h1>");

var a = array1.join(" ");
document.write(a);

// Chapter 14-16 Tasks. 13.
document.write("<h1>Array Value  storeing fifo</h1>");

var devices = ["mouse","keyboard","perephirals"];

devices.sort();
for(var i = 0; i < devices.length; i++){
    document.write("["+devices[i]+"]");
}


for(var  i = 0; i < devices.length; i++){

    document.write(" out: <br>" + devices[i]+"<br>");
}


// Chapter 14-16 Tasks. 14.
document.write("<h1>Array Value  storeing lifo</h1>");

var devices = ["mouse","keyboard","perephirals"];
devices.reverse();
for(var i = 0; i < devices.length; i++){
    document.write("["+devices[i]+"]");
}


for(var  i = 0; i < devices.length; i++){

    document.write(" out: <br>" + devices[i]+"<br>");
}

//chapter 14-16 end...


// Chapter 17-20 Tasks.

// Chapter 17-20 Tasks. 1,2.

document.write("Multidimensional Array");

for(var a = 1; a < 10; a = a+4){
    for(var b = a;  b < a+4; b++){
        document.write(b+ " ");
    }
    document.write("<br>");
}

// Chapter 17-20 Tasks. 3.

document.write("<h1>Numeric counting</h1>");

for(var i = 1; i <= 10; i++){
    document.write(i);
    document.write("<br>");
    
}

// Chapter 17-20 Tasks. 4.

document.write("<h1>Table Counting</h1>");

var tableNum = prompt("Enter table number");
var tableLength = prompt("Enter table length");

for(var i = 1; i <= tableLength; i++){
    document.write(tableNum + " * " + i + " = " + tableNum*i + "<br>");
    
}

// Chapter 17-20 Tasks. 5.

document.write("<h1> Array with for loop </h1>");

var Array = ["apple","banana","mango","orange","strabarry"];

for(var i = 0; i < Array.length; i++){
    document.write("Array index: " + Array[i] + "<br>");
}

// Chapter 17-20 Tasks. 6.
document.write("<h1> Loop Counting </h1>");
document.write("<h3> Forword </h3>");

for(var i = 1; i < 10; i++){
    document.write(" " + i );
}
document.write("<h3> Reverse </h3>");
 
document.write("<br>");
for(var i = 10; i < 1; i++){
    document.write(" " + i);
} 
document.write("<h3> Even </h3>");


document.write("<br>");
for(var i = 1; i < 10; i++){
    if(i % 2 == 0){
        document.write(" " +  i);
    }
} 
document.write("<h3> odd </h3>");

document.write("<br>");
for(var i = 1; i < 10; i++){
    if(i % 2 != 0){
        document.write(" " +  i);
    }
} 

document.write("<h3> series </h3>");
document.write("<br>");
for(var i = 1; i < 10; i++){
    if(i % 2 != 0){
        document.write(" " +  i+"k");
    }
} 

// Chapter 17-20 Tasks. 7.
document.write("<h1> Finder search </h1>");

var arr = ["apple","banana","mango","orange"];

var input = prompt("Enter Fruit name");

for(var j = 0; j < arr.length; j++){
    if(input == arr[j]){
        document.write("seacrh found: " + input);
    }else if(input !== arr[j]){
        document.write("not found");
    }
}

// Chapter 17-20 Tasks. 8.
document.write("<h1> smallest Number finder </h1>");

var num = [1,2,3,4,5,6,7,8,9];

var b = Math.max(num);
document.write(b);


document.write("<h1> greater Number finder </h1>");

var num = [1,2,3,4,5,6,7,8,9];


// Chapter 17-20 Tasks. 9.
document.write("<h1> ranging 5 counting 1 to 100 </h1>");

for(var i = 0; i < 100; i = i+5){
    document.write(i+ " ");
}

//chapter 17-20 end...









	































