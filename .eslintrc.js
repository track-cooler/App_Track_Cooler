module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
    'import/resolver': {
      'babeil-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
  plugins: ['react', 'react-hooks'],

  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
