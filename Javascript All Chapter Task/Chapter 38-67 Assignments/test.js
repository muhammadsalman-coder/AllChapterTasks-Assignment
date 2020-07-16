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
//   count += 1;
//   button.innerHTML = "Click me: " + count;
// };


// function deleteRow(r) {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("myTable").deleteRow(i);
// }
// function deleterow1() {
//     document.getElementById("r1")[1].remove();
//   }
//   function deleterow2() {
//     document.getElementById("r2")[2].remove();
//   }
//   function deleterow3() {
//     document.getElementById("r3")[3].remove();
//   }


//document.write('<br><h2> A Raised to B </h2>');


// if(hours>){
//     var overTime_money = (hours-40)*12;
//     alert("chapter 38-42 Task 9 \n  OverTime Money is : " + overTime_money);
//     document.write(  " OverTime Money is : " + overTime_money + "<br>");;
    
// }else{
//     alert("chapter 38-42 Task 9 \n  No OverTime You Do ");
//     document.write(  " No Over Time You Do  <br>");;
// }

// var dist_hydtokhi=+prompt("chapter 38-42 Task 8 \n  Enter Distance Between HYD & KHI in KM: ",1);
// document.write("Your Input Distance is : " + dist_hydtokhi +"km.<br>");
// document.write("Distance in Meter is :  " + kmToMeter(dist_hydtokhi) +"m.<br>");
// document.write("Distance in Feet is :  " + kmToFeet(dist_hydtokhi) +"ft.<br>");
// document.write("Distance in Inch is :  " + kmToInch(dist_hydtokhi) +"inch.<br>");
// document.write("Distance in Centimeter is :  " + kmToCentimeter(dist_hydtokhi) +"cm.<br>");

// function deletevowels() {

//     var str=prompt("chapter 38-42 Task 6 \n  Enter Sentence Less Than 25 char to delete vowels in sentense: ","pakistan is beautifull");
    
//     document.write(  " You Sentense is : " + str +"<br>");  
//     str=str.toLowerCase();
//     if(str.length<=25){
//             return  str.replace(/[aeiou]/gi, '');
//         }else{
//             deletevowels(str);
//         }
        
// }

// document.write(  " You Sentence After Deletion of vowels : " +deletevowels() +"<br>");;




    




  







// function average(english,urdu,math) {
//     return (english+urdu+math)/2;  
// }
// function percentage(english,urdu,math) {
//         // Total Marks is 300
//         var obtainMarks=english+urdu+math;
//         var totalMarks=300;
//         return (obtainMarks/totalMarks)*100;
// }
// function main() {
//     var english=+prompt("chapter 38-42 Task 4 \n   Enter English Obtain Number : ",68);
//     var urdu=+prompt("chapter 38-42 Task 4 \n    Enter Urdu Obtain Number : ",76);
//     var math=+prompt("chapter 38-42 Task 4 \n    Enter Math Obtain Number : ",86);

//     alert("chapter 38-42 Task 4 \n   Percentage is : " + percentage(english,urdu,math) + "\n  Average is : " + average(english,urdu,math));
//     document.write(" English marks is " + english + "<br> Urdu Marks is : " + urdu + "<br> Math Marks is : "+ math);
//     document.write(" Your Percentage is : "+ percentage(english,urdu,math) +"<br> Your Average Is : " + average(english,urdu,math) );


// }
// main();
// var a=+prompt("chapter 38-42 Task 2 \n   Enter Side A of Triganlge ",3);
// var b=+prompt("chapter 38-42 Task 2 \n   Enter Side B of Triganlge ",3);
// var c=+prompt("chapter 38-42 Task 2 \n   Enter Side C of Triganlge ",3);

// var s=((a+b+c)/2);
// var area=s*(s-a)*(s-b)*(s-c);
// alert("chapter 38-42 Task 2 \n    Area Of Your Triangle is : " + area);
// document.write("Area Of Triangle is : " + area );


