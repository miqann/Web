const tbtn = document.querySelectorAll(".side-nav ul li");
const tabClicked = document.querySelectorAll(".tab");
const navSideMobile = document.querySelector(".sidebar");
const settingClicked = document.querySelector(".drop-box");
function show(panelIndex) {
    tabClicked.forEach(function(node){
        node.style.display = "none";
    })
    tabClicked[panelIndex].style.display = "block";
    navSideMobile.classList.remove("show");
    /* Remove drop-box after clicked*/
    settingClicked.classList.remove("visible");
} 
show(0);


$(".side-nav .side-nav-list li").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
})



 const barClick = document.querySelector(".bar");
 const navMobile = document.querySelector  (".nav-mobile");
 barClick.addEventListener("click",() =>{
     navMobile.classList.toggle("show");
 })

 const mobilesideCLick = document.querySelector(".m-bar");
 
 const closeMobileSide = document.querySelector(".close-sidebar");
    mobilesideCLick.addEventListener("click",() =>{
        navSideMobile.classList.toggle("show");
    })
    closeMobileSide.addEventListener("click", () =>{
        navSideMobile.classList.remove("show")
    })

/*show setting*/
function showSetting(){
   
    settingClicked.classList.toggle("visible")
}