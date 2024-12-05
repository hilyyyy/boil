const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/https://github.com/hilyyyy/liiyy.git/'  // 替换成你的仓库名
    : '/'
}
