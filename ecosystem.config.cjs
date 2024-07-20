module.exports = {
  apps: [
    {
      name: 'nodevonarx',
      script: './src/index.js',
      watch: true,
      interpreter: './node_modules/.bin/babel-node',
    },
  ],
};

