import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths } from './config/build/types/types';
import path from 'path';
import { BuildEnv } from './config/build/types/types';

//передаём env переменные из package.json скрипта
export default (env: BuildEnv) => {
  //пути
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const mode = env.mode || 'development';
  //isDev true | false
  const isDev = mode === 'development';
  const PORT = env.port || 3000;
  // функция buildWebpack возвращает динамическую конфигурацию в зависимости от переданных ей параметров mode и paths 
  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  })
  return config;
}
