export default function createMainContent() {
    const main = document.querySelector('#main');  // Vælg main-elementet

    // Opret en kort beskrivelse af moduler
    const description = document.createElement('p');
    description.textContent = "Et JavaScript-modul er en genanvendelig kodeenhed, som eksporteres og importeres i andre filer.";

    // Opret en video-iframe
    const video = document.createElement('iframe');
    video.width = "560";
    video.height = "315";
    video.src = "https://www.youtube.com/embed/qgRUr-YUk1Q";
    video.frameBorder = "0";
    video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    video.allowFullscreen = true;

    // Tilføj beskrivelse og video til main
    main.appendChild(description);
    main.appendChild(video);
}
