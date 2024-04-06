

window.onresize = ()=>{
    checkScreensize();
}

function startHeartbubble(){
    setInterval(()=>{
        let allHearting = document.querySelectorAll(".hearting");
        allHearting.forEach((i)=>{
            document.body.removeChild(i);
        });
        

        let numberOfHearts = (Math.random())*5;
        for (let i = 0; i < numberOfHearts ; i++) {
            let i = document.createElement("img");
            i.src = "./images/HeartBubble.gif";
            i.classList.add("hearting");
            i.style.position = "absolute";
            i.style.left = ((Math.random())*window.screen.width)+"px";
            i.style.bottom = ((Math.random())*1000)+"px";
            document.body.appendChild(i);
        }
        
    }, 2150);
}

function checkScreensize(){
    if(window.screen.width>570 && !(window.location.href.includes("error.html"))){
        window.location.href = "error.html"
    }
    else if(window.screen.width<570 && (window.location.href.includes("error.html"))){
        window.location.href = "index.html"
    }
}

function gotoPage(url){
    window.location.href = url+".html"
}


function loadblock(event,blockname){
    if(blockname=="login"){
        document.querySelector("#login").style.display = "block";
        document.querySelector("#signup").style.display = "none";
    }
    else if(blockname=="signup"){
        document.querySelector("#login").style.display = "none";
        document.querySelector("#signup").style.display = "block";
    }
    document.querySelectorAll(".nav-link").forEach((item)=>{
        item.classList.remove("active");
    });
    event.classList.add("active");
}


window.onload=()=>{
    checkScreensize();
    startHeartbubble();

    let header = `
    <nav class="navbar navbar-expand-sm">
      <div class="container-fluid">
          <a class="navbar-brand" href="#" onclick="gotoPage('index')">
              <!-- <b>Couple Game</b> -->
              <img class="animate__animated animate__bounceIn" src="./images/logo_1.PNG" width="70">
              <b>Couple's For.Play</b>
          </a>
          <!--  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon">menu</span>
          </button> -->
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <button class="btn btn-success" onclick="gotoPage('index')">Home</button>
              <!-- <button class="btn btn-danger" onclick="gotoPage('signin')">SignUp</button> -->
              <button class="btn btn-info">About</button>
              <button class="btn btn-warning">Contact <span
                      style="color:red !important;">&hearts;</span></button>
    
              <!-- <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Contact Us</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">About Us</a>
                    </li>
                  </ul> -->
          </div>
      </div>
    </nav>
    `;
    
    let footer = `
    <div class="card">
        <div class="card-body">
            <!-- <h4 class="card-title text-center">Contact Us</h4> -->
            <a href="#">Contact Us</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <p class="card-text text-center">Made With <span style="color:red !important;">&hearts;</span> and <span
                    style="color:red !important;">&hearts;</span></p>
        </div>
    </div>
    `;
    
      setTimeout(() => {
        document.querySelector("header").innerHTML = header;
        document.querySelector("footer").innerHTML = footer;
      }, 200);
    }