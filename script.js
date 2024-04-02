
if (window.location.pathname.includes("index.html")) {
    const ads = document.querySelector("#curso-ads");
    const bsdev = document.querySelector("#curso-bsdev");
    const websec = document.querySelector("#curso-websec");
    const sobre = document.querySelector(".btn-about");

    ads.addEventListener("click", function () {
        goToCurso("ads.html");
    });
    bsdev.addEventListener("click", function () {
        goToCurso("bsdev.html");
    });
    websec.addEventListener("click", function () {
        goToCurso("websec.html");
    });

    function goToCurso(nomeCurso) {
        window.location.href = "./cursos/" + nomeCurso;
    }

    sobre.addEventListener("click", function () {
        window.location.href = "sobre.html";
    })

}

document.querySelectorAll(".logo-nav").forEach(function (logo) {
    logo.addEventListener("click", function () {
        if (window.location.pathname.includes("/cursos/")) {
            window.location.href = "../index.html";
        } else if (window.location.pathname.includes("index.html")) {
            window.location.href = "index.html";
        }else{
            window.location.href = "./index.html";
        }
    })
})