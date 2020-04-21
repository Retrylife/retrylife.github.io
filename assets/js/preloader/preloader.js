/**
 * This file contains the code that powers the full-screen loading animation.
 * Multiple animations can be created in the same webpage, and toggled individually.
 * 
 * --- Usage ---
 * let myPreloader = new Preloader();
 * 
 * // Show the loader
 * myPreloader.show(true);
 * 
 * // load some stuff
 * // ...
 * 
 * // Fade out the animation
 * myPreloader.hide(false);
 * 
 * --- How it works ---
 * On creation, the Preloader injects some HTML into the webpage with a unique ID 
 * for the instance. Hiding and showing works by modifying the active classes for 
 * the loader. The "appear" and "disappear" classes will render their respective 
 * animations in _sass/ui/preloader/preloader.scss
 */

let _preloaderCount = 0;

/**
 * A fullscreen loading animation utility
 */
class Preloader {

    constructor() {

        // Add a preloader element to the page
        document.body.innerHTML += `<div id="preloader${_preloaderCount}" class="preloader hidden"><div class="spinner-border text-danger" role="status"></div></div>`;
        _preloaderCount += 1;

        // Get the element context for controlling
        this.element = document.getElementById(`preloader${_preloaderCount - 1}`);

        console.log(`[Preloader] Created preloader ${_preloaderCount - 1}`);

    }

    /**
     * Show the preloader
     * 
     * @param {Boolean} now Show without a fade-in
     */
    show(now) {

        // Wipe the modifier classes
        this.element.classList.remove("hidden");
        this.element.classList.remove("appear");
        this.element.classList.remove("disappear");

        // If we don't need the loader right now, give it a fadein property
        if (!now) {
            this.element.classList.add("appear");
        }

        console.log("[Preloader] Showing preloader");
    }

    /**
     * Hide the preloader
     * 
     * @param {Boolean} now Hide without a fade-out
     */
    hide(now) {

        // Wipe the modifier classes
        this.element.classList.remove("appear");

        // Make the animation fade out
        this.element.classList.add("disappear");

        // If we are hiding now, just hide, otherwise time the hide
        if (now) {
            this.element.classList.add("hidden");
        } else {
            setTimeout(() => {
                this.element.classList.add("hidden");
            }, 500);
        }

        console.log("[Preloader] Hiding preloader");
    }
}