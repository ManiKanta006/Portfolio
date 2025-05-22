var theme = document.querySelector(".theme");
theme.addEventListener("click",( ) => {
    document.querySelector(".theme-icon").setAttribute("src", "/icons/sun-svgrepo-com.svg");
    document.querySelector(".tool-tip").innerHTML = "Double Click for Dark Mode";
    document.querySelector("#abt-me-section").style.color = "black";
})
theme.addEventListener("dblclick",( ) => {
    document.querySelector(".theme-icon").setAttribute("src", "/icons/moon-svgrepo-com.svg");
    document.querySelector(".tool-tip").innerHTML = "Click for Light Mode";
    document.querySelector("#abt-me-section").style.color = "white";
})