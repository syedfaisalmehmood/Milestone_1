// 'const contactInfo as htmlbutton= document.getElementById("contactInfo skills");
// const skills = document.getElementById("Professional Skills");
// if(professional Skills)'
var toggleButton = document.getElementById("toggle-skills");
var skills = document.getElementById("skills");
toggleButton.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
