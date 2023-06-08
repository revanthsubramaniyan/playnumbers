
//-----------value taken in html---------

let btn=document.querySelector("button");
let tbel=document.querySelector("table");
let rowel=document.querySelector("table tr");
// let tbelrows=tbel.rows.length;
// console.log(tbelrows+"count"+rowel);
let flagvalue=true;
let lastrow;
//-------action on button------------
btn.addEventListener("click",()=>
{
  let num=document.querySelector("input");
  let tbel=document.querySelector("table");
  let tbelrows=tbel.rows.length;
 
  if(num.value>0)
  {
    if(flagvalue==false)
    {
    for(let t=0; t<lastrow;t++)
    {
      tbel.deleteRow(0);
    
    }
    }
  
  tbel.style.display="block";
  const number=num.value;
  //console.log(number);
  //----------1-----find suaqre/cube number--------
  let square,cube;
 square=number*number;
 //square=`square number is ${square}`;
 // console.log(square);
  let sqtb=document.createElement("tr");
  sqtb.innerHTML= `<td>Square Number of</td><td>${square}</td>`;
  tbel.append(sqtb);


  cube=number*number*number;
 // cube=`cube number is ${cube}`;
  //console.log(cube);
  let cubtb=document.createElement("tr");
  cubtb.innerHTML= `<td>Cube Number of</td><td>${cube}</td>`;

   tbel.append(cubtb);
 
//-------2-----------find even/0dd number-----------

if(number%2==0)
{
//console.log("even number");
let evetb=document.createElement("tr");
evetb.innerHTML= `<td>Even number</td><td>yes</td>`;
tbel.append(evetb);
}
 else if(number%3==0)
 {
 //console.log("odd number");
 let oddtb=document.createElement("tr");
 oddtb.innerHTML= `<td>Odd number</td><td>yes</td>`;
tbel.append(oddtb);
 }
 //----3-----find perfect number---------
 let perfect,sum=0;
   perfect=Math.floor(number/2);
   for(let i=1;i<=perfect;i++)
   {
    if(number%i==0)
    {
      sum=sum+i;
    }
   }
   if(number==sum)
   {
   // console.log("perfect number");
    let perfecttb=document.createElement("tr");
    perfecttb.innerHTML= `<td>Perfect number</td><td>yes</td>`;
   tbel.append(perfecttb);
   }
   else{
    //console.log("not perfect number");
    let perfecttb=document.createElement("tr");
    perfecttb.innerHTML= `<td>Perfect number</td><td>No</td>`;
   tbel.append(perfecttb);
   }
  //-----4-----------find armstrong number-----
  let armstrong,sumarm=0;
      armstrong=number.split("");
  for(let j=0;j<=armstrong.length;j++)
  {
   if(armstrong[j]!=null)
   {
    let powerel=armstrong[j];
    let lengthel=armstrong.length;
     sumarm=sumarm+Math.pow(powerel,lengthel);
   }
  }
  if(number==sumarm)
  {
   // console.log("armstrongnumber");
    let armtb=document.createElement("tr");
    armtb.innerHTML= `<td>Armstrong number</td><td>Yes</td>`;
   tbel.append(armtb);
  }
  else
  {
  //  console.log("not an armstrong number");
    let armtb=document.createElement("tr");
    armtb.innerHTML= `<td>Armstrong number</td><td>No</td>`;
   tbel.append(armtb);
  }
  //-----5----------prime number---------
  let prime,flag=true;
 prime=Math.floor(number/2);
 for(let k=1;k<=prime;k++)
 {
  if(number%k==0&&k!=1)
  {
     flag=false;
  }

 }
 if(flag==false)
 {
 // console.log("not prime number");
  let primetb=document.createElement("tr");
  primetb.innerHTML= `<td>Prime number</td><td>No</td>`;
   tbel.append(primetb);
 }
 else if(flag==true)
 {
 // console.log("prime number");
  let primetb=document.createElement("tr");
  primetb.innerHTML= `<td>Prime number</td><td>Yes</td>`;
   tbel.append(primetb);
 }
 //-------6------finf sq root/cube root----------
 let sqrt,cubrt;
  sqrt=Math.sqrt(number);
  //console.log("square root is "+sqrt);
  let srtb=document.createElement("tr");
  srtb.innerHTML= `<td>Square root of</td><td>${sqrt}</td>`;
   tbel.append(srtb);
  cubrt=Math.cbrt(number);
  //console.log("cube root is "+cubrt);
  let crtb=document.createElement("tr");
  crtb.innerHTML= `<td>Cube root of</td><td>${cubrt}</td>`;
   tbel.append(crtb);
  //-----------sum of digits---------------------
  let sumofdigits,sumvalue=0;
   sumofdigits=number.split("");
   sumofdigits.forEach(item => {
    //console.log(item);
      sumvalue=sumvalue+Number(item);
   });
   //console.log("sum of digits "+sumvalue);
   let sumtb=document.createElement("tr");
   sumtb.innerHTML= `<td>sum of digits</td><td>${sumvalue}</td>`;
   tbel.append(sumtb);
   //-----7------factorial-------------------
   let factorial=1,factnum;
   factnum=number;
   while(factnum>0)
   {
    factorial=factorial*factnum;
    factnum=factnum-1;
   }
 // console.log("factorial is "+factorial);
  let factb=document.createElement("tr");
  factb.innerHTML= `<td>Factorial of</td><td>${factorial}</td>`;
   tbel.append(factb);
    //------8------fibonacci series--------
    if(number<=20)
    {
    let v1=0;
    let v2=1;
    let count=1;
    let fiblist=[];
    while(number>=count)
    {
      let nextvalue=v1+v2;
      fiblist.push(nextvalue);
       count++;
       v1=v2;
       v2=nextvalue;
    }
    //console.log("fibonacci series "+fiblist);
    let fibtb=document.createElement("tr");
    fibtb.innerHTML= `<td>Fibonacci series of</td><td>${fiblist}</td>`;
   tbel.append(fibtb);
  }
   //------9------number to words---------
    let words=number.split("");
    let wdlist=[];
    words.forEach(ele => {
      if(ele==1)
      {
      wdlist.push("one");
      }
     else if(ele==2)
     {
     wdlist.push("two");
     }
     else if(ele==3)
     {
     wdlist.push("three");
     }
     else if(ele==4)
     {
     wdlist.push("four");
     }
     else if(ele==5)
     {
     wdlist.push("five");
     }
     else if(ele==6)
     {
     wdlist.push("six");
     }
     else if(ele==7)
     {
     wdlist.push("seven");
     }
     else if(ele==8)
     {
     wdlist.push("eight");
     }
     else if(ele==9)
     {
     wdlist.push("nine");
     }
     else if(ele==0)
     {find
     wdlist.push("zero");
     }
    });
 // console.log(wdlist);
  let wdtb=document.createElement("tr");
  wdtb.innerHTML= `<td>Words of</td><td>${wdlist}</td>`;
   tbel.append(wdtb);
 //-------10--------reverse number-----
 let reversenum=number.split("");
 let getreverse=reversenum.reverse();
 //console.log("reverse number is"+getreverse);
 let revtb=document.createElement("tr");
 revtb.innerHTML= `<td>Reverse number of</td><td>${getreverse}</td>`;
   tbel.append(revtb); 
    flagvalue=false;
     lastrow=tbel.rows.length;
   // console.log(lastrow);
  }

  else{
   num.value=null;
   alert("Enter a Valid Number");
   tbel.style.display="none";
  }
});