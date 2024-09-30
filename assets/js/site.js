// du må kun bruge importerede moduler her...
import  createHeader from './header.js';
import  createNavigation from './nav.js';
import  createMainContent from './main.js';
import  createFooter from './footer.js';

document.addEventListener("DOMContentLoaded", () => {
    createHeader();        // Generer header-indhold
    createNavigation();    // Generer navigation-indhold
    createMainContent();   // Generer main-indhold
    createFooter();        // Generer footer-indhold
});
