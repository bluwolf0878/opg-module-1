import { updateMainContent } from './main.js'; // Import af funktionen, der opdaterer main

export function createNavigation() {
    const nav = document.querySelector('#navigation');
    
    // Opret inputfelt
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Indtast tekst';

    // Opret send-knap
    const button = document.createElement('button');
    button.textContent = 'Send';

    // Tilføj funktionalitet til knappen
    button.addEventListener('click', () => {
        const inputValue = input.value;
        updateMainContent(inputValue);  // Opdater main med input værdien
        input.value = ''; // Tøm inputfeltet efter afsendelse
    });

    // Tilføj input og knap til navigation
    nav.appendChild(input);
    nav.appendChild(button);
}
