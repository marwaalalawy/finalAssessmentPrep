//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
*/
// write your code here ...
var students=[];

function StudentInfo(name, age , education , nationality){
	return {
		name:name, 
		age:age,
		education : education,
		nationality: nationality 
	}
}

students.push(StudentInfo("Ola" , 23 , "Physicist" , "syrian"))
students.push(StudentInfo("Marwa" , 24 , "programmer" ,"syrian"))

function showFriend(st){
	var result="";
	for(var key in st){
		result+= (st[key]+"with the age of "+st[key]+ "and with " + st[key] +"  education" )
	}
	return result;
}
 function avergeStudent(students){
 	var age=0;
 	var avge=0;
 	for(var i=0;i<students.length;i++){
 		age+=students[i].age
 	}
 	return avg=age/students.length;
 }

/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,36,46,100];
*/
// write your code here ...
function rangeSquared(a,b){
	var result=[];
	if(b===undefined && a%2===0){
		result.push(Math.pow(a, 2))
	}else{
		if(b===undefined && a%2!==0){
			return null
		}
	}
		for(var i=a;i<=b;i++){
			if(i%2===0){
				result.push(Math.pow(i,2))
			}
		}
		

	return result;
}




/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
*/

// write your code here ....

function leaders(array){
	var max = array[array.length-1]
	var arr=[];
for( var i = max ; i >=0 ; i-- ) {
 if( array[i] > max ) 
 {      
   arr.push(array[i])
   max = array[i];
 }
}
return arr;  
}
