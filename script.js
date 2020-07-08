const spanList = document.querySelectorAll('#sidebar span');
const iconList = document.querySelectorAll('#sidebar i');
let ul = document.getElementById('teamsUl');
let arrow = document.getElementById('arrow-teams');
let sidebar = document.getElementById('sidebar');

function toggleSidebar(){
    for(let i=0;i<spanList.length;i++){
        let display=spanList[i].style.display;
        if(navigator.userAgent.indexOf("Trident")>-1 || navigator.userAgent.indexOf("Edge")>-1){
            if(display==="inline" || display===""){
                spanList[i].style.display="none";
                sidebar.style.width="auto";
            }
            else{
                spanList[i].style.display="inline";
                sidebar.style.width="auto";
            }
        }
        else{
            if(display==="inline" || display===""){
                spanList[i].style.display="none";
                sidebar.style.width="5%";
            }
            else{
                spanList[i].style.display="inline";
                sidebar.style.width="30%";
            }
        }
    }
    if(navigator.userAgent.indexOf("Trident")>-1 || navigator.userAgent.indexOf("Edge")>-1){
        for(let i=1;i<iconList.length;i++){
            let left=iconList[i].style.left;
            if(left===""){
                iconList[i].style.left="auto";
            }
            else{
                iconList[i].style.left="";
            }
        }
    }
    else{
        for(let i=1;i<iconList.length;i++){
            let left=iconList[i].style.left;
            if(left===""){
                iconList[i].style.left="22%";
            }
            else{
                iconList[i].style.left="";
            }
        }
    }
    
}

function toggleTeams(){
    let display=ul.style.display;
    if(display==="block"){
        ul.style.display="none";
        arrow.style.transform="rotate(45deg)";
    }
    else{
        ul.style.display="block";
        arrow.style.transform="rotate(-135deg)";
    }
}