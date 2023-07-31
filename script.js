const toggler = document.querySelector('.toggle');
const trans = document.querySelector('.btn');
const txt = document.querySelector('.txt');

toggler.addEventListener('click', () => {

    document.body.classList.toggle("light__theme")
    trans.classList.toggle("trans")
    if (document.body.classList.contains("light__theme")) {
        txt.innerHTML = "Dark Mode"
    } else {
        txt.innerHTML = "Light Mode"
    }
    
})