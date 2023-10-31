import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/types";
import { buildServer } from "./buildServer";

//тип принимаемых параметров описан в build/types/types.ts
export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;
    return {
        //proudction | development | none
        mode,
        //entry point для src
        entry: paths.entry,

        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers(),
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildServer(options) : undefined,
    };
}