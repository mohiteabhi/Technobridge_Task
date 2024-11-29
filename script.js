//hamburger functionality
const hamburger = document.getElementById('hamburger');
const tabList = document.getElementById('tabList');


hamburger.addEventListener('click', function() {
    tabList.classList.toggle('open');
    hamburger.classList.toggle('active');
});

// Close the menu when clicking outside
document.addEventListener('click', function(event) {
    if (!hamburger.contains(event.target) && !tabList.contains(event.target)) {
        tabList.classList.remove('open');
        hamburger.classList.remove('active');
    }
});

document.getElementById("servicesLink").addEventListener("click", function (event) {
    event.preventDefault();
    const dropdownMenu = this.nextElementSibling;
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
});

// Close the dropdown when clicking outside
document.addEventListener("click", function (event) {
    const dropdown = document.querySelector(".dropdown-menu");
    if (!event.target.closest(".dropdown")) {
        dropdown.style.display = "none";
    }
});

const dropdownLinks = document.querySelectorAll('.dropdown > a');

dropdownLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        const dropdown = this.parentElement;
        dropdown.classList.toggle('open');
    });
});

//Sticky Sidebar
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const heroSection = document.querySelector(".hero");
    const heroHeight = heroSection.offsetHeight;

    window.addEventListener("scroll", function () {
        if (window.scrollY > heroHeight) {
            sidebar.classList.add("sticky");
        } else {
            sidebar.classList.remove("sticky");
        }
    });
});

//observing sidebar
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const links = sidebar.querySelectorAll("a");
    const sections = document.querySelectorAll("section");

    const observerOptions = {
        root: null,
        threshold: 0.5, 
    };

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            const link = document.querySelector(`a[href="#${entry.target.id}"]`);
            if (entry.isIntersecting) {

                links.forEach((link) => link.classList.remove("active"));


                if (link) {
                    link.classList.add("active");
                }
            }
        });
    };


    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));
});