const path = require("path");

module.exports = env => {
    return {
        mode: "production",
        entry: path.resolve(__dirname, "src", env.plugin),
        output: {
            library: "plugin",
            filename: env.plugin + ".js",
            path: path.resolve(__dirname, env.release ? "release" : "output")
        },
        module: {
            rules: [{
                test: /\.css$/i,
                use: ["css-loader"]
            }, {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            }, {
                test: /\.m?(j|t)sx?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "@sucrase/webpack-loader",
                    options: {
                        transforms: ["jsx", "typescript"]
                    }
                }
            }]
        },
        externals: [{
            "react": "global React",
            "react-dom": "global ReactDOM",
            "@cirlos-sdk/plugin": "global Plugin",
            "@cirlos-sdk/font-awesome-icons": ["global PluginApi", "FontAwesomeIcons"],
            "@cirlos-sdk/api": "global PluginApi",
            "@cirlos-sdk/api/app": ["global PluginApi", "App"],
            "@cirlos-sdk/api/banner-notifications": ["global PluginApi", "BannerNotifications"],
            "@cirlos-sdk/api/toasts": ["global PluginApi", "Toasts"],
            "@cirlos-sdk/api/modals": ["global PluginApi", "Modals"],
            "@cirlos-sdk/api/client": ["global PluginApi", "Client"],
            "@cirlos-sdk/classes": ["global PluginApi", "Classes"],
            "@cirlos-sdk/components": "assign Object.keys(window.PluginApi.Components).reduce((items, item, _, target)  => (items[item] = window.PluginApi.Components[item].default, items), {})",
            "@cirlos-sdk/components/settings-fields": ["global PluginApi", "Components", "SettingsFields"],
            "@cirlos-sdk/components/app-main": ["global PluginApi", "Components", "AppMain"],
            "@cirlos-sdk/components/messages": ["global PluginApi", "Components", "MessageComponent"],
            "@cirlos-sdk/components/chat-auto-complete": ["global PluginApi", "Components", "ChatAutoComplete"],
            "@cirlos-sdk/components/chat-markdown-menu": ["global PluginApi", "Components", "ChatMarkdownMenu"],
            "@cirlos-sdk/components/context-menus": "assign Object.keys(window.PluginApi.Components.ContextMenus).reduce((items, item, _, target) => (items[item] = window.PluginApi.Components.ContextMenus[item].default, items), {})",
            "@cirlos-sdk/components/modals": "assign Object.keys(window.PluginApi.Components.Modals).reduce((items, item, _, target) => (items[item] = window.PluginApi.Components.Modals[item].default, items), {})",
        }]
    };
};