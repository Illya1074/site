


function myAdoptive(){
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const sidebar = document.getElementById("sidebar");
    const tips = document.getElementById("tips");
    if(viewport_width>1450){
        sidebar.style.paddingLeft = ((viewport_width-1450)/2).toString()+"px";
        tips.style.right = ((viewport_width-1450)/2).toString()+"px"; 
    }
}

window.addEventListener('resize', function(event){
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const sidebar = document.getElementById("sidebar");
    const tips = document.getElementById("tips");
    if(viewport_width>1450){
        sidebar.style.paddingLeft = ((viewport_width-1450)/2).toString()+"px";
        tips.style.right = ((viewport_width-1450)/2).toString()+"px"; 
    }
});


window.onscroll = function() {myFunction()};




function myFunction() {
    // var testDiv = document.getElementById("test");
    // document.getElementById("demo").innerHTML = testDiv.offsetTop;
    // document.getElementById("demo").innerHTML = window.pageYOffset;
    const sidebar = document.getElementById("sidebar");
    const tips = document.getElementById("tips");
    const create_an_account = document.getElementById("create an account");
    const tip_create_an_account = document.getElementById("tip create an account");
    const create_a_team = document.getElementById("create a team");
    const tip_create_a_team = document.getElementById("tip create a team");
    const structure_your_docs = document.getElementById("structure your docs")
    const tip_structure_your_docs = document.getElementById("tip structure your docs");
    const collaboration = document.getElementById("collaboration");
    const tip_collaboration = document.getElementById("tip collaboration");
    const rich = document.getElementById("rich");
    const tip_rich = document.getElementById("tip_rich");
    

    
    if (window.pageYOffset <= 80) {
        sidebar.style.maxHeight = "calc(100%-"+(80-window.pageYOffset).toString()+"px)";
        sidebar.style.top = (80-window.pageYOffset).toString()+"px";
        tips.style.top = (100-window.pageYOffset).toString()+"px";
       
    } else {
        sidebar.style.top = "0px";
        tips.style.top = "20px";
        sidebar.style.maxHeight = "100%";
    }

    if(create_an_account.offsetTop <= window.pageYOffset & create_a_team.offsetTop >= window.pageYOffset){
        tip_create_an_account.style.color = "rgb(56, 132, 255)";
    } else {
        tip_create_an_account.style.color = "rgb(116, 129, 141)";
    }

    if(create_a_team.offsetTop <= window.pageYOffset & structure_your_docs.offsetTop >= window.pageYOffset){
        tip_create_a_team.style.color = "rgb(56, 132, 255)";
    } else {
        tip_create_a_team.style.color = "rgb(116, 129, 141)";
    }

    if(structure_your_docs.offsetTop <= window.pageYOffset & collaboration.offsetTop >= window.pageYOffset){
        tip_structure_your_docs.style.color = "rgb(56, 132, 255)";
    } else {
        tip_structure_your_docs.style.color = "rgb(116, 129, 141)";
    }

    if(collaboration.offsetTop <= window.pageYOffset & rich.offsetTop >= window.pageYOffset){
        tip_collaboration.style.color = "rgb(56, 132, 255)";
    } else {
        tip_collaboration.style.color = "rgb(116, 129, 141)";
    }

    if(rich.offsetTop <= window.pageYOffset){
        tip_rich.style.color = "rgb(56, 132, 255)";
    } else {
        tip_rich.style.color = "rgb(116, 129, 141)";
    }

}

myFunction();




// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     sidebar.classList.add("sidebar_static");
//   } else {
//     sidebar.classList.remove("sidebar_fixed");
//   }
// }




