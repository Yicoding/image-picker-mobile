import { defineConfig } from 'dumi';

const publicPath =
  process.env.NODE_ENV === 'production'
    ? 'https://yicoding.github.io/image-picker-mobile/'
    : '/';

const manifestLink = `${publicPath}asset-manifest.json`;

//引入
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const prodGzipList = ['js', 'css'];

//判断只有在生产模式才开启
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);

const links =
  process.env.NODE_ENV === 'production'
    ? [{ rel: 'manifest', href: manifestLink }]
    : [];

const umiConfig = {
  title: 'image-picker-mobile',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs',
  // more config: https://d.umijs.org/config
  mode: 'doc',
  publicPath,
  manifest: {
    publicPath,
  },
  history: {
    type: 'hash',
  },
  links,
  hash: true,
  extraBabelPlugins: [['import', { libraryName: 'antd-mobile', style: true }]],
};

if (process.env.NODE_ENV === 'production') {
  umiConfig.chunks = ['vendors', 'umi'];
  umiConfig.chainWebpack = function(config, { webpack }) {
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /node_modules/,
              chunks: 'all',
              name: 'vendors',
              priority: -10,
              enforce: true,
            },
          },
        },
      },
    });
    config.plugin('compression-webpack-plugin').use(
      new CompressionWebpackPlugin({
        // filename: 文件名称，这里我们不设置，让它保持和未压缩的文件同一个名称
        algorithm: 'gzip', // 指定生成gzip格式
        test: new RegExp('\\.(' + prodGzipList.join('|') + ')$'), // 匹配哪些格式文件需要压缩
        threshold: 10240, //对超过10k的数据进行压缩
        minRatio: 0.6, // 压缩比例，值为0 ~ 1
      }),
    );
  };
  umiConfig.extraBabelPlugins.push([IS_PROD ? 'transform-remove-console' : '']);
}

export default defineConfig(umiConfig);
