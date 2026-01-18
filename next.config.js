const { withTamagui } = require('@tamagui/next-plugin')
/** @type {import('next').NextConfig} */
/**
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
};
module.exports = nextConfig;
**/ 


module.exports = function (name, { defaultConfig }) {
  let config = {
    ...defaultConfig,
    // Add any custom Next.js config here if needed
  }

  const tamaguiPlugin = withTamagui({
    config: './tamagui.config.ts',
    components: ['tamagui'],
  })

  return {
    ...config,
    ...tamaguiPlugin(config),
  }
}


