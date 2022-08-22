module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/jad/'
    : '/',
    pwa: {
      name: 'jad',
      themeColor: '#ffffff',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      manifestOptions: {
        icons: [
          {src: "./img/icons/icon-192x192.png",sizes: "192x192",type: "image/png",},
          { src: "./img/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
          { src: "./img/icons/icon-192x192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
          { src: "./img/icons/icon-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      ]
      },
      iconPaths: {
        faviconSVG: 'img/icons/favicon.svg',
        favicon32: 'img/icons/favicon.svg',
        favicon16: 'img/icons/favicon.svg',
        appleTouchIcon: 'img/icons/icon-152x152.png',
        maskIcon: 'img/icons/icon-512x512.png',
        msTileImage: 'img/icons/icon-144x144.png'
      }
    }
}
