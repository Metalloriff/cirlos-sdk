// Import the config file
import config from "./config.json";

// Import the base plugin class
import Plugin from "@cirlos-sdk/plugin";

// Example built-in module imports
// To view the full list of modules, you can view typings.d.ts file in this project
import Toasts from "@cirlos-sdk/api/toasts";
import { openModal } from "@cirlos-sdk/api/modals";

// Import our example modal component
import ExampleModal from "./components/exampleModal";

// Export the config in case the plugin fails to load
export { config };

export default class ExamplePlugin extends Plugin {
    // Set the config object to the imported one, this is mandatory
    config = config;
    
    start() {
        // Display a green-tinted toast to let us know our plugin has successfully started
        Toasts.showToast("ExamplePlugin started", "Success");
        
        // Display our example modal component
        // Also an example of inline JSX working
        openModal(<ExampleModal/>);
    }

    stop() {
        // Display a red-tinted toast to let us know our plugin has successfully stopped
        Toasts.showToast("ExamplePlugin stopped", "Failure");
    }
}