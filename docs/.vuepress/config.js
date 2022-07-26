const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "blog-j",
  description: 'vdoing博客主题模板',
  base: '/blog-j/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,

  // vssue 评论插件
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "87c2c6b48fb225f06243",
        clientSecret: "dfa1bf16c3d4812aa0d5a0cd12413d818866e386",
        owner: "lililemon",
        repo: "blog-j",
      },
    ],
    // 增强 markdown
    [
      "md-enhance", {
        // 启用 TeX 支持
        tex: true,
        // Enable mermaid
        mermaid: true,
        // 启用流程图
        flowchart: true,
      },
    ],
  ],
}