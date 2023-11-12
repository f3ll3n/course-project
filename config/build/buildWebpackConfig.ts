import type webpack from 'webpack';
import {buildPlugins} from './buildPlugins';
import {buildLoaders} from './buildLoaders';
import {buildResolvers} from './buildResolvers';
import {type BuildOptions} from './types/types';
import {buildServer} from './buildServer';

// Тип принимаемых параметров описан в build/types/types.ts
export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const {paths, mode, isDev} = options;
	return {
		// Proudction | development | none
		mode,
		// Entry point для src
		entry: paths.entry,

		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		output: {
			path: paths.build,
			filename: '[name].[contenthash].js',
			clean: true,
		},
		plugins: buildPlugins(options),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildServer(options) : undefined,
		performance: {
			hints: false,
			maxEntrypointSize: 512000,
			maxAssetSize: 512000,
		},
	};
}
