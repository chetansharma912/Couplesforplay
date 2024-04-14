

// window.onload=()=>{
//     checkScreensize();
// }

// window.onresize = ()=>{
//     checkScreensize();
// }

function checkScreensize(){
    if(window.screen.width>570 && !(window.location.href.includes("error.html"))){
        window.location.href = "error.html"
    }
    else if(window.screen.width<570 && (window.location.href.includes("error.html"))){
        window.location.href = "index.html"
    }
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

// function activeMenu(event){
//     let items = document.querySelectorAll(".menu .menu-item");
//     items.forEach((item)=>{
//         item.classList.remove("active");
//     });
//     event.classList.add("active");
// }
