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


/*==================================================
  PHASE 3 - PART 2
  TYPING EFFECT • SCROLL REVEAL
  SKILL PROGRESS ANIMATION
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
      TYPING ANIMATION
    =========================================*/

    const typingElement = document.getElementById("typing-text");

    const words = [

        "AI & Data Analytics Intern",

        "Tech Creator",

        "Robotics Enthusiast",

        "Web Developer",

        "Drone Developer",

        "Problem Solver"

    ];

    let wordIndex = 0;

    let charIndex = 0;

    let deleting = false;

    function typeEffect(){

        if(!typingElement) return;

        const currentWord = words[wordIndex];

        if(!deleting){

            typingElement.textContent = currentWord.substring(0, charIndex++);

            if(charIndex > currentWord.length){

                deleting = true;

                setTimeout(typeEffect, 1800);

                return;

            }

        }

        else{

            typingElement.textContent = currentWord.substring(0, charIndex--);

            if(charIndex < 0){

                deleting = false;

                wordIndex = (wordIndex + 1) % words.length;

                charIndex = 0;

            }

        }

        setTimeout(typeEffect, deleting ? 45 : 90);

    }

    typeEffect();

    /*=========================================
      SCROLL REVEAL
    =========================================*/

    const revealElements = document.querySelectorAll(

        ".reveal,.reveal-left,.reveal-right,.reveal-scale"

    );

    const revealObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.classList.add("active");

                }

            });

        },

        {

            threshold:0.15

        }

    );

    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

    /*=========================================
      SKILL PROGRESS BAR
    =========================================*/

    const progressBars = document.querySelectorAll(

        ".skill-progress span"

    );

    const progressObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    const progress =

                        entry.target.getAttribute("data-progress");

                    entry.target.style.width = progress + "%";

                }

            });

        },

        {

            threshold:0.4

        }

    );

    progressBars.forEach(bar => {

        progressObserver.observe(bar);

    });

});

/*==================================================
  PHASE 3 - PART 3
  MOUSE GLOW • CUSTOM CURSOR
  BACK TO TOP • SMOOTH SCROLL
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
      CUSTOM CURSOR
    =========================================*/

    const cursorDot = document.querySelector(".cursor-dot");

    const cursorOutline = document.querySelector(".cursor-outline");

    window.addEventListener("mousemove", (e) => {

        if(cursorDot){

            cursorDot.style.left = e.clientX + "px";

            cursorDot.style.top = e.clientY + "px";

        }

        if(cursorOutline){

            cursorOutline.animate({

                left: e.clientX + "px",

                top: e.clientY + "px"

            },{

                duration:300,

                fill:"forwards"

            });

        }

    });

    /*=========================================
      MOUSE GLOW
    =========================================*/

    const mouseGlow = document.getElementById("mouse-glow");

    window.addEventListener("mousemove",(e)=>{

        if(mouseGlow){

            mouseGlow.style.left = e.clientX + "px";

            mouseGlow.style.top = e.clientY + "px";

        }

    });

    /*=========================================
      SMOOTH SCROLL
    =========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(

                this.getAttribute("href")

            );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }

        });

    });

    /*=========================================
      BACK TO TOP
    =========================================*/

    const backToTop=document.querySelector(".back-to-top");

    if(backToTop){

        window.addEventListener("scroll",()=>{

            if(window.scrollY>500){

                backToTop.classList.add("show");

            }

            else{

                backToTop.classList.remove("show");

            }

        });

        backToTop.addEventListener("click",(e)=>{

            e.preventDefault();

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }

    /*=========================================
      HOVER CURSOR EFFECT
    =========================================*/

    const hoverItems=document.querySelectorAll(

        "a,button,.btn,.glass-card,.project-card,.service-card,.skill-card"

    );

    hoverItems.forEach(item=>{

        item.addEventListener("mouseenter",()=>{

            if(cursorOutline){

                cursorOutline.style.transform="translate(-50%,-50%) scale(1.8)";

            }

        });

        item.addEventListener("mouseleave",()=>{

            if(cursorOutline){

                cursorOutline.style.transform="translate(-50%,-50%) scale(1)";

            }

        });

    });

});

/*==================================================
  PHASE 3 - PART 4
  CONTACT FORM
  PERFORMANCE
  FLOATING EFFECTS
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
      CONTACT FORM
    =========================================*/

    const contactForm = document.querySelector(".contact-form");

    if(contactForm){

        contactForm.addEventListener("submit", function(e){

            e.preventDefault();

            const inputs = this.querySelectorAll(

                "input, textarea"

            );

            let valid = true;

            inputs.forEach(input=>{

                if(input.value.trim()===""){

                    valid = false;

                    input.style.borderColor="#ff4d4d";

                }

                else{

                    input.style.borderColor="rgba(255,255,255,.10)";

                }

            });

            if(valid){

                alert(

                    "Thank you! Your message has been recorded."

                );

                contactForm.reset();

            }

        });

    }

    /*=========================================
      FLOATING ANIMATION
    =========================================*/

    const floatingElements=document.querySelectorAll(

        ".float"

    );

    floatingElements.forEach((element,index)=>{

        element.style.animationDelay=

            `${index*0.4}s`;

    });

    /*=========================================
      LAZY IMAGE EFFECT
    =========================================*/

    const images=document.querySelectorAll("img");

    const imageObserver=new IntersectionObserver(

        (entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("loaded");

                    imageObserver.unobserve(entry.target);

                }

            });

        },

        {

            threshold:0.2

        }

    );

    images.forEach(image=>{

        imageObserver.observe(image);

    });

    /*=========================================
      PARALLAX EFFECT
    =========================================*/

    window.addEventListener("scroll",()=>{

        const scroll=window.pageYOffset;

        document.querySelectorAll(".blur").forEach(

            (blur,index)=>{

                blur.style.transform=

                `translateY(${scroll*(0.05+index*0.02)}px)`;

            }

        );

    });

    /*=========================================
      PERFORMANCE
    =========================================*/

    let resizeTimer;

    window.addEventListener("resize",()=>{

        clearTimeout(resizeTimer);

        resizeTimer=setTimeout(()=>{

            window.dispatchEvent(

                new Event("optimizedResize")

            );

        },250);

    });

    console.log(

        "%cPortfolio Ready 🚀",

        "color:#00E5FF;font-size:18px;font-weight:bold;"

    );

});

