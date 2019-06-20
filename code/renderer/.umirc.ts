import { IConfig } from 'umi-types';
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
	]
};

export default config;
