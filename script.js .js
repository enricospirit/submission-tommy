const navMenu = document.querySelectorAll('.navMenu')
for (const menu of navMenu) {
    menu.addEventListener('click', function (e) {
        clearActiveMenu()

        menu.classList.add('active')
        console.log(menu.classList)
    })
}

function clearActiveMenu() {
    nav = document.querySelectorAll('.navMenu')
    for (const element of nav) {
        element.classList.remove('active')
    }
}