// du må kun bruge importerede moduler her...
import { createHeader } from './header.js';
import { createNavigation } from './nav.js';
import { updateMainContent } from './main.js';

document.addEventListener("DOMContentLoaded", () => {
    createHeader();        // Generer header-indhold
    createNavigation();    // Generer navigation med input og knap
    updateMainContent('Velkommen! Indtast noget tekst ovenfor.'); // Initial main-content tekst
});

