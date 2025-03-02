module.exports = { //6
  extends: [
    'eslint-config-airbnb-base',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
