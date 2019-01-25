// Variables
const path = require("path");
// Export new modules
module.exports = (baseConfig, env, defaultConfig) => {
    // Alias
    Object.assign(defaultConfig.resolve.alias, {
        '@': path.join(__dirname, '../components')
    });
    // Rules
    defaultConfig.module.rules.push({
        test: /\.(sa|sc|c)ss$/,
        use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
        ]
    });
    // Return new configurations
    return defaultConfig;
};
