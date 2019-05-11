module.exports = {
  presets: [
    ['@vue/app', {
      useBuiltIns: false,
      polyfills: [
        'es6.object.assign'
      ]
    }],
  ],
};
