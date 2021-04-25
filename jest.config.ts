// jest.config.js
//import { defaults } from 'jest';

export default {
  //moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  "transform": {
    '^.+\\.tsx?$': 'ts-jest',
  },
  "transformIgnorePatterns": [
    "node_modules/(?!(babel-jest)/)"
  ],
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "/jspm_packages"
  ],
  "unmockedModulePathPatterns": [
    "./node_modules/react"
  ],
  "moduleNameMapper": {
    "^.+\\.(css|less|sass|scss)?$": 'identity-obj-proxy'
  }
};