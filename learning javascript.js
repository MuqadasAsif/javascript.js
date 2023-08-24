
//operators and expressions
let a=5
let b=10
//arithmetic operators
console.log("a+b=", a+b)
console.log("a-b=",a-b)
console.log("a*b=",a*b)
console.log("a/b=",a/b)
console.log("a**b=",a**b)
console.log("a%b=",a%b)
console.log("a++=",a++)
console.log("++a=",++a)
console.log("a--=",a--)
console.log("--a=",--a)
//assignment operators
let assign=2
console.log(assign+=5)
console.log(assign-=5)
console.log(assign*=5)
console.log(assign/=5)
console.log(assign**=5)
console.log(assign%=5)

//comparison operators

let comp1=6
let comp2="5"
console.log("comp1==comp2",comp1==comp2)
console.log("comp1!=comp2",comp1!=comp2)
console.log("comp1===comp2",comp1===comp2)
console.log("comp1!==comp2",comp1!==comp2)
console.log("comp1<comp2",comp1<comp2)
console.log("comp1>comp2",comp1>comp2)
console.log("comp1<=comp2",comp1<=comp2)
console.log("comp1>=comp2",comp1>=comp2)

//logical operators

let x=2
let y=3
console.log(x<y && x==2)
console.log(x<y || x==3)
console.log(!true)

//conditional expression

                  //if statement
let  w = prompt("hey whats your age?")
w= Number.parseInt(w) //this is a function to convert string to number
if(w>0)
  {
    alert("this is a valid age")
  }

                  //if else statement
if(w>0)
  {
    alert("this is a valid age")
  }
else
{
  alert("This is not a valid age")
}

                  //if else if statement
if(w>18)
  {
    alert("you are an adult")
  }
else if(w<18&&w>0)
{
  alert("you are a kid")
}
else(w<0)
{
  alert("This is not a valid age")
}


                    //switch statement

const g = '+' ;
  switch (g)
  {
case '-':
let a1=2
let b1=3
console.log("its an subtraction operator",a-b)
break;
case '+':
let a2=5
let b2=2
console.log("its an addition operator",a+b)
break;
case '*':
let a3=7
let b3=9
console.log("its an multiplication operator",a*b)
break;
case '/':
let a4=9
let b4=3
console.log("its an division operator",a/b)
break;
  }


                         //ternary operator
let ter=prompt("enter your age for driving test")
ter=Number.parseInt(ter)
console.log("you can",ter>18?"drive": "not drive")



                          //Practice Set

//Question1: Use logical operators to find whether the age of a person lies between 10 and 20
//Answer
let age=prompt("Enter your age")
age=Number.parseInt(age)
if(age>=10 && age<=20)
{
  prompt("your age is between 10 and 20")
}
else 
{
  prompt("your age is not between 10 and 20")
}

//Question2:Demonstrate the use of switch statement
//Answer
const fruit='papaya'
switch (fruit)
  {
    case 'apple':
      console.log("apple rate is 20$")
      break;
    case 'mango':
       console.log("mangoes rate is 50$")
      break;
    case 'papaya':
       console.log("papaya rate is 30$")
      break;
  }

//Question3:write a javascript program to find whether a number is divisible by 2 and 3
let num=prompt("Enter a number")
num=Number.parseInt(num)
if(num%2==0 && num%3==0)
{
  alert("number is divisible by both 2 and 3")
}
else
{
   alert("number is not divisible by both 2 and 3")
}

//Question4:write a javascript program to find whether a number is either divisible by 2 or 3
//ANswer

let num2=prompt("Enter a number")
num2=Number.parseInt(num2)
if(num%2==0 || num%3==0)
{
  alert("number is either divisible by  2 or 3")
}
else
{
   alert("number is not divisible by both 2 and 3")
}



                          //loops


                       //for loop
console.log("even number up to 10")
for(let i=0 ;i<=10;++i)
  {
    if(i%2==0)
                    {
                      console.log(i)
                    }
  }


let ab=
  {
    muqadas:90,
    saad :30,
    ahmed:40
    
  }
for (let c in ab)
  {
    console.log("marks of "+ c +"  are="+ ab[c] )
  }


                 //for of loop
for (let b of "muqadas")
  {
    console.log(b )
  }



                    //while loops
let n=prompt("enter value of n")
n=Number.parseInt(n)
let i=0
while(i<n)
  {
    console.log(i)
    i++
  }



                    //do while loop
let n=prompt("enter value of n")
n=Number.parseInt(n)
let i=0
do
  {
    console.log(i)
    i++
  }while(i<n)



                           //Funtions


function add(a,b)
{
  return a+b
}
let x=4;
let y=9;
console.log(add(x,y))




                            //Practice Questions
//Question1:Write a program to print the marks of a student in an object using for in loop
//answer

let obj=
  {
    ahmed:20,
    ayesha:90,
    asma:40,
    ali:80

  }
for(let a in obj)
  {
    console.log("Marks of"+ a +" are = "+ obj[a])
  }
  

//Question2:write a program to print try again until the enters the correct number
//Answer

let num=6
let i
while(i!=num)
  {
    i=prompt("enter the number")
    console.log("try again")
  }
console.log("you entered the correct number ")



//Question3:write a function to find mean of 5 numbers
//answer

function mean(x,y,z,t,u)
{
  return (x+y+z+t+u)/5
}
let a=2
let b=9
let c=10
let d=5
let e=1
console.log("mean of 5 numbers are",mean(a,b,c,d,e))



          
                        //strings
let name ="muqadas"
console.log(name)
let e= "muqadas"
console.log(e[0])
console.log(e[1])
console.log(e[2])
                       //template literals
                          
let girl1="muqadas"
let girl2="hijjab"
let sentence=`${girl1} is a friend of ${girl2}`
console.log(sentence)


                        //escape sequence
let fruit='bana\'na'
console.log(fruit)



)
                    //String methods
let a="muqadas"
console.log(a.length)
console.log(a.toUpperCase())
console.log(a.toLowerCase())
console.log(a.slice(3,6))
console.log(a.slice(1))
console.log(a.replace("mu","su"))
let friend="hijjab"
console.log(a.concat("is a friend of ",friend))
let friend2="    alishba      "
console.log(friend2.trim())

//QUESTION:use a for loop to print a string
let a="Muqadas"
for(let i=0;i<a.length;++i)
  {
    console.log(a[i])
  }
 

                         //Practice Questions
//Explore the function includes
let sentense="the cow jumps over the grass"
let word="cow"
console.log("the word", word ,sentense. includes(word)?"is present ":"is not present")

//write a program to convert a string into lowercase
//answer

let name="MUQADAS"
console.log(name.toLowerCase())
 

//extract the amount of this string
// "Please give Rs 1000"
//Answer

let sentense="Please give Rs 1000"
console.log(sentense.slice(15))



//try to change 4 character of a given string?
//answer


let sen="hello"
console.log(sen.replace("o","e"))



                               //Arrays





                        





