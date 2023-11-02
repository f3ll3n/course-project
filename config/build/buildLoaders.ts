import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/types";
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[]{

    return [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          options.isDev ? MiniCssExtractPlugin.loader : 'style-loader',
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              modules: true,
            }
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
}