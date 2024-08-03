function homepage() {
    window.location.href = "/SBMS/index.html";
}

function main() {
    // closing to home-page on clicking
    document.querySelector(".close").addEventListener("click",homepage)
}

main();
