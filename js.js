let first;
let second;
let check;
//object arithmetic 
let arith={
      add:(a,b)=>{
         return(a+b);
         },
      subtract:(a,b)=>{
          return(a-b);
         },
      divi:(a,b)=>{
          return(a/b);
         },
      multi:(a,b)=>{
          return(a*b);
         }
 }
 
 
       //selecting all elrments 
let button=document.querySelectorAll("button");
      //display element 
let show=document.querySelector(".ans");
       
       //looping through the element btn
       
 for(let i=0; i<button.length;i++)
   {
     button[i].addEventListener("click",(e)=>
        {
         let textCont=e.target.innerHTML;
        if(textCont=="CLR")
          {
             show.innerHTML="";
         }
       else if(textCont=="DEL")
        {
                                          show.innerHTML=show.innerHTML.slice(0,show.innerHTML.length-1);
                                          
      }else if(textCont=="X"){
          
      first=Number(show.innerHTML);
      check="X";
      show.innerHTML="";
          
     }else if(textCont=="+"){
          
     first=Number(show.innerHTML);
     check="+";
     show.innerHTML="";
      }
     else if(textCont=="-"){
          
     first=Number(show.innerHTML);
     check="-";
     show.innerHTML="";
          
      }
     else if(textCont=="/"){
          
    first=Number(show.innerHTML);
     check="/";
    show.innerHTML="";
          
     }
          
  else if(textCont=="="){
          
    //check
   if (check=="X"){
          
         second=Number(show.innerHTML);
         show.innerHTML=arith.multi(first,second);
         
         }else if (check=="+"){
         
             second=Number(show.innerHTML);
             show.innerHTML=arith.add(first,second);
             
         }else if(check=="-"){
         
       second=Number(show.innerHTML);
                 show.innerHTML=arith.subtract(first,second);
             
         } else {
             second=Number(show.innerHTML);
             show.innerHTML=arith.divi(first,second);
         }
         
         
         //end of check 
          
       }
      
          else
          {
              show.innerHTML+=textCont;
           }
           }
           );
           
       }
