const mix = require("laravel-mix");
const path = require("path");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('public')
    .webpackConfig({
        resolve: {
            alias: {
                "@themeConfig": path.resolve(__dirname, "theme.config.js"),
                "@/assets": path.resolve(__dirname, "resources/assets/"),
                "@/sass": path.resolve(__dirname, "resources/sass/"),
                "@": path.resolve(__dirname, "resources/js/"),
            },
        },
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        {
                            loader: "sass-loader",
                            options: {
                                sassOptions: {
                                    includePaths: [
                                        "node_modules",
                                        "resources/sass",
                                    ],
                                },
                            },
                        },
                    ],
                },
            ],
        },
        output: {
            chunkFilename: "js/chunks/[name].[chunkhash].js",
        },
    })
    .override((webpackConfig) => {
        webpackConfig.module.rules.forEach((rule) => {
            if (
                rule.test.toString() ===
                "/(\\.(png|jpe?g|gif|webp|avif)$|^((?!font).)*\\.svg$)/"
            ) {
                if (Array.isArray(rule.use)) {
                    rule.use.forEach((ruleUse) => {
                        ruleUse.options.esModule = false;
                        ruleUse.options.name =
                            "images/[path][name]-[hash].[ext]";
                        ruleUse.options.context =
                            "resources/assets";
                    });
                }
            }
        });
    })
    .js("resources/js/main.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .vue({version: 3});
