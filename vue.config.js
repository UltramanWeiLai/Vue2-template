/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { defineConfig } = require('@vue/cli-service')

const resolve = dir => path.join(__dirname, dir)

// const publicPath = process.env.NODE_ENV === 'production' ? '/' : '/'
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('./src'))
  },
  devServer: {
    port: 8100,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})
