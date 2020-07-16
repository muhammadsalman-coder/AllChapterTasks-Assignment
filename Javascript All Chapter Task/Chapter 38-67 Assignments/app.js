// chapter 38-42 Start Task 1...
document.write('<h1 style="text-align:center">Chapter 38-42... String Methods...</h1>');

// chapter 38-42 Task 1...
document.write('<br><br><b>chapter 38-42 Task 1.</b>');
document.write('<br><h2> A Raised to B </h2>');

function power(a,b) {

    var value=a;
    for (var i = 1; i <b; i++) {
       
        value=value*a;
        
    }
    return value;
}

var a,b;
a=+prompt("chapter 38-42 Task 1 \n A power B \n\nEnter the value of A : ",5);
b=+prompt("chapter 38-42 Task 1 \n A power B \n\nEnter the value of B : ",2);

var value;
value =power(a,b);
document.write(' A ^ B = ' + value + '<br>');

// chapter 38-42 Task 2...
document.write('<br><br><b>chapter 38-42 Task 2.</b>');
document.write('<br><h2> Leap Year</h2>');

function leapYear(year) {
    
    if(year%100 !=0 && year%4 ==0 || year%400==0){
        alert("chapter 38-42 Task 2 \n Leap Year \n\n   Year " + year +" Is Leap Year");
        document.write("Year " + year +" Is Leap Year");
    }
    else {
        alert("chapter 38-42 Task 2 \n Leap Year \n\n   Year " + year +" Is Not a Leap Year");
        document.write("Year " + year +" Is Not a Leap Year");
    }
}
var year=+prompt("chapter 38-42 Task 2 \n Leap Year \n\nEnter year To Check Leap Year : ",2012);
leapYear(year);

// chapter 38-42 Task 3...
document.write('<br><br><b>chapter 38-42 Task 3.</b><br><br>');


var a=+prompt("chapter 38-42 Task 3 \n   Enter Side A of Triganlge ",3);
var b=+prompt("chapter 38-42 Task 3 \n   Enter Side B of Triganlge ",3);
var c=+prompt("chapter 38-42 Task 3 \n   Enter Side C of Triganlge ",3);

var s=((a+b+c)/2);
var area=s*(s-a)*(s-b)*(s-c);
alert("chapter 38-42 Task 3 \n    Area Of Your Triangle is : " + area);
document.write("Area Of Triangle is : " + area );

// chapter 38-42 Task 4...
document.write('<br><br><b>chapter 38-42 Task 4.</b><br><br>');


function average(english,urdu,math) {
    return (english+urdu+math)/2;  
}
function percentage(english,urdu,math) {
        // Total Marks is 300
        var obtainMarks=english+urdu+math;
        var totalMarks=300;
        return (obtainMarks/totalMarks)*100;
}
function main() {
    var english=+prompt("chapter 38-42 Task 4 \n   Enter English Obtain Number : ",68);
    var urdu=+prompt("chapter 38-42 Task 4 \n    Enter Urdu Obtain Number : ",76);
    var math=+prompt("chapter 38-42 Task 4 \n    Enter Math Obtain Number : ",86);

    alert("chapter 38-42 Task 4 \n   Percentage is : " + percentage(english,urdu,math) + "\n  Average is : " + average(english,urdu,math));
    document.write(" English marks is " + english + "<br> Urdu Marks is : " + urdu + "<br> Math Marks is : "+ math);
    document.write(" Your Percentage is : "+ percentage(english,urdu,math) +"<br> Your Average Is : " + average(english,urdu,math) );


}
main();

// chapter 38-42 Task 5...
document.write('<br><br><b>chapter 38-42 Task 5.</b><br><br>');


function myindexOf(str){
    
    var strindex=prompt("chapter 38-42 Task 5 \n  Enter Single Character Which index you want to found : ","y");
    var temp=true;
    document.write(  " You word : " + str  +"<br>");
    document.write(  " You Character : " + strindex  +"<br>");
    for(var i=0 ;i<str.length;i++){
        if(strindex == str[i]){

            alert("chapter 38-42 Task 5 \n    You Character '" + strindex+ "'  Found At : " + i + " Index");
            document.write(  "You Character '" + strindex+ "' Found At : " + i + " Index <br>" );
            temp=false;
            break;            
        }        

    }
    if (temp){
        alert("chapter 38-42 Task 5 \n    You Character " + strindex +" Not Found  " );
        document.write(  " You Character " + strindex +" Not Found  <br>" );
    }
}
var str=prompt("chapter 38-42 Task 5 \n  Enter Any Word : ","saylani");
myindexOf(str);


// chapter 38-42 Task 6...
document.write('<br><br><b>chapter 38-42 Task 6.</b><br><br>');

function deletevowels() {

    var str=prompt("chapter 38-42 Task 6 \n  Enter Sentence Less Than 25 char to delete vowels in sentense: ","pakistan is beautifull");
    
    document.write(  " You Sentense is : " + str +"<br>");  
    str=str.toLowerCase();
    if(str.length<=25){
            return  str.replace(/[aeiou]/gi, '');
        }else{
            deletevowels(str);
        }
        
}
document.write(  " You Sentence After Deletion of vowels : " +deletevowels() +"<br>");


// chapter 38-42 Task 7...
document.write('<br><br><b>chapter 38-42 Task 7.</b><br><br>');

function findOccurrences(str) {
    document.write("Your Sentence is : "+str +"<br>");
    var res = str.match(/[aeiou]{2}/g);

    res.forEach(myfunction);
    function myfunction(item,index) {
      document.write( "Accurence "+(index+1) + " : " + item +"<br>");
    }
  }
var str=prompt("chapter 38-42 Task 7 \n  Enter Sentence to find occurence vowels in sentense: ","Pleases read this application and give me gratuity");
findOccurrences(str);


// chapter 38-42 Task 8...
document.write('<br><br><b>chapter 38-42 Task 8.</b><br><br>');

function kmToMeter(dist) {
    return dist*1000;
}
function kmToCentimeter(dist) {
    return (dist*1000*100).toFixed(2);
}
function kmToInch(dist) {
    var cm=kmToCentimeter(dist);
    return (cm*(1/2.54)).toFixed(2);
}
function kmToFeet(dist) {
    var inch=kmToInch(dist);
    return (inch*(1/12)).toFixed(2);
}


var dist_hydtokhi=+prompt("chapter 38-42 Task 8 \n  Enter Distance Between HYD & KHI in KM: ",1);
document.write("Your Input Distance is : " + dist_hydtokhi +"km.<br>");
document.write("Distance in Meter is :  " + kmToMeter(dist_hydtokhi) +"m.<br>");
document.write("Distance in Feet is :  " + kmToFeet(dist_hydtokhi) +"ft.<br>");
document.write("Distance in Inch is :  " + kmToInch(dist_hydtokhi) +"inch.<br>");
document.write("Distance in Centimeter is :  " + kmToCentimeter(dist_hydtokhi) +"cm.<br>");


// chapter 38-42 Task 9...
document.write('<br><br><b>chapter 38-42 Task 9.</b><br><br>');

function overTime_pay(hours) {
    if(hours>40){
        var overTime_money = (hours-40)*12;
        alert("chapter 38-42 Task 9 \n  OverTime Money is : " + overTime_money);
        document.write(  " OverTime Money is : " + overTime_money + "<br>");;
        
    }else{
        alert("chapter 38-42 Task 9 \n  No OverTime You Do ");
        document.write(  " No Over Time You Do  <br>");;
    }

}
var totalWorked_hours=+prompt("chapter 38-42 Task 9 \n   Enter Total Hours To Get Overtime Total Money : ",50);
overTime_pay(totalWorked_hours);


// chapter 38-42 Task 10...
document.write('<br><br><b>chapter 38-42 Task 10.</b><br><br>');

function denomination(amount) {
    document.write("Withdraw Amount is : " + amount+"<br>");
    if(amount/100){
        var note_100=Math.floor(amount/100)
        document.write("100 Rupees currency notes : "+ note_100+"<br>")
    }
    if ((amount%100)/50) {
        var note_50=Math.floor((amount%100)/50)
        document.write("50 Rupees currency notes : "+ note_50+"<br>")
    }
    if ((amount%100)%50/10) {
        var note_10=Math.floor((amount%100)%50/10)
        document.write("10 Rupees currency notes : "+ note_10+"<br>")
    }
    document.write("<br> You Will Have <b>" + note_100 + "</b> Hundred notes <b>" + note_50 + "</b> Fift notes and <b>" + note_10 +"</b> Ten notes. <br>")

}
var withDraw_amount=+prompt("chapter 38-42 Task 9 \n   Enter Withdraw Amount : ",560);
denomination(withDraw_amount);

document.write("<h3>chapter 38-42 End...</h3>");
// chapter 38-42 Task End....

// chapter 43-48 Tasks End....
document.write('<h1 style="text-align:center">Chapter 43-48... EVENTS...</h1>');


// chapter 43-48 Task 1...
document.write('<br><br><b>chapter 43-48 Task 1.</b>');

function clickalert() {
    alert("This is chapter 43-48 Task 1. \n on click alert");
}

// chapter 43-48 Task 2...
document.write('<br><br><b>chapter 43-48 Task 1.</b>');

function purchasealert() {
    alert("This is chapter 43-48 Task 2. \n on click Purchase \n\n Thanks For Purshaing a Phone From Us ");
}

// chapter 43-48 Task 3...
document.write('<br><br><b>chapter 43-48 Task 3.</b>');

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}

// chapter 43-48 Task 4...
// task 4 check in html file..... 


// chapter 43-48 Task 5...
document.write('<br><br><b>chapter 43-48 Task 5.</b>');


var count=0;
function increase() {
    
    document.getElementById("count").innerHTML = count;
    count +=1;
}
function decrease() {
    count -=1;
    document.getElementById("count").innerHTML = count;
    
}
// chapter 43-48 End...

// chapter 49-52 task 1...
// check in html file ...


// chapter 49-52 task 2...
// check in html file ...


// chapter 49-52 task 3...

function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var country=document.getElementById("s_row"+no);
 var age=document.getElementById("class_row"+no);
	
 var name_data=name.innerHTML;
 var country_data=country.innerHTML;
 var age_data=age.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
 age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var country_val=document.getElementById("country_text"+no).value;
 var age_val=document.getElementById("age_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("s_row"+no).innerHTML=country_val;
 document.getElementById("class_row"+no).innerHTML=age_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_s=document.getElementById("new_s").value;
 var new_name=document.getElementById("new_name").value;
 var new_class=document.getElementById("new_class").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_s+"</td><td id='s_row"+table_len+"'>"+new_name+"</td><td id='class_row"+table_len+"'>"+new_class+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_s").value="";
 document.getElementById("new_name").value="";
 document.getElementById("new_class").value="";
}

// chapter 49-52 task 3 End...



