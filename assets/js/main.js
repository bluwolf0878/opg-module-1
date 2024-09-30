export function updateMainContent(text) {
    const main = document.querySelector('#main');

    // Ryd tidligere indhold
    main.innerHTML = '';

    // Opret et p-element med den nye tekst
    const paragraph = document.createElement('p');
    paragraph.textContent = text;

    // Tilføj p-elementet til main
    main.appendChild(paragraph);

    // Video
    const video = document.createElement('iframe');
    video.width = "560";
    video.height = "315";
    video.src = "https://www.youtube.com/embed/qgRUr-YUk1Q";
    video.frameBorder = "0";
    video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    video.allowFullscreen = true;
    
    main.appendChild(video);
}
