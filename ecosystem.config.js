module.exports = {
  apps: [
    {
      name: 'nest-test',
      script: 'dist/main.js',
      instances: 4,
      exec_mode: 'cluster',
      wait_ready: true,
      listen_timeout: 5000,
      kill_timeout: 3000,
      env_develop: {},
      env_production: {},
    },
  ],
};
