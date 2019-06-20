import { IConfig } from 'umi-types';
// @ts-ignore
import path from 'path';
const config: IConfig = {
	treeShaking: true,
	plugins: [
		// ref: https://umijs.org/plugin/umi-plugin-react.html
		[
			'umi-plugin-react',
			{
				antd: false,
				dva: true,
				dynamicImport: { webpackChunkName: true },
				title: 'think-umi',
				dll: false,
				locale: {
					enable: true,
					default: 'en-US'
				},
				routes: {
					exclude: [/server\//, /models\//, /services\//, /model\.(t|j)sx?$/, /service\.(t|j)sx?$/, /components\//]
				}
			}
		]
	],
	chainWebpack: (config: any) => {
		const ts_loader = path.join(__dirname, '../node_modules/af-webpack/node_modules/ts-loader');
		config.module
			.rule('ts')
			.test(/\.tsx?$/)
			.use('ts-loader')
			.loader(ts_loader)
			.options({
				transpileOnly: true,
				configFile: path.join(__dirname, '../tsconfig.json')
			});
	}
};

export default config;
