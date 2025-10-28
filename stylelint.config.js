module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    // Disable overly strict rules
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'custom-property-pattern': null,
    'alpha-value-notation': null,
    'color-function-notation': null,
    'length-zero-no-unit': null,
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    'selector-pseudo-element-colon-notation': null,
    'declaration-block-single-line-max-declarations': null,
    'shorthand-property-no-redundant-values': null,
    'at-rule-empty-line-before': null,
    'media-feature-range-notation': null,
    'no-duplicate-selectors': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'color-hex-length': null,
    'selector-not-notation': null
  },
  ignoreFiles: [
    '**/node_modules/**',
    'public/**',
    'themes/**'  // Ignore vendor theme CSS
  ]
};
