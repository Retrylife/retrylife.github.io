/* Handle fade-in/out of title section */
document.getElementById("section-title").classList.add("hidden");

addListenerForPageReady(() => {
    document.getElementById("section-title").classList.remove("hidden");
    document.getElementById("section-title").classList.add("appear");
});

/* Load assets */

let profile_image = document.getElementById("profile-pic");

// Set profile src
profile_image.src = profile_image.dataset.url;

// Set up asset loading for the image
addLoadRequirement((onceLoaded) => {
    profile_image.decode().then(() => {
        onceLoaded();
    });
});