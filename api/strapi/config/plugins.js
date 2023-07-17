module.exports = () => ({
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: false,
      defaultLimit: 100,
      maxLimit: 200,
      apolloServer: {
        tracing: true,
      },
    }
  }
})
