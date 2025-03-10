const config = {
  plugins: [
    '@tailwindcss/postcss',
    'postcss-import',
    [
      'postcss-simple-vars',
      {
        variables: {
          pageMaxWidth: '42.5rem',
        },
      },
    ],
    process.env.TARGET_BROWSER
      ? require('@tailwindcss/nesting')(require('postcss-nesting'))
      : '@tailwindcss/nesting',
    'tailwindcss',
    'postcss-focus-visible',
    'postcss-custom-media',
    'postcss-mixins',
    'postcss-100vh-fix',
    process.env.TARGET_BROWSER
      ? require('postcss-rem-to-responsive-pixel')({
          rootValue: 16,
          propList: ['*'],
        })
      : ['postcss-rem-to-responsive-pixel', { rootValue: 16, propList: ['*'] }],
    'autoprefixer',
  ],
};

export default config;
