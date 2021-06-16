// Import React to use inline JSX
import React from "react";
// Import our fields. More will be added in time
import { BoolField, ColorField, SliderField } from "@cirlos-sdk/components/settings-fields";
import SettingsExample from "../index"; 

export default function SettingsMenu({ settings, defaultSettings }) {
    // Return our settings menu
    return (
        /* We'll define a class name, in case we want to style the menus or define our own settings fields. In this case, we will not */
        <div className="SE_SettingsMenu">
            <BoolField title="Show toast on startup" value={settings.showToastOnStart} onChange={val => settings.showToastOnStart = val}/>
            <ColorField title="Toast color" value={settings.toastColor} defaultValue={defaultSettings.toastColor} onChange={val => settings.toastColor = val}/>
            <SliderField title="Toast lifetime" value={settings.toastLifetime} onChange={val => settings.toastLifetime = val}
                         step={1} minValue={3} maxValue={15}/>
            
            <div className="SE_Button" style={{
                backgroundColor: "var(--primary-color)",
                borderRadius: 5,
                padding: 10,
                textAlign: "center",
                marginTop: 20,
                cursor: "pointer"
            }} onClick={() => SettingsExample.instance.showToast()}>Show Toast</div>
        </div>
    );
    
    // IMPORTANT NOTE
    // There is no way to or need to save the settings after they're changed
    // Settings are automatically saved when the user closes your settings menu
}