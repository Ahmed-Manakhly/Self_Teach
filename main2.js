//================================= fliter

const switcher = document.querySelectorAll('.nav__service__container .nav__service ul li');
const products = Array.from(document.querySelectorAll('.courses__container article'));

switcher.forEach((li) => {
    li.addEventListener('click', removeLiAct);
    li.addEventListener('click', manageProduct);
});

function removeLiAct() {
    switcher.forEach((li) => {
        li.classList.remove('active');
        this.classList.add('active');
    });
};

function manageProduct() {
    if (this.dataset.cat === "all") {
        products.forEach((pro) => {
            pro.style.display = "block"
        });
    } else {
        products.forEach((pro) => {
            pro.style.display = "none"
        });
        document.querySelectorAll(this.dataset.cat).forEach((ele) => { ele.style.display = "block" });
    }
};