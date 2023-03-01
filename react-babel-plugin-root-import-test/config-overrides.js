const { override, addBabelPlugins } = require("customize-cra");

module.exports = override(
    addBabelPlugins([
        "babel-plugin-root-import",
        {
            root: __dirname,
            rootPathPrefix: "~/",
            rootPathSuffix: "./src",
        }
    ])
);
