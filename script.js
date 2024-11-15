function loveAccepted() {
    // Redirect to a new page after clicking "Yes"
    window.location.href = "index.html";
}

function moveButton() {
    // Get the button element
    const button = document.getElementById('noBtn');
    
    // Generate random coordinates
    const x = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));

    // Apply the new position to the button
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
