module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === "development" ? "" : "/shopping/",
    outputDir: "shopping",
    assetsDir: "static",
};
