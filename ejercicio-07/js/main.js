let styleCollection1=document.getElementById('original');
let styleCollection2=document.getElementById('urbano');
let styleCollection3=document.getElementById('futuro');
 styleCollection1.disabled=false;

 const  btnDocument=document.querySelector(".button__header")
 btnDocument.addEventListener("click",(e)=>{
         
         if(styleCollection1.disabled === false){
                        styleCollection1.disabled=true;
                         styleCollection2.disabled=false;
                        localStorage.setItem('theme','original');
                }else if(styleCollection2.disabled === false){
                        styleCollection2.disabled=true;
                        styleCollection3.disabled=false;
                        localStorage.setItem('theme','futuro');
                } else if(styleCollection3.disabled === false){
                        styleCollection3.disabled=true;
                        styleCollection1.disabled=false;
                        localStorage.setItem('theme','urbano');
        } 
       });

