// Import React to use inline JSX and create components
import React from "react";

// Import our SCSS style sheet
import "./exampleModal.scss";

// Import the font awesome icon component and the icon we want to use
import { FontAwesomeIcon } from "@cirlos-sdk/components";
import { faSmileBeam } from "@cirlos-sdk/font-awesome-icons";

// Here's an example of creating a react component in another file
// You can also use functional components or any other means of creating components
export default class ExampleModal extends React.Component {
    render() {
        // If you're having issues with intellisense when writing inline JSX, try writing the component name outside of jsx, then delete it
        // Example - FontAwesomeIcon
        // Example - InlineUserItem

        // It's good practice to ensure your class names or top-most class names are unique, but isn't necessary
        // For example, prepending ExamplePlugin_, EP_, etc
        return (
            <div className="EP_ExampleModal">
                {/* For a list of all font awesome icons available, visit https://fontawesome.com/v5.15/icons?d=gallery&p=2&s=solid&m=free */}
                <FontAwesomeIcon className="SmileEmoji" icon={faSmileBeam}/>
                
                <div className="Text">
                    Here's a working example of creating a custom modal, styling it with SCSS, and rendering it with React!
                </div>
            </div>
        );
    }
}