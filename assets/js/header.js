export default function createHeader() {
    const header = document.querySelector('#header');  // Vælg header-elementet
    const h1 = document.createElement('h1');
    h1.textContent = "Mine første moduler";  // Sæt header-tekst
    header.appendChild(h1);  // Tilføj <h1> til header
}
