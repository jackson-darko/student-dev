
fetch("data.json")
.then((res) => res.json())
.then((data) => {


  let title = document.querySelector('#title');
 // let tt = document.querySelector('#titlea')
  let location = document.querySelector('#location');
  let form = document.querySelector('#form');

  let checking = document.querySelector('#full-time-only')


  form.addEventListener('submit', event=>{
  event.preventDefault();
  handleSubmit();
  title.value='';

  })

  //style=background-color:${data[i].logoBackground
  
  function handleSubmit (){
  
    
    let t = title.value;
    

    let l = location.value;
    let c = checking.checked;
    console.log(c);
  for (let i = 0; i <data.length; i++) {
    let background = data[i].logoBackground;
    
    if( c && data[i].contract==="Full Time" ){
          
            document.querySelector('.searching').innerHTML+=
          `
          <div  class='searching-container'>
            <ul>
            <div class='background'><img src=${data[i].logo} /> </div> 
          <div class= 'flexing'>
              <li>${data[i].postedAt}</li>

           <li class='marginleft' id='dot'>${data[i].contract}</li>
              
          </div>
          
            <ahref ='#${i}'><h2 class='posi' onClick="display${i}()">${data[i].position}</h2></a>  
                 <div class='next'>
                 
                   
                   </div>
   
            <li class='company'>${data[i].company} </li>
            <p class= 'country'>${data[i].location}</p>
          </ul>
          </div>
   
           `;
   
         for (const elem of document.querySelectorAll(".background")) {
           elem.style.backgroundColor += background;
         }
  
      }


else if (t.includes(data[i].company)){

      
  document.querySelector('.searching').innerHTML+=
  `
  <div  class = 'searching-container'>
    <ul>
    <div class='background'><img src=${data[i].logo} /> </div> 
  <div class= 'flexing'>
      <li>${data[i].postedAt}</li>

   <li class='marginleft' id='dot'>${data[i].contract}</li>
      
  </div>
  
    <ahref='#${i}' ><h2 class='posi' onClick="display${i}()">${data[i].position}</h2></a>  
         <div class='next'>
         
           
           </div>

    <li class='company'>${data[i].company} </li>
    <p class= 'country'>${data[i].location}</p>
  </ul>
  </div>

   `;


   for (const elem of document.querySelectorAll(".background")) {
    elem.style.backgroundColor += background;
  }

}

      if(l.includes(data[i].location)){
          
        document.querySelector('.searching').innerHTML+=
      `
      <div  class = 'searching-container'>
        <ul>
        <div class='background'><img src=${data[i].logo} /> </div> 
      <div class= 'flexing'>
          <li>${data[i].postedAt}</li>
          <li class='marginleft' id='dot'>${data[i].contract}</li>
      </div>
      
        <ahref='#${i}' ><h2 class='posi' onClick="display${i}()">${data[i].position}</h2></a>  
             <div class='next'>
             
               
               </div>

        <li class='company'>${data[i].company} </li>
        <p class= 'country'>${data[i].location}</p>
      </ul>
      </div>

       `;

     for (const elem of document.querySelectorAll(".background")) {
       elem.style.backgroundColor += background;
     }

  }

    }

    title.value = '';
    location.value='';
    document.querySelector('.grid').style.display='none';
    document.querySelector('.load-more').style.display='none';
  

  }
})
