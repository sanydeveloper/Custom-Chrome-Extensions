// const background = document.getElementById('background');
// const music = document.getElementById('music');

// // Log elements to ensure they're found
// console.log("Background Element:", background);
// console.log("Music Element:", music);

// // Array of assets
// const assets = [
//     { image: 'images/beach.jpg', music: 'music/ocean-waves-112906.mp3' },
//     { image: 'images/mount.jpg', music: 'music/nature-216798.mp3' },
//     { image: 'images/mountain.jpg', music: 'music/peaceful-piano-loop-6903.mp3' },
//     { image: 'images/rain.jpg', music: 'music/rain-sound-188158.mp3' }
// ];

// // Select a random asset
// const randomAsset = assets[Math.floor(Math.random() * assets.length)];

// // Log the selected asset
// console.log("Selected Asset:", randomAsset);

// // Apply background image
// if (background) {
//     background.style.backgroundImage = `url(${randomAsset.image})`;
//     console.log("Background Image Set:", randomAsset.image);
// } else {
//     console.error("Background element not found.");
// }

// // Set music source
// if (music) {
//     music.src = randomAsset.music;
//     console.log("Music Source Set:", randomAsset.music);
// } else {
//     console.error("Music element not found.");
// }


const background = document.getElementById('background');
const audio = new Audio(); // Create a new Audio object

// Array of background image paths paired with their corresponding music files
const assets = [
    { image: 'images/beach.jpg', music: 'music/ocean-waves-112906.mp3' },
    { image: 'images/mount.jpg', music: 'music/nature-216798.mp3' },
    { image: 'images/mountain.jpg', music: 'music/peaceful-piano-loop-6903.mp3' },
    { image: 'images/rain.jpg', music: 'music/rain-sound-188158.mp3' }
];

// Select a random asset
const randomAsset = assets[Math.floor(Math.random() * assets.length)];

// Apply the background image
if (background) {
    background.style.backgroundImage = `url(${randomAsset.image})`;
    console.log("Background Image Set:", randomAsset.image);
} else {
    console.error("Background element not found.");
}

// Play the corresponding music
if (audio) {
    audio.src = randomAsset.music; // Set the audio source
    audio.loop = true; // Optional: Loop the audio
    audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
    });
    console.log("Playing music:", randomAsset.music);
} else {
    console.error("Audio element not found.");
}
