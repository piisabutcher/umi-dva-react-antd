// 主要用于配置一些代理，主题，alias，插件等
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'umi',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}
