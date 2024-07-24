const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        //   console.log(e)
        //   console.log(e.target);
          if(e.target.id==='grey'){
            body.style.backgroundColor = e.target.id;
          }
          if(e.target.id==='pink'){
            body.style.backgroundColor = e.target.id;
          }
          if(e.target.id==='blue'){
            body.style.backgroundColor = e.target.id;
          }
          if(e.target.id==='yellow'){
            body.style.backgroundColor = e.target.id;
          }
          if(e.target.id==='purple'){
            body.style.backgroundColor = e.target.id;
          }
    });
});

// function bgcolor(color){
//   document.body.style.backgroundColor=color;
//   let txt=document.getElementsByClassName("text")
//   if(color=="black"){                                            //onclick event use 
//     for(let elm of txt){
//       elm.style.color="white";
//     }
//   }
//   else{
//     for(let elm of txt){
//       elm.style.color="black";
//     }
  
//   }
// }
