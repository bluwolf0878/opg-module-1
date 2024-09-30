export default function createNavigation() {
    const nav = document.querySelector('#navigation');  // Vælg navigation-elementet
    const ul = document.createElement('ul');

    const links = [
        { text: 'MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules' },
        { text: 'W3Schools', url: 'https://www.w3schools.com/js/js_modules.asp' }
    ];

    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = link.text;
        a.href = link.url;
        a.target = "_blank";  // Åbn linket i en ny fane
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);  // Tilføj <ul> med links til navigation
}
