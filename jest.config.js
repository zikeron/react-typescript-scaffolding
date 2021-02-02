module.exports = {
  verbose: true,
  transform: {
    '^.+\\.(js|jsx|tsx)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$':
        '<rootDir>/node_modules/jest-css-modules-transform',
  },
  moduleFileExtensions: ['js', 'jsx', 'tsx'],
};
