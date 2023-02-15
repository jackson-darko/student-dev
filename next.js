
fetch("data.json")
.then((res) => res.json())
.then((data) => {
  
  //style=background-color:${data[i].logoBackground



  for (let i = 0; i <data.length; i++) {


    let background = data[i].logoBackground;

    document.querySelector(`.testing${i}`).innerHTML += `
    
    <a class="LockedIn" id=${i} >
    
    <Header>
    <div class="main-tab">
      <div class="devjob">devjobs</div>

      <div class="sun-check-moon">
        <img class="sun" src="./assets/desktop/icon-sun.svg" alt="icon-sun" />

            <div class="check">
          <i class="indicator"></i>
            </div>

        <img
          class="moon"
          src="./assets/desktop/icon-moon.svg"
          alt="icon-moon"
        />
      </div>
  </Header>



  <div class="test0">
      <div class='nextBackground'><h3 id="scoot"><img class="logo" src= ${data[i].logo} /> </h3> </div>
    <div class="company">
    <h1 id="scoot-com">${data[i].company}</h1>

    <a class="website-link" href="www.https://scoot.com">scoot.com</a>
    </div>
    
    <div class="newBackground">

    <h2 id="new-scoot-com">${data[i].company}</h2>

    <a class="new-website-link" href="www.https://scoot.com">scoot.com</a>

    <button id="new-company-site">${data[i].website}</button>
    </div>

    <div>
    <button id="company-site">
    ${data[i].website}
    </button>
   </div>
    </div>

            <div class="aaah">
               
                  <br/>
                  <br/>
                  <div class="internal-margin">
                  <span id="style-1" > ${data[i].postedAt}</span>
                  <span id="middle-dot">&#183;</span>
                  <span id="style-2" > ${data[i].contract}</span>

                  <div class="apply-now">
                  <h2 class="posi-link"> ${data[i].position}</h2>

                    

                  <button class="apply-link"><h2>${data[i].apply}</h2></button>

                  </div>

                  <span id="loc-m"> ${data[i].location}</span><br/>

                  
                  <p>${data[i].description}</p>
                  <h2 id="requirement">Requirements</h2>

                  <p>${data[i].requirements?.content}</p>

                  <ul>
                  <li class="ul"><p class="ul-p">${data[i].requirements?.items[0]}</p></li>
                  <li class="ul"> <p class="ul-p">${data[i].requirements?.items[1]}</p></li>
                  <li class="ul"><p class="ul-p">${data[i].requirements?.items[2]}</p></li>
                  <li class="ul"><p class="ul-p">${data[i].requirements?.items[3]}</p></li>
                  </ul>

                  <h2 id="requirement">What You Will Do</h2>
                  <p> ${data[i].role?.content}</p>

                  <ol>
                  <li><p>${data[i].requirements?.items[0]}</p></li>
                  <li> <p>${data[i].requirements?.items[1]}</p></li>
                  <li><p>${data[i].requirements?.items[2]}</p></li>
                  <li><p>${data[i].requirements?.items[3]}</p></li>
                  </ol>
                  
                  
                  
                  
                  </div>
                  </div>
                  

                  
                  <div class="footer">

                  <span id="footer-pos" class="foot-tablet">
                  <h2>${data[i].position}</h2><br/>
                  <p id="digital-inc">So Digital Inc.</p>
                  </span>
                
                <button class="footer-apply-link"><h2>${data[i].apply}</h2></button>
                  </div>


                  
              

</a>
`;
                  

for (const elem of document.querySelectorAll(".nextBackground")) {
  elem.style.backgroundColor += background;
}



}

})

// const check = document.querySelector(".check");


// check.onclick = function () {
//   check.classList.toggle("active");
// }


