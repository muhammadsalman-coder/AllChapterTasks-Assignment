// chapter 21-25
//tasks

// chapter 21-25 Task 1...
document.write('<h1>Chapter 21-25... String Methods...</h1>');

var firstName = prompt(
  'chapter 21-25 Task 1. \n\n Enter First Name',
  'First NAme'
);
var lastName = prompt(
  'chapter 21-25 Task 1. \n\n Enter Last Name',
  'Last Name'
);
var fullName = firstName + ' ' + lastName;
alert('chapter 21-25 Task 1. \n\n Thank For Visiting ' + fullName);

// chapter 21-25 Task 2.
document.write('<br><b>chapter 21-25 Task 2.</b> <br><br>');

var fvrtPhone = prompt(
  'chapter 21-25 Task 2. \n\n Enter Your Favorite Phone ',
  'Oppo A5 2020'
);
document.write('My Favorite Phone is :' + fvrtPhone + '<br>');
document.write('Length of String : ' + fvrtPhone.length);

// chapter 21-25 Task 3.
document.write('<br><b>chapter 21-25 Task 3.</b> <br><br>');

var country = 'Pakistan';
document.write('String Var is  :' + country + '<br>');
document.write("Index of 'n' :" + country.indexOf('n') + '<br>');

// chapter 21-25 Task 4.
document.write('<br><b>chapter 21-25 Task 4.</b> <br><br>');

var test1 = 'Hello World';
document.write('String :' + test1 + '<br>');
document.write("Last index of 'l' :" + test1.lastIndexOf('l') + '<br>');

// chapter 21-25 Task 5.
document.write('<br><b>chapter 21-25 Task 5.</b> <br><br>');

// use country variable in task 3 country="Pakistan";
document.write('String Var is  :' + country + '<br>');
document.write('Character at index 3 :' + country.charAt(3) + '<br>');

// chapter 21-25 Task 6.
//6. Repeat Q1 using string concat() method.
document.write('<br><b>chapter 21-25 Task 6.</b> <br><br>');

document.write('Your Full Name IS : ' + firstName + ' ' + lastName);

// chapter 21-25 Task 7.
document.write('<br><b>chapter 21-25 Task 7.</b> <br><br>');

var city = 'Hyderabad ';
document.write('city :' + city + '<br>');
document.write('After Replacement :' + city.replace('Hyder', 'islam') + '<br>');

//chapter 21-25 Task 8.
document.write('<br><b>chapter 21-25 Task 8.</b>');
document.write('<h2>Replacing Text</h2>');

var message =
  'Ali and Sami are best friends. They play cricket and football together';

var newStr = message.replace(/and/g, '&');
document.write('<b>Message :</b> ' + message + '<br>');
document.write('<b>After Replacing :</b> ' + newStr);

//chapter 21-25 Task 9.
document.write('<br><b>chapter 21-25 Task 9.</b>');
document.write('<h2>String To Integer Converter</h2>');

var str = '472';
document.write('Value : ' + str + '  ');
document.write('Type : String <br><br>');

var strNum = parseInt(str);
document.write('Value : ' + strNum + '  ');
document.write('Type : Number <br>');

//chapter 21-25 Task 10.
document.write('<br><br><b>chapter 21-25 Task 10.</b>');
document.write('<h2>Convert Input In Capital</h2>');

var strin = prompt(
  'chapter 21-25 Task 9\n\n Enter Any Word in Small Alphabet',
  'peanuts'
);
var strinCapital = strin.toUpperCase();

document.write('User Input : ' + strin + '<br> ');
document.write('Upper Case : ' + strinCapital + '<br> ');

//chapter 21-25 Task 11.
document.write('<br><br><b>chapter 21-25 Task 11.</b>');
document.write('<h2>Convert Input In Title Case</h2>');

var strin = prompt('chapter 21-25 Task 11\n\n Enter Any Word', 'javascript');
var titleCase1 = strin.slice(0, 1).toUpperCase();
var titleCase2 = strin.slice(1).toLowerCase();
var titleCase = titleCase1 + titleCase2;

document.write('User Input : ' + strin + '<br> ');
document.write('Title Case : ' + titleCase + '<br> ');

//chapter 21-25 Task 12.
document.write('<br><br><b>chapter 21-25 Task 12.</b>');
document.write('<h2>Convert Integer To String</h2>');

var num = 36.36;
document.write('Number : ' + num + '<br> ');
var numStr = num.toString();
document.write('Result String : ' + numStr + '<br> ');

//chapter 21-25 Task 13.
//don't understand

//chapter 21-25 Task 14.
document.write('<br><br><b>chapter 21-25 Task 14.</b>');
document.write('<h2>Check Valid Invalid Password</h2>');

var arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var search = prompt('chapter 21-25 Task 14 \n\n We Have ' + arr, ' search');
var searching = search.toLowerCase();

temp = true;
for (var i = 0; i < arr.length; i++) {
  if (searching === arr[i]) {
    alert(
      'chapter 21-25 Task 14 \n\n' +
        arr[i] +
        ' is available  at index ' +
        i +
        ' in our Bakery'
    );
    document.write(
      arr[i] + ' is available  at index ' + i + ' in our Bakery <br>'
    );
    temp = false;
    break;
  }
}
if (temp) {
  alert(
    'chapter 21-25 Task 14 \n\n' +
      arr[i] +
      ' is  Not available  at index in our Bakery '
  );
  document.write(arr[i] + ' is  Not available  in our Bakery <br>');
}

//chapter 21-25 Task 15.
document.write('<br><br><b>chapter 21-25 Task 15.</b>');
document.write('<h2>Array Searching</h2>');

var bolTemp = true;
while (bolTemp) {
  var str = prompt(
    'chapter 21-25 Task 15 \n\n Password (a-z, 0-9) not start with number , min 6',
    'Enter Password'
  );
  document.write('Entered Password : ' + str + '<br>');
  var temp;

  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (var i = 0; i < nums.length; i++) {
    if (str.charAt(0) == nums[i]) {
      temp = nums[i];
      break;
    }
  }

  if (
    str.match(/[a-z]/g) &&
    str.match(/[0-9]/g) &&
    temp != str.charAt(0) &&
    str.length >= 6
  ) {
    alert('chapter 21-25 Task 15 \n\n  Correct Password ');
    bolTemp = false;
  } else {
    if (str.match(/[a-z]/g) && str.match(/[0-9]/g) && temp != str.charAt(0)) {
      alert(
        'chapter 21-25 Task 15 \n\n  Password Shoud Have Minimum 6 Length \n PLease Enter Valid Password'
      );
      document.write(
        'Password Shoud Have Minimum 6 Length \n PLease Enter Valid Password <br>'
      );
    } else if (
      str.match(/[0-9]/g) &&
      temp != str.charAt(0) &&
      str.length >= 6
    ) {
      alert(
        'chapter 21-25 Task 15 \n\n  Password Shoud Have Minimum 1 Character  \n PLease Enter Valid Password'
      );
      document.write(
        'Password Shoud Have Minimum 1 Character  \n PLease Enter Valid Password <br>'
      );
    } else if (str.match(/[a-z]/g) && str.match(/[0-9]/g) && str.length >= 6) {
      alert(
        'chapter 21-25 Task 15 \n\n  Password Not Start With Number  \n PLease Enter Valid Password'
      );
      document.write(
        'Password Not Start With Number  \n PLease Enter Valid Password <br>'
      );
    } else if (
      str.match(/[a-z]/g) &&
      temp != str.charAt(0) &&
      str.length >= 6
    ) {
      alert(
        'chapter 21-25 Task 15 \n\n  Password Shoud Have Minimum 1 Number  \n PLease Enter Valid Password'
      );
      document.write(
        'Password Shoud Have Minimum 1 Number  \n PLease Enter Valid Password <br>'
      );
    }
  }
}

//chapter 21-25 Task 16.
document.write('<br><br><b>chapter 21-25 Task 16.</b>');
document.write('<h2>Convert String To Array</h2>');

var university = 'University of Karachi';
var res = university.split('');

for (var i = 0; i < res.length; i++) {
  document.write(res[i] + '<br>');
}

//chapter 21-25 Task 17.
document.write('<br><br><b>chapter 21-25 Task 17.</b>');
document.write('<h2>Check Last User input Character</h2>');

var lastChar = prompt(
  'chapter 21-25 Task 16 \n\n Enter Any Thing For Check Last Character ',
  'enter'
);
var res = lastChar.slice(-1);

alert('chapter 21-25 Task 17 \n\n Last Character Of your input is : ' + res);
document.write('Last Character Of your input is : ' + res);

//chapter 21-25 Task 18.
document.write('<br><br><b>chapter 21-25 Task 18.</b>');
document.write('<h2>Check the occurrences of word</h2>');

var occurrences = 'The quick brown fox jumps over the lazy dog';
var occurrences2 = occurrences.toLowerCase();
var checkthe = occurrences2.match(/the/g);

document.write('Text : ' + occurrences + '<br>');
document.write(
  'The are ' + checkthe.length + ' accurances of  word : the <br>'
);

document.write('<br><b>chapter 21-25 Ends....</b>' + '<br>');
//chapter 21-25 Ends....

// chapter 26-30 Tasks ...
document.write('<h1>Chapter 26-30... Math Methods...</h1>');

//chapter 26-30 Task 1.
document.write('<br><br><b>chapter 26-30 Task 1.</b>');
document.write('<br><h2>Use Math Function</h2><br>');

var number = 3.45214;
document.write('number : ' + number + '<br>'); //a
document.write('Round off value : ' + Math.round(number) + '<br>'); //b
document.write('floor value : ' + Math.floor(number) + '<br>'); //c
document.write('ceil value  : ' + Math.ceil(number) + '<br>'); //d

//chapter 26-30 Task 2.
document.write('<br><br><b>chapter 26-30 Task 2.</b>');
document.write('<br><h2>negative floating point</h2><br>');

var number = -2.673;
document.write('number : ' + number + '<br>'); //a
document.write('Round off value : ' + Math.round(number) + '<br>'); //b
document.write('floor value : ' + Math.floor(number) + '<br>'); //c
document.write('ceil value  : ' + Math.ceil(number) + '<br>'); //d

//chapter 26-30 Task 3.
document.write('<br><br><b>chapter 26-30 Task 3.</b>');
document.write('<br><h2>absolute value</h2><br>');

var negvalue = -4;
document.write('The Absolute Value of ' + -4 + ' is ' + Math.abs(negvalue));

//chapter 26-30 Task 4.
document.write('<br><br><b>chapter 26-30 Task 4.</b>');
document.write('<br><h2>Random Dice Value</h2><br>');

var a = 1 + Math.floor(Math.random() * 6);
document.write('random dice value : ' + a);
var a = 1 + Math.floor(Math.random() * 6);
document.write('random dice value : ' + a);

//chapter 26-30 Task 5.
document.write('<br><br><b>chapter 26-30 Task 5.</b>');
document.write('<br><h2>Random Dice Value</h2><br>');

var a = 1 + Math.floor(Math.random() * 2);
if (a === 1) {
  document.write(a + ' <br>random coin value : Tails<br>');
} else if (a === 2) {
  document.write(a + ' <br>random coin value : Heads<br>');
}

var c = 1 + Math.floor(Math.random() * 2);
if (c === 1) {
  document.write(c + ' <br>random coin value : Tails<br>');
} else if (c === 2) {
  document.write(c + ' <br>random coin value : Heads<br>');
}

//chapter 26-30 Task 6.
document.write('<br><br><b>chapter 26-30 Task 6.</b>');
document.write('<br><h2>Random Number Between 1 to 100</h2><br>');

var d = 1 + Math.floor(Math.random() * 100);
document.write('random number between 1 and 100 : ' + d + '<br>');

//chapter 26-30 Task 7.
document.write('<br><br><b>chapter 26-30 Task 7.</b>');
document.write('<br><h2>User Input Weight</h2><br>');

var userWeight = prompt(
  'chapter 26-30 Task 7 \n\n Enter your Weight in kilograms \n Possible input 50, 50kgs, 50.2kgs, 50.2kilograms',
  '50.2kgs'
);
if (userWeight.length == 2) {
  var userWeight2 = userWeight.slice(0, 2);
  var userWeightInt = parseFloat(userWeight2);
  document.write('The weight of user is ' + userWeightInt + ' kilograms');
} else if (userWeight.length == 3) {
  var userWeight2 = userWeight.slice(0, 2);
  var userWeightInt = parseFloat(userWeight2);
  document.write('The weight of user is ' + userWeightInt + ' kilograms');
} else if (userWeight.length == 4) {
  var userWeight2 = userWeight.slice(0, 4);
  var userWeightInt = parseFloat(userWeight2);
  document.write('The weight of user is ' + userWeightInt + ' kilograms');
} else {
  var userWeight2 = userWeight.slice(0, 4);
  var userWeightInt = parseFloat(userWeight2);
  document.write('The weight of user is ' + userWeight2 + ' kilograms');
}

//chapter 26-30 Task 8.
document.write('<br><br><b>chapter 26-30 Task 8.</b>');
document.write('<br><h2>Find Secret Number</h2><br>');

var secretNumber = 1 + Math.floor(Math.random() * 10);
var userInput = +prompt(
  'chapter 26-30 Task 8 \n\n Enter a number between 1 to 10 ',
  '0'
);
if (secretNumber === userInput) {
  alert(
    'chapter 26-30 Task 8 \n\n Congratulation you find secret number ' +
      secretNumber
  );
  document.write(
    'Congratulation you find secret number ' + secretNumber + ' <br>'
  );
} else {
  alert('chapter 26-30 Task 8 \n\n Try Again!!! ');
  document.write('Try Again!!!<br>');
}

document.write('<br><br><b>chapter 26-30 End....</b>');
//chapter 26-30 End....

//chapter 31-34 Data Methods.
document.write('<br><br><h1>chapter 31-34 Data Methods...</h1>');

//chapter 31-34 Task 1.
document.write('<br><br><b>chapter 31-34 Task 1.</b>');
document.write('<br><h2>Disply Current Date & Time</h2><br>');

var i = Date();
document.write(i);

//chapter 31-34 Task 2.
document.write('<br><br><b>chapter 31-34 Task 2.</b>');
document.write('<br><h2>Disply Current Month</h2><br>');

var jDate = new Date();
var jMonth = jDate.getMonth();
var arr2 = [
  'January',
  'feburary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
for (var i = 0; i < arr2.length; i++) {
  if (jMonth == i) {
    document.write('Current Month : ' + arr2[i]);
  }
}

//chapter 31-34 Task 3.
document.write('<br><br><b>chapter 31-34 Task 3.</b>');
document.write('<br><h2>Disply Current Day</h2><br>');

var jDate = new Date();
var jday = jDate.getDay();
var arr2 = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
for (var i = 0; i < arr2.length; i++) {
  if (jday == i) {
    document.write('Today Is  : ' + arr2[i]);
  }
}

//chapter 31-34 Task 4.
document.write('<br><br><b>chapter 31-34 Task 4.</b>');
document.write('<br><h2>Disply Sat Sun Is Fun Day</h2><br>');

var jDate = new Date();
var jday = jDate.getDay();

var arr2 = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

for (var i = 0; i < arr2.length; i++) {
  if (jday == 0 && jday == i) {
    document.write(arr2[i] + ' : “It’s Fun day <br>');
    break;
  } else if (jday == 6 && jday == i) {
    document.write(arr2[i] + ' : “It’s Fun day <br>');
    break;
  } else if (
    (i == 1 && jday == 1) ||
    (i == 2 && jday == 2) ||
    (i == 3 && jday == 3) ||
    (i == 4 && jday == 4) ||
    (i == 5 && jday == 5)
  ) {
    document.write('Today Is  : ' + arr2[i] + '<br>');
    break;
  }
}

//chapter 31-34 Task 5.
document.write('<br><br><b>chapter 31-34 Task 5.</b>');
document.write('<br><h2>Disply Diff First Fifteen Day And Last Day </h2><br>');

var jDate = new Date();
var jdate = jDate.getDate();

for (var i = 00; i <= 31; i++) {
  if (i <= 15 && jdate <= 15) {
    document.write('First fifteen days of the month, Date : ' + jdate + '<br>');
    break;
  } else if (i > 15 && jdate > 15) {
    document.write('Last days of the month, Date : ' + jdate + '<br>');
    break;
  }
}

//chapter 31-34 Task 6.
document.write('<br><br><b>chapter 31-34 Task 6.</b>');
document.write(
  '<br><h2>Disply Current, Date Mili Sec, Minute Since 1970 </h2><br>'
);

var currentDate = new Date();
document.write('Current Date : ' + currentDate + '<br>');
var currentDateMili = currentDate.getTime();
document.write(
  'Elapsed miliseconds since January 1, 1970 : ' + currentDateMili + '<br>'
);
var currentDateMinute = currentDateMili / 60;
document.write(
  'Elapsed minute  since January 1, 1970 : ' + currentDateMinute + '<br>'
);

//chapter 31-34 Task 7.
document.write('<br><br><b>chapter 31-34 Task 7.</b>');
document.write('<br><h2>Disply Its AM & Its PM</h2><br>');

var currentDate = new Date();
function addZero(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

var d = new Date();
var h = addZero(d.getHours());
if (h <= 12) {
  alert('chapter 26-30 Task 7 \n\n Its AM');
  document.write('Its AM');
} else {
  alert('chapter 26-30 Task 7 \n\n Its PM');
  document.write('Its PM <br>');
}

//chapter 31-34 Task 8.
document.write('<br><br><b>chapter 31-34 Task 8.</b>');
document.write('<br><h2>Disply Later Date</h2><br>');

var d1 = new Date('dec 31,2020');
document.write(d1 + '<br>');

//chapter 31-34 Task 9.
document.write('<br><br><b>chapter 31-34 Task 9.</b>');
document.write(
  '<br><h2>Disply days past since 1st Ramadan june 18 2015</h2><br>'
);

var dob = new Date('jun 18,2015');
var dobmili = dob.getTime();
var today = new Date();
var todaymili = today.getTime();
var diff = todaymili - dobmili;
var accueage = Math.floor(diff / (1000 * 60 * 60 * 24));
document.write(accueage + ' : Days have passed since 1st Ramadan, 2015 <br>');

//chapter 31-34 Task 10.
document.write('<br><br><b>chapter 31-34 Task 10.</b>');
document.write('<br><h2>Disply MiliSecond since Dec 05 2015</h2><br>');

var d1 = new Date('dec 05,2015 22:50:16 GMT+0500 (PKT)');
document.write(d1 + '<br>');

var dob = new Date(d1);
var dobmili = dob.getTime();
var today = new Date();
var todaymili = today.getTime();
var diff = todaymili - dobmili;
var accueage = Math.floor(diff / 1000);
document.write(accueage + ' : seconds had passed since begining of 2015 <br>');

//chapter 31-34 Task 11.
document.write('<br><br><b>chapter 31-34 Task 11.</b>');
document.write('<br><h2>Disply 1 hour ago time</h2><br>');

var d1 = new Date();
document.write('Current Date : ' + d1 + '<br>');
d1.setHours(d1.getHours() - 1);
document.write('1 Hour ago, it was : ' + d1 + '<br>');

//chapter 31-34 Task 12.
document.write('<br><br><b>chapter 31-34 Task 12.</b>');
document.write('<br><h2>Disply 100 Year Back Time</h2><br>');

var d2 = new Date();
document.write('Current Date : ' + d2 + '<br>');
d2.setFullYear(d2.getFullYear() - 100);
document.write('100 Year Back, it was : ' + d2 + '<br>');

//chapter 31-34 Task 13.
document.write('<br><br><b>chapter 31-34 Task 13.</b>');
document.write('<br><h2>Disply Age and Birth Year</h2><br>');

var userAge = +prompt(
  'chapter 31-34 Task 13. \n\n Age Calculator',
  'Enter Age'
);
document.write('Your Age is : ' + userAge + '<br>');
var d3 = new Date();

var birhtYear = d3.getFullYear() - userAge;
document.write('Your birth year is  : ' + birhtYear + '<br>');

//chapter 31-34 Task 14.
document.write('<br><br><b>chapter 31-34 Task 14.</b>');
document.write('<br><h2>K-Electric Bill</h2><br>');

var customerName = 'ABC Customer'; // a
var currentUnit = 410; //c
var unitCharges = 16; //d
var surCharge = 350; //f

var bill_month;
function billMonth() {
  //b
  var date = new Date();
  var month = date.getMonth();
  var arr2 = [
    'January',
    'feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  for (var i = 0; i < arr2.length; i++) {
    if (month == i) {
      bill_month = arr2[i];
    }
  }
} // b End

document.write('Customer Name : <b>' + customerName + '</b><br>'); //a
billMonth(); //b
document.write('Month : <b>' + bill_month + '</b><br>'); //b
document.write('Number Of Units : <b>' + currentUnit + '</b><br>'); //c
document.write('Charges Per Unit : <b>' + unitCharges + '</b><br><br>'); //d

var totalAmount = currentUnit * unitCharges;
document.write(
  'Net Amount Payable (within Due Date): <b>' + totalAmount + '</b><br>'
);
document.write('Late Payment surcharge : <b>' + surCharge + '</b><br>');
document.write(
  'Gross Amount Payable (after Due Date): <b>' +
    (totalAmount + surCharge) +
    '</b><br>'
);

document.write('<br><br><b>chapter 31-34 End....</b>');
// Chapter 31-34 End...

//chapter 35-38 Functions
document.write('<br><br><h1>chapter 35-38 Function</h1>');

//chapter 35-38 Task 1.
document.write('<br><br><b>chapter 35-38 Task 1.</b>');
document.write('<br><h2>Disply Current Date & Time Using Function</h2><br>');

function displyTime() {
  var i = Date();
  document.write(i);
}
displyTime();

//chapter 35-38 Task 2.
document.write('<br><br><b>chapter 35-38 Task 2.</b>');
document.write('<br><h2>Greet User Using Function</h2><br>');

function greeting() {
  var firstName = prompt(
    'chapter 35-38 Task 2 \nusing function \n\nEnter First Name',
    'First NAme'
  );
  var lastName = prompt(
    'chapter 35-38 Task 2 \nusing function \n\n Enter Last Name',
    'Last Name'
  );
  var fullName = firstName + ' ' + lastName;
  alert(
    'chapter 35-38 Task 2 \nusing function \n\n chapter 21-25 Task 1. \n\n Thank For Visiting ' +
      fullName
  );
  document.write('<br>  Thank For Visiting ' + fullName);
}
greeting();

//chapter 35-38 Task 3.
document.write('<br><br><b>chapter 35-38 Task 3.</b>');
document.write('<br><h2>Sum of User Input Numbers Using Function</h2><br>');

function sumOfUser() {
  var a = +prompt(
    'chapter 35-38 Task 3 \nusing function \n\n Enter First Number That You Want To Sum',
    '5'
  );
  var b = +prompt(
    'chapter 35-38 Task 3 \nusing function \n\n Enter Second Number That You Want To Sum',
    '5'
  );

  var c = a + b;
  alert(
    'chapter 35-38 Task 3 \nusing function \n\n Sum of ' +
      a +
      ' & ' +
      b +
      ' is ' +
      c
  );
  document.write('Sum of ' + a + ' & ' + b + ' is ' + c);
  return c;
}
sumOfUser();

//chapter 35-38 Task 4.
document.write('<br><br><b>chapter 35-38 Task 4.</b>');
document.write('<br><h2>Calculator Using Function</h2><br>');

function calc() {
  var ab = +prompt(
    'chapter 35-38 Task 4 \n Calculator using function \n\n Enter First Number ',
    '5'
  );
  var bc = prompt(
    'chapter 35-38 Task 4 \n Calculator using function \n\n Enter Operator (+, -, *, /) ',
    '+'
  );
  var cd = +prompt(
    'chapter 35-38 Task 4 \n Calculator using function \n\n Enter Second Number ',
    '5'
  );
  var result;
  var temp;
  if (bc === '+') {
    result = ab + cd;
    temp = '+';
  } else if (bc === '-') {
    result = ab - cd;
    temp = '-';
  } else if (bc === '*') {
    result = ab * cd;
    temp = '*';
  } else if (bc === '/') {
    result = ab / cd;
    temp = '/';
  } else {
    document.write('Enter Invalid Operator');
  }
  alert(
    'chapter 35-38 Task 4 \n Calculator using function \n\n' +
      ab +
      ' ' +
      temp +
      ' ' +
      cd +
      ' = ' +
      result
  );
  document.write(ab + ' ' + temp + ' ' + cd + ' = ' + result + '<br>');
}
calc();

//chapter 35-38 Task 5.
document.write('<br><br><b>chapter 35-38 Task 5.</b>');
document.write('<br><h2>Sum Of Square Function</h2><br>');

function sumOfSquares(num) {
  var numResult = num * num;

  alert(
    'chapter 35-38 Task 5 \n using function \n\nThe sum of squares for numbers : ' +
      num +
      ' is ' +
      numResult
  );
  document.write(
    'The sum of squares for numbers : ' + num + ' is ' + numResult
  );
}
var num = parseInt(
  prompt(' chapter 35-38 Task 5 \n using function \n\n Enter a number:')
);
sumOfSquares(num);

//chapter 35-38 Task 6.
document.write('<br><br><b>chapter 35-38 Task 6.</b>');
document.write('<br><h2>Factorial Finder Using Function</h2><br>');

function factorial(n) {
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  } else {
    for (var i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
}
var factorialNum = parseInt(
  prompt(
    'chapter 35-38 Task 6 \n using function \n\n Enter Number for finding Factorial : ',
    '5'
  )
);
answer = factorial(factorialNum);
document.write(
  'The factorial of <b>' + factorialNum + '</b> is <b>' + answer + '</b>'
);
alert(
  'chapter 35-38 Task 6 \n using function \n\n The factorial of ' +
    factorialNum +
    ' is ' +
    answer
);

//chapter 35-38 Task 7.
document.write('<br><br><b>chapter 35-38 Task 7.</b>');
document.write('<br><h2>Counter Start And End Function</h2><br>');

function counter() {
  var start = parseInt(
    prompt(
      'chapter 35-38 Task 7 \n Counting function \n\n Enter Start Counting Value ',
      '1'
    )
  );
  var stop = parseInt(
    prompt(
      'chapter 35-38 Task 7 \n Counting function \n\n Enter Stop Counting Value ',
      '10'
    )
  );
  document.write(
    'Counting Starting Value ' +
      start +
      ' And Ending Value ' +
      stop +
      '<br><br>'
  );
  for (var i = start; i <= stop; i++) {
    document.write(i + ' ');
  }
}
counter();

//chapter 35-38 Task 8.
document.write('<br><br><b>chapter 35-38 Task 8.</b>');
document.write(
  '<br><h2>Find Hypotenious Of Right Angle Trangle Function</h2><br>'
);

function calchypo(sideBase, sidePerp) {
  function calcSquare(x) {
    return x * x;
  }

  var sidehypo = Math.sqrt(calcSquare(sideBase) + calcSquare(sidePerp));
  return sidehypo;
}
var result;
var base = 3;
var perp = 4;
result = calchypo(base, perp);
document.write(
  'Base = <b>' +
    base +
    '</b>, Perpendicular = <b>' +
    perp +
    '</b> Hypotenious = ? <br>'
);
document.write('Result = <b>' + result + '</b><br>');

//chapter 35-38 Task 9.
document.write('<br><br><b>chapter 35-38 Task 9.</b>');
document.write('<br><h2>Find Area of Rectangle Function</h2><br>');

function rectangle(widh, height) {
  var result = widh * height;
  return result;
}
var widht = 8;
var height = 5;
var result = rectangle(widht, height);

document.write(
  'Widh = <b>' +
    widht +
    '</b>, Height = <b>' +
    height +
    '</b> Area of rectangle = ? <br>'
);
document.write('Area of rectangle  = <b>' + result + '</b><br>');

//chapter 35-38 Task 10.
document.write('<br><br><b>chapter 35-38 Task 10.</b>');
document.write('<br><h2>Check Palindrome word Function</h2><br>');

function palindrome(str) {
  var len = str.length;
  var mid = Math.floor(len / 2);

  for (var i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
}
var str = prompt(
  'chapter 35-38 Task 10 \n Palindrom word checker function \n\n Enter Word to check Is Word Palindrome or not',
  'madam'
);
var str2 = str.toLowerCase();
var checked = palindrome(str2);
alert(
  'chapter 35-38 Task 10 \n Palindrom word checker function \n\n you Enter ' +
    str +
    ' is Palindrome : ' +
    checked
);
document.write('you Enter ' + str + ' is Palindrome : ' + checked);

//chapter 35-38 Task 11.
document.write('<br><br><b>chapter 35-38 Task 11.</b>');
document.write('<br><h2>Sentence Capitalizer Function</h2><br>');

function capitalizer(str) {
  var arr = str.split(' ');
  var newarr = [];

  for (var i = 0; i < arr.length; i++) {
    newarr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return newarr.join(' ');
}
var inputWord = 'the quick brown fox';
var afterCapitalize = capitalizer(inputWord);

document.write('Before Capitalize Sentence is : ' + inputWord + '<br>');
document.write('After Capitalize Sentence is : ' + afterCapitalize + '<br>');

//chapter 35-38 Task 12.
document.write('<br><br><b>chapter 35-38 Task 12.</b>');
document.write('<br><h2>Sentence Capitalizer Function</h2><br>');

function longestWord(str) {
  var strSplit = str.split(' ');

  var longest = 0;
  var word = null;
  for (var i = 0; i < strSplit.length - 1; i++) {
    if (longest < strSplit[i].length) {
      longest = strSplit[i].length;
      word = strSplit[i];
    }
  }
  return word;
}
var sentence =
  'Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia.';
var checkedLongest = longestWord(sentence);
document.write('Sentence <b>' + sentence + '</b><br>');
document.write(
  'Longest Word Is : <b>' +
    checkedLongest +
    '</b><br>' +
    'Word Length : <b>' +
    checkedLongest.length +
    '</b>'
);

//chapter 35-38 Task 13.
document.write('<br><br><b>chapter 35-38 Task 13.</b>');
document.write('<br><h2>The Geometrizer</h2><br>');

function calcCircumference(radius) {
  var r = radius;
  var value = 2 * Math.PI * r;
  var result = value.toFixed(2);
  return result;
}
function calcArea(radius) {
  var r = radius;
  var value = Math.PI * (r * r);
  var result = value.toFixed(2);
  return result;
}
var radius = 5;
var cercumference = calcCircumference(radius);
var area = calcArea(radius);

document.write('Radius is : ' + radius + '<br>');
document.write('Cercumference Of Circle is : ' + cercumference + '<br>');
document.write('Area Of Circle : ' + area + '<br>');
