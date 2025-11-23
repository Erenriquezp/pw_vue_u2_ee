const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: { // Nuevo puerto a desplegarse
    client: {
      webSocketURL: {
        protocol: "wss",
      },
    },
    port: 8081,
    host: "0.0.0.0"
  }
})