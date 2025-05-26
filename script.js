var theme = document.querySelector(".theme");
var skill = document.querySelectorAll(".skill");
var project = document.querySelectorAll(".project-card");
theme.addEventListener("click",( ) => {
    document.querySelector(".theme-icon").setAttribute("src", "/icons/sun-svgrepo-com.svg");
    document.querySelector(".tool-tip").innerHTML = "Double Click for Dark Mode";
    document.querySelector("#abt-me-section").style.color = "black";
    document.querySelector(".pfp-cont").style.borderRight = "black solid 3px";
    document.querySelector(".pfp").style.border = "dashed 3px black";
    document.querySelector(".abt-me-cont").style.backgroundColor ="rgba(255, 255, 255, 0.61)";
    document.querySelector(".abt-me-cont").style.boxShadow = "rgba(0, 0, 0, 0.74) 0px 5px 15px";
    document.querySelector("#skills-section").style.color = "black";
    document.querySelector(".skill-cont").style.backgroundColor = "rgba(255, 255, 255, 0.61)";
    for (let i = 0; i < skill.length; i++) {
        skill[i].style.backgroundColor = "white";        
    }
    document.querySelectorAll(".skill-icon")[9].setAttribute("src","icons/icons8-express-js.svg");
    document.querySelectorAll(".skill-icon")[7].setAttribute("src","icons/icons8-nodejs.svg");
    document.querySelectorAll(".skill-icon")[8].setAttribute("src","icons/mongodb-svgrepo-com.svg");
    document.querySelectorAll(".skill-icon")[6].setAttribute("src","icons/react-logo-svgrepo-com.svg");
    document.querySelector("#projects-section").style.color = "black";
    for(var j = 0; j < project.length;j++){
        project[j].style.backgroundColor = "white"
        project[j].style.border = "black solid";
    }
    document.querySelector(".project-cont").style.backgroundColor = "rgba(255, 255, 255, 0.61)";
    document.querySelectorAll(".project-img")[0].setAttribute("src","icons/contact-mobile-svgrepo-com.svg");
    document.querySelectorAll(".project-img")[1].setAttribute("src","icons/person-fill-svgrepo-com.svg");
    document.querySelector("#contact-section").style.color = "black";
    document.querySelector(".contact-cont").style.boxShadow = "rgba(0, 0, 0, 0.74) 0px 5px 15px";
    document.querySelector(".contact-cont").style.backgroundColor = "rgba(255, 255, 255, 0.61)";
    
    
})
theme.addEventListener("dblclick",( ) => {
    document.querySelector(".theme-icon").setAttribute("src", "/icons/moon-svgrepo-com.svg");
    document.querySelector(".tool-tip").innerHTML = "Click for Light Mode";
    document.querySelector("#abt-me-section").style.color = "white";
    document.querySelector(".pfp-cont").style.borderRight = "white solid 3px";
    document.querySelector(".pfp").style.border = "dashed 3px white";
    document.querySelector(".abt-me-cont").style.backgroundColor ="rgba(0, 0, 0, 0.61)";
    document.querySelector(".abt-me-cont").style.boxShadow = "rgba(255, 255, 255, 0.74) 0px 5px 15px";
    document.querySelector("#skills-section").style.color = "white";
    document.querySelector("#skills-section").style.boxShadow = "rgba(255, 255, 255, 0.74) 0px 5px 15px";
    document.querySelector(".skill-cont").style.backgroundColor = "rgba(0, 0, 0, 0.61)";
    for (let i = 0; i < skill.length; i++) {
        skill[i].style.backgroundColor = "rgb(0, 0, 0)";        
    }
    document.querySelectorAll(".skill-icon")[9].setAttribute("src","icons/icons8-express-js-dark.svg");
    document.querySelectorAll(".skill-icon")[7].setAttribute("src","icons/icons8-nodejs-dark.svg");
    document.querySelectorAll(".skill-icon")[8].setAttribute("src","icons/mongodb-svgrepo-com-dark.svg");
    document.querySelectorAll(".skill-icon")[6].setAttribute("src","icons/react-logo-svgrepo-com-dark.svg");
    document.querySelector("#projects-section").style.color = "white";
    for(var j = 0; j < project.length;j++){
        project[j].style.backgroundColor = "black";
        project[j].style.border = "white solid";
    }
    document.querySelector(".project-cont").style.backgroundColor = "rgba(0, 0, 0, 0.61)";
    document.querySelectorAll(".project-img")[0].setAttribute("src","icons/contact-mobile-svgrepo-com-light.svg");
    document.querySelectorAll(".project-img")[1].setAttribute("src","icons/person-fill-svgrepo-com-light.svg");
    document.querySelector("#contact-section").style.color = "white";
    document.querySelector(".contact-cont").style.boxShadow = "rgba(255, 255, 255, 0.74) 0px 5px 15px";
    document.querySelector(".contact-cont").style.backgroundColor = "rgba(0, 0, 0, 0.61)";
})