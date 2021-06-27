module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    './setup/beforeTest.js',
    'jest-allure/dist/setup'
  ],
  testMatch: [
    '/__tests__/.*\\.(ts|tsx|js)',
    '**/?(*.)(spec|test).js?(x)'
  ],
  setupFiles: ['./setup/setup.js'],
  reporters: [
    ['jest-html-reporters', {
      filename: 'TestReport.html',
      pageTitle: 'Fashion-Cloud-UI Report',
      hideIcon: true,
      customInfos: [
        { title: 'Environment', value: 'Local' }
      ]
    }]
  ]
}
