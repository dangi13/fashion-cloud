module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    './setup/beforeTest.js'  ],
  testMatch: [
    '/__tests__/.*\\.(ts|tsx|js)',
    '**/?(*.)(spec|test).js?(x)'
  ],
  setupFiles: ['./setup/setup.js'],
  reporters: [
    ['jest-html-reporters', {
      filename: 'TestReport.html',
      pageTitle: 'Fashion-Cloud-API Report',
      hideIcon: true,
      customInfos: [
        { title: 'Environment', value: 'Local' }
      ]
    }]
  ]
}
