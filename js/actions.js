
function gotoPage(url){
    window.location.href = url+".html"
}


function loadblock(blockname){
    if(blockname=="login"){
        document.querySelector("#login").style.display = "block";
        document.querySelector("#signup").style.display = "none";
    }
    else if(blockname=="signup"){
        document.querySelector("#login").style.display = "none";
        document.querySelector("#signup").style.display = "block";
    }
}