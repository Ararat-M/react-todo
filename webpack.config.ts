import path from "path";
import { type Configuration } from "webpack";
import "webpack-dev-server";
import buildDevServer from "./config/build/buildDevServer";
import buildLoaders from "./config/build/buildLoaders";
import buildPlugins from "./config/build/buildPlugins";

export default (env: Record<string, any>): Configuration => {
    const mode = env.mode;
    const isDev = mode || "development";

    const config: Configuration = {
        mode: mode,
        entry: path.resolve(__dirname, "src", "index.tsx"),
        output: {
            filename: "[name].[hash].js",
            path: path.resolve(__dirname, "dist"),
            clean: true
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        module: {
            rules: buildLoaders(isDev)
        },
        plugins: buildPlugins(isDev),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer() : undefined
    };

    return config
}