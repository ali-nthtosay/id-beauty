<template>
    <div class="navbar">
        <!-- Logo Section -->
        <div class="logo">
            <img :src="logo" alt="Logo" class="logo-img" />
        </div>

        <a target="_blank"
            href="https://n822055.alteg.io/company/771948/personal/menu?fbclid=PAAaauVBXUKT06WrekGnwoBV59SI_uUcwOmxNg8l_MIfCMlsq0DrHUC8iF0vo_aem_AX_fn9g3_HfK9NDCRrQ4zZv51ieJmuZl6P2Lb4QJa4kZksoFLVkxvw79EI-0Gh_5THk&o="
            class="animated-button">
            <span>Termin Buchen</span>
        </a>

        <!-- Navigation Links -->
        <nav class="nav-links">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">Über Uns</a></li>
                <li><a href="#contact">Kontakt</a></li>
                <li><a href="#gallery">Galerie</a></li>

            </ul>
        </nav>

        <!-- Hamburger Menu for Mobile -->
        <div class="hamburger-menu" @click="toggleMenu">
            <img :src="hamburgerIcon" alt="Menu" class="hamburger-img" />
        </div>

        <!-- Mobile Dropdown Menu -->
        <div :class="{ 'mobile-menu': true, 'active': isMenuOpen }">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">Über Uns</a></li>
                <li><a href="#contact">Kontakt</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
import logo from '@/assets/logo3.png'; // Import your logo image
import hamburgerIcon from '@/assets/menu.jpg'; // Import your custom hamburger icon image

export default {
    name: 'NavbarComponent',
    data() {
        return {
            logo: logo,
            hamburgerIcon: hamburgerIcon,
            isMenuOpen: false, // To manage the visibility of the mobile menu
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen; // Toggle the mobile menu visibility
        }
    }
};
</script>

<style scoped>
html {
    scroll-behavior: smooth;
}

/* Styling for the Termin Buchen Button */
.animated-button {
    position: relative;
    display: inline-block;
    width: auto;
    /* Change from fixed width to auto */
    max-width: 200px;
    /* You can adjust this for larger screens */
    height: 50px;
    line-height: 48px;
    background: #ff69b4;
    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: 4px;
    text-decoration: none;
    color: rgba(127, 50, 214, 0.2);
    overflow: hidden;
    text-align: center;
    -webkit-box-reflect: below 1px linear-gradient(transparent, rgba(56, 14, 14, 0.267));
    padding: 0 20px;
    /* Add padding for better appearance on larger screens */
}

.animated-button span {
    font-size: 14px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #eef5ee;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.animated-button:hover span {
    color: rgba(255, 255, 255, 1);
    transform: scale(1.1);
}

/* Reset some basic styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

/* Navbar styling */
.navbar {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 10px 30px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    opacity: 0.7;
}

.logo-img {
    height: 60px;
}

.nav-links ul {
    display: flex;
    gap: 30px;
}

.nav-links ul li {
    list-style: none;
}

.nav-links ul li a {
    text-decoration: none;
    color: rgb(12, 3, 3);
    font-size: 16px;
    font-weight: 600;
    padding: 10px;
    transition: background-color 0.3s ease-in-out;
}

.nav-links ul li a:hover {
    background-color: #007bff;
    border-radius: 5px;
}

/* Hamburger menu styling */
.hamburger-menu {
    display: none;
    cursor: pointer;
}

.hamburger-img {
    height: 40px;
    width: 40px;
}

/* Mobile Menu styling */
.mobile-menu {
    display: none;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #fff;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 999;
}

.mobile-menu ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
}

.mobile-menu ul li {
    list-style: none;
}

.mobile-menu ul li a {
    text-decoration: none;
    color: rgb(12, 3, 3);
    font-size: 16px;
    font-weight: 600;
    padding: 10px;
    display: block;
    transition: background-color 0.3s ease-in-out;
}

.mobile-menu ul li a:hover {
    background-color: #007bff;
    border-radius: 5px;
}

/* Media Query for smaller screens */
@media (max-width: 768px) {
    .navbar {
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        padding: 70px 20px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
    }

    .logo-img {
        height: 55px;
    }

    .animated-button span {
        font-size: 12px;
    }

    .nav-links {
        display: none;
    }

    .hamburger-menu {
        display: block;
    }

    .mobile-menu.active {
        display: block;
    }
}

/* Media Query for larger screens */
@media (min-width: 1024px) {
    .logo-img {
        height: 60px;
    }

    .animated-button {
        width: 200px;
    }

    .hamburger-menu {
        display: none;
    }

    .nav-links {
        display: flex;
    }
}
</style>
