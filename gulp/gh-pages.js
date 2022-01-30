const ghpages = require('gh-pages');
// const replace = require('replace-in-file');

// replace.sync({
//   files: 'release/docs/**/*.html',
//   from: /\/\/static/g,
//   to: '//test-static',
// });

ghpages.publish('storybook-static', function (err) {
  console.log(err);
});
