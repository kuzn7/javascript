module.exports = { //4
  extends: [
    'eslint-config-airbnb-base',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
