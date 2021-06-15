# Cirlos SDK

## The official library for creating Cirlos addons.
### Create plugins using JavaScript and JSX or TypeScript and TSX
### Create themes and style plugins using CSS, SASS, or SCSS

# Getting started
### First download the package, and install its dependencies
    npm i

### Then try out the example plugin
    npm start --plugin=ExamplePlugin

### You should see an "output" folder has appeared; we need to set our SDK output path to this in the Cirlos app `config.json`
### Ensure Cirlos is closed, and navigate to `%AppData%/Cirlos` and open `config.json`
### Under `"sdk"`, you should see `"enabled"` and `"sdkOutputPath"`
### Set `"enabled"` to `true`, and `"sdkOutputPath"` to your "output" folder from before
### Now open Cirlos, and a toast should appear that says `ExamplePlugin started`
### You're all set to start coding! Feel free to read all of the examples in `src` to get a grasp of the basics

# Building your plugin
### In order to build your plugin, simply run `npm run build --plugin=YourPluginName`
### This will build your plugin to a `release` folder, and if all is set up correctly, Cirlos should open a prompt for publishing your addon


######This library and page is a work in progress, check back later for more