import React from "react";
import Plugin from "@cirlos-sdk/plugin";
import SettingsMenu from "./components/settings";
import Toasts from "@cirlos-sdk/api/toasts";
import { TenorClient } from "@cirlos-sdk/classes";
import config from "./config.json";

export { config };

export default class SettingsExample extends Plugin {
    // Define our default settings object
    // This is necessary to prevent issues with undefined properties
    defaultSettings = {
        showToastOnStart: true, // A boolean, whether or not to display a toast on startup
        toastColor: "#ff6666", // A color string, the color of the toast to display
        toastLifetime: 5 // A time number, the amount of time in seconds that toast will last
    };
    
    config = config;
    
    renderSettingsMenu() {
        // Render and return our settings component
        // Make sure you pass our settings object. Alternatively you can import it from the settings class
        return <SettingsMenu settings={this.settings} defaultSettings={this.defaultSettings}/>;
    }
    
    start() {
        // De-structure our settings object for cleaner code
        // This is not necessary, just looks nice
        const { showToastOnStart } = this.settings;
        
        // If the show setting is enabled, display our toast
        if (showToastOnStart)
            this.showToast();
    }
    
    showToast() {
        const { toastColor, toastLifetime } = this.settings;
        
        // Fetch a cringy gif from the tenor client
        TenorClient.search("wave", { limit: 10 }).then(({ results }) =>
            // Display our toast
            Toasts.showToast(<img src={results[Math.floor(Math.random() * results.length)].media[0]["tinygif"].url} alt="gif" height={200}/>,
                null, toastLifetime, { color: toastColor }));
    }
}