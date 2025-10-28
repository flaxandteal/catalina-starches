module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'no-descending-specificity': null,
    'selector-class-pattern': '^[a-z0-9_\\-]+$'
  },
  ignoreFiles: ['**/node_modules/**', 'public/**']
};
