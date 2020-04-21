// Handle starting the pre-load animation
var page_preloader = new Preloader();
page_preloader.show(true);

/* Functions for page loading */
let _loadRequirements = [];
let _reqsCompleted = 0;
let _readyStateListeners = [];

// Wait a tiny amount of time to allow the arrays to be filled up
setTimeout(() => {

    console.log("preforming asset loading");

    if (_loadRequirements.length == 0) {
        // Hide the loader
        page_preloader.hide(false);

        // Notify all listeners
        _readyStateListeners.forEach((callback) => {
            callback();
        });

    } else {

        // Check every load requirement
        _loadRequirements.forEach((req) => {
            // Run the req & handle loading
            req(() => {

                // Incr the number of successfully loaded reqs
                _reqsCompleted += 1;

                // If this is the last req, hide the loader
                if (_reqsCompleted == _loadRequirements.length) {

                    // Hide the loader
                    page_preloader.hide(false);

                    // Notify all listeners
                    _readyStateListeners.forEach((callback) => {
                        callback();
                    })
                }
            })

        });
    }

}, 800);

/* Functions for others to use */
function addListenerForPageReady(callback) {
    _readyStateListeners.push(callback);
}
function addLoadRequirement(action) {
    _loadRequirements.push(action);
}