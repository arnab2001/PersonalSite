const config = {
  agentRules: false,
  devIndicators: false,
  async redirects() {
    return [
      { source: '/works/:path*', destination: '/#projects', permanent: true },
      { source: '/hire-me', destination: '/#contact', permanent: true }
    ]
  }
}

export default config
