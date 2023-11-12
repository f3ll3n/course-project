/* eslint-disable i18next/no-literal-string */
import type webpack from 'webpack';
import {buildWebpackConfig} from './config/build/buildWebpackConfig';
import {type BuildPaths} from './config/build/types/types';
import path from 'path';
import {type BuildEnv} from './config/build/types/types';

// Передаём env переменные из package.json скрипта
export default (env: BuildEnv) => {
	// Пути
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'dist'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	};

	const mode = env.mode || 'development';
	// IsDev true | false
	const isDev = mode === 'development';
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const PORT = env.port || 3000;
	// Функция buildWebpack возвращает динамическую конфигурацию в зависимости от переданных ей параметров mode и paths
	const config: webpack.Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
	});
	return config;
};
