function homepage() {
    window.location.href = "/home-page/index.html";
}

function main() {
    // closing to home-page on clicking
    document.querySelector(".close").addEventListener("click",homepage)

}
main();