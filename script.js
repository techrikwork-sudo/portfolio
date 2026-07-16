/*==================================================
  PHASE 3 - PART 1
  LOADER • STICKY NAVBAR • ACTIVE NAVIGATION
  MOBILE MENU
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
      LOADER
    =========================================*/

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 1200);

    });

    /*=========================================
      STICKY NAVBAR
    =========================================*/

    const header = document.getElementById("header");

    function navbarScroll(){

        if(window.scrollY > 50){

            header.classList.add("scrolled");

        }

        else{

            header.classList.remove("scrolled");

        }

    }

    navbarScroll();

    window.addEventListener("scroll", navbarScroll);

    /*=========================================
      ACTIVE NAVIGATION LINK
    =========================================*/

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll(".nav-links a");

    function activeNavLink(){

        const scrollY = window.pageYOffset;

        sections.forEach(section => {

            const sectionHeight = section.offsetHeight;

            const sectionTop = section.offsetTop - 150;

            const sectionId = section.getAttribute("id");

            if(

                scrollY >= sectionTop &&

                scrollY < sectionTop + sectionHeight

            ){

                navLinks.forEach(link => {

                    link.classList.remove("active");

                });

                const activeLink = document.querySelector(

                    `.nav-links a[href="#${sectionId}"]`

                );

                if(activeLink){

                    activeLink.classList.add("active");

                }

            }

        });

    }

    window.addEventListener("scroll", activeNavLink);

    activeNavLink();

    /*=========================================
      MOBILE MENU
    =========================================*/

    const menuBtn = document.querySelector(".menu-btn");

    const mobileMenu = document.querySelector(".mobile-menu");

    if(menuBtn && mobileMenu){

        menuBtn.addEventListener("click", () => {

            mobileMenu.classList.toggle("active");

            menuBtn.classList.toggle("open");

        });

        const mobileLinks = document.querySelectorAll(".mobile-menu a");

        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("active");

                menuBtn.classList.remove("open");

            });

        });

    }

});




