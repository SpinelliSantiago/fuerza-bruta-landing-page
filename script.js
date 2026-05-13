const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-4-line"
    );
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-4-line");
});



const modal = document.querySelector(".modal");
const openModalButtons = document.querySelectorAll(".open_modal");
const closeModal = document.querySelector(".close_modal");

const modalTitle = document.querySelector(".modal_info h2");
const modalPrice = document.querySelector(".modal_info h3");
const modalImage = document.querySelector(".modal_img img");
const modalDescription = document.querySelector(".modal_info p");

openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modal.classList.add("active");

        modalTitle.textContent = button.dataset.title;
        modalPrice.textContent = button.dataset.price;
        modalImage.src = button.dataset.image;
        modalDescription.textContent = button.dataset.description;
    });
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (event) => {
    if(event.target === modal){
    modal.classList.remove("active");
    }
});



const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1500,
};

ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header_content h2", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
});
ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1000,
});
ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1300,
});
ScrollReveal().reveal(".header_btn", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1600,
});
ScrollReveal().reveal(".header_socials li", {
    ...scrollRevealOption,
    delay: 2200,
    interval: 250,
});
ScrollReveal().reveal(".benefits i",{
    ...scrollRevealOption,
    delay: 200,
    interval: 500,
});
ScrollReveal().reveal(".benefits p",{
    ...scrollRevealOption,
    delay: 200,
    interval: 500,
});