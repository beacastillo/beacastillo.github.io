
function handleButtonClick() {
    var content = document.getElementById("content");

    content.style.opacity = 0;
    content.style.transform = "translateY(-20px)";
    content.classList.add("active");

    setTimeout(function() {

        content.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        content.style.opacity = 1;
        content.style.transform = "translateY(0)";
    }, 50);
}


function closePopUp() {
    var content = document.getElementById("content");


    content.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    content.style.opacity = 0;
    content.style.transform = "translateY(-20px)";

    setTimeout(function() {

        content.classList.remove("active");
        content.style.opacity = 1;
        content.style.transform = "translateY(0)";
        content.style.transition = "";
    }, 500);
    
}
