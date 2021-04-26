let toggleMenu = () => {
    let menu = document.getElementById("nav-menu")    
    menu.style.display = menu.style.display === "none" || menu.style.display === ""? "flex": "none"
}