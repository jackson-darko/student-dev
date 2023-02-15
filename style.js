//const append = document.querySelector('.append');
//let mainData;

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);



    for (let i = 0; i < 12; i++) {
      let background = data[i].logoBackground;

      console.log(background);

      document.querySelector(".grid").innerHTML += `
      <div  class = 'grid-container'>
      
      <ul>
      <div class='background'><img src=${data[i].logo} /> </div> 
      <div class= 'flexing'>
      <li>${data[i].postedAt}</li>
      <li class='marginleft' id='dot'>${data[i].contract}</li>
      </div>
      
      <a href='#${i}' ><h2 class='posi' onClick="display${i}()">${data[i].position}</h2></a>  
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

  
      

      // <!-- End of the For loop-->
    }


  });



  function display0 () {
    document.querySelector("Header").style.display= 'none';
    document.querySelector(".grid").style.display= 'none';
    document.querySelector(".load-more").style.display= 'none';
    document.querySelector(".testing0").style.display = 'block'
   // document.querySelector(".testing0").style.display= 'block';
    document.querySelector(".searching-container").style.display= 'none';
    document.querySelector(".searching").style.display= 'none';
    

  //   document.querySelector('.testing').style.display= 'block';
  //document.querySelector(".testing").style.position= 'fixed';     
        }


  function Load () {

  
    document.querySelector(".load-more").style.display ='none'

  
fetch("data.json")
.then((res) => res.json())
.then((data) => {


  for (let i = 12; i < 15; i++) {
    let background = data[i].logoBackground;

    console.log(background);

    document.querySelector(".grid").innerHTML += `
    <div  class = 'grid-container' >
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


    

    // <!-- End of the For loop-->
  }



});


  }
    

  function display1 () {

    document.querySelector("Header").style.display= 'none';
    document.querySelector(".grid").style.display= 'none';
    document.querySelector(".load-more").style.display= 'none';
    document.querySelector(".testing1").style.display = 'block';
    document.querySelector(".searching-container").style.display= 'none';
    document.querySelector(".searching").style.display= 'none'; 
    }


    function display2 () {

      document.querySelector("Header").style.display= 'none';
      document.querySelector(".grid").style.display= 'none';
      document.querySelector(".load-more").style.display= 'none';
      document.querySelector(".testing2").style.display = 'block'
      document.querySelector(".searching-container").style.display= 'none';

      document.querySelector(".searching").style.display= 'none';   
      }
  

      
    function display3 () {

      document.querySelector("Header").style.display= 'none';
      document.querySelector(".grid").style.display= 'none';
      document.querySelector(".load-more").style.display= 'none';
      document.querySelector(".testing3").style.display = 'block'
     // document.querySelector(".testing0").style.display= 'block';
  
     document.querySelector(".searching-container").style.display= 'none';
     document.querySelector(".searching").style.display= 'none';
  
    //   document.querySelector('.testing').style.display= 'block';
    //document.querySelector(".testing").style.position= 'fixed';     
      }



      
    function display4 () {

      document.querySelector("Header").style.display= 'none';
      document.querySelector(".grid").style.display= 'none';
      document.querySelector(".load-more").style.display= 'none';
      document.querySelector(".testing4").style.display = 'block'
     // document.querySelector(".testing0").style.display= 'block';
     document.querySelector(".searching-container").style.display= 'none';

     document.querySelector(".searching").style.display= 'none';
  
    //   document.querySelector('.testing').style.display= 'block';
    //document.querySelector(".testing").style.position= 'fixed';     
      }



      
    function display5 () {

      document.querySelector("Header").style.display= 'none';
      document.querySelector(".grid").style.display= 'none';
      document.querySelector(".load-more").style.display= 'none';
      document.querySelector(".testing5").style.display = 'block'
     // document.querySelector(".testing0").style.display= 'block';
     document.querySelector(".searching-container").style.display= 'none';
     document.querySelector(".searching").style.display= 'none';
     document.querySelector(".searching").style.display= 'none';
  
    //   document.querySelector('.testing').style.display= 'block';
    //document.querySelector(".testing").style.position= 'fixed';     
      }

      

         
    function display6 () {

      document.querySelector("Header").style.display= 'none';
      document.querySelector(".grid").style.display= 'none';
      document.querySelector(".load-more").style.display= 'none';
      document.querySelector(".testing6").style.display = 'block'
     // document.querySelector(".testing0").style.display= 'block';
     document.querySelector(".searching-container").style.display= 'none';
     document.querySelector(".searching").style.display= 'none';
      
  
    //   document.querySelector('.testing').style.display= 'block';
    //document.querySelector(".testing").style.position= 'fixed';     
      }



         
    function display7 () {

      document.querySelector("Header").style.display= 'none';
      document.querySelector(".grid").style.display= 'none';
      document.querySelector(".load-more").style.display= 'none';
      document.querySelector(".testing7").style.display = 'block'
     // document.querySelector(".testing0").style.display= 'block';
     document.querySelector(".searching-container").style.display= 'none';

     document.querySelector(".searching").style.display= 'none';
  
    //   document.querySelector('.testing').style.display= 'block';
    //document.querySelector(".testing").style.position= 'fixed';     
      }



         
    function display8 () {

      document.querySelector("Header").style.display= 'none';
      document.querySelector(".grid").style.display= 'none';
      document.querySelector(".load-more").style.display= 'none';
      document.querySelector(".testing8").style.display = 'block'
     // document.querySelector(".testing0").style.display= 'block';
     document.querySelector(".searching-container").style.display= 'none';
     document.querySelector(".searching").style.display= 'none';
      
  
    //   document.querySelector('.testing').style.display= 'block';
    //document.querySelector(".testing").style.position= 'fixed';     
      }



         
    function display9 () {

      document.querySelector("Header").style.display= 'none';
      document.querySelector(".grid").style.display= 'none';
      document.querySelector(".load-more").style.display= 'none';
      document.querySelector(".testing9").style.display = 'block'
     // document.querySelector(".testing0").style.display= 'block';
     document.querySelector(".searching-container").style.display= 'none';

     document.querySelector(".searching").style.display= 'none';
  
    //   document.querySelector('.testing').style.display= 'block';
    //document.querySelector(".testing").style.position= 'fixed';     
      }


         
    function display10 () {

      document.querySelector("Header").style.display= 'none';
      document.querySelector(".grid").style.display= 'none';
      document.querySelector(".load-more").style.display= 'none';
      document.querySelector(".testing10").style.display = 'block'
     // document.querySelector(".testing0").style.display= 'block';
     document.querySelector(".searching-container").style.display= 'none';
     document.querySelector(".searching").style.display= 'none';
      
  
    //   document.querySelector('.testing').style.display= 'block';
    //document.querySelector(".testing").style.position= 'fixed';     
      }


        
    function display11 () {

      document.querySelector("Header").style.display= 'none';
      document.querySelector(".grid").style.display= 'none';
      document.querySelector(".load-more").style.display= 'none';
      document.querySelector(".testing11").style.display = 'block'
     // document.querySelector(".testing0").style.display= 'block';
  
    document.querySelector(".searching-container").style.display= 'none';
    document.querySelector(".searching").style.display= 'none';
  
    //   document.querySelector('.testing').style.display= 'block';
    //document.querySelector(".testing").style.position= 'fixed';     
      }


        
    function display12 () {

      document.querySelector("Header").style.display= 'none';
      document.querySelector(".grid").style.display= 'none';
      document.querySelector(".load-more").style.display= 'none';
      document.querySelector(".testing12").style.display = 'block'
     // document.querySelector(".testing0").style.display= 'block';
    document.querySelector(".searching-container").style.display= 'none';

    document.querySelector(".searching").style.display= 'none';
  
    //   document.querySelector('.testing').style.display= 'block';
    //document.querySelector(".testing").style.position= 'fixed';     
      }



        
    function display13 () {

      document.querySelector("Header").style.display= 'none';
      document.querySelector(".grid").style.display= 'none';
      document.querySelector(".load-more").style.display= 'none';
      document.querySelector(".testing13").style.display = 'block'
     // document.querySelector(".testing0").style.display= 'block';
  
      document.querySelector(".searching-container").style.display= 'none';
      document.querySelector(".searching").style.display= 'none';
  
    //   document.querySelector('.testing').style.display= 'block';
    //document.querySelector(".testing").style.position= 'fixed';     
      }


        
    function display14 () {

      document.querySelector("Header").style.display= 'none';
      document.querySelector(".grid").style.display= 'none';
      document.querySelector(".load-more").style.display= 'none';
      document.querySelector(".testing14").style.display = 'block'
     // document.querySelector(".testing0").style.display= 'block';
      document.querySelector(".searching-container").style.display= 'none';
      document.querySelector(".searching").style.display= 'none';
      
  
    //   document.querySelector('.testing').style.display= 'block';
    //document.querySelector(".testing").style.position= 'fixed';     
      }




      const body = document.querySelector("body");
      const check = document.querySelector(".check");
      const grid = document.querySelector('.grid');
      const searchBox = document.querySelector(".search-box");
      const filterTit = document.querySelector(".filter-tit");
      const iconLocat = document.querySelector(".icon-locat");
      const searching = document.querySelector(".searching");
      const posi = document.querySelector(".posi");
      const mobileContent = document.querySelector(".content");
      const mobileJob = document.querySelector(".mobile-job");

      // const gridContainer = document.querySelectorAll(".grid-container");

      
      const mobileFilter = document.querySelector("#mobile-filter");
      
      check.onclick = function () {

        for (const flexing of document.querySelectorAll(".flexing")) {
            flexing.classList.toggle('active');
        }
        
        for (const posi of document.querySelectorAll(".posi")) {
            posi.classList.toggle('active');
        }
        
        for (const company of document.querySelectorAll(".company")) {
            company.classList.toggle('active');
        }

        for (const elem of document.querySelectorAll(".grid-container")) {
            elem.classList.toggle('active');
        }
        
        // for (const gridContainer1 of document.querySelectorAll(".grid-container1")) {
        //     gridContainer1.classList.toggle('active');
        // }


          for (const searchingContainer of document.querySelectorAll(".searching-container")) {
              searchingContainer.classList.toggle('active');
          }
          
          for (const test0 of document.querySelectorAll(".test0")) {
              test0.classList.toggle('active');
          }
          
          for (const internalMargin of document.querySelectorAll(".internal-margin")) {
            internalMargin.classList.toggle('active');
          }
          
          for (const footer of document.querySelectorAll(".footer")) {
            footer.classList.toggle('active');
          }
          
          for (const h2 of document.querySelectorAll(".footer h2")) {
            h2.classList.toggle('active');
          }
          
          for (const posiLink of document.querySelectorAll(".posi-link")) {
            posiLink.classList.toggle('active');
          }
          
          for (const requirement of document.querySelectorAll("#requirement")) {
            requirement.classList.toggle('active');
          }
          
          for (const scootCom of document.querySelectorAll("#scoot-com")) {
            scootCom.classList.toggle('active');
          }
          
          for (const companySite of document.querySelectorAll("#company-site")) {
            companySite.classList.toggle('active');
          }
          
          for (const aaah of document.querySelectorAll(".aaah")) {
            aaah.classList.toggle('active');
          }
          
          for (const mobileTitleFilter of document.querySelectorAll("#mobile-title-filter")) {
            mobileTitleFilter.classList.toggle('active');
          }
        
        check.classList.toggle("active");
        body.classList.toggle("active");
        grid.classList.toggle('active');
        // gridContainer1.classList.toggle('active');
        searchBox.classList.toggle("active");
        filterTit.classList.toggle('active');
        iconLocat.classList.toggle('active');
        searching.classList.toggle('active');
        mobileContent.classList.toggle('active');
        mobileJob.classList.toggle('active');
        elem.classList.toggle('active');
        mobileFilter.classList.toggle('active');
        // gridContainer.classList.toggle('active');
      };


        function popupToggle() {
        const popup = document.querySelector("#popup");
        popup.classList.toggle('active');
      }
