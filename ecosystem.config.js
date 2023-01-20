module.exports = {
  apps: [
    {
      name: 'loomex-live-manager',
      script: 'dist/src/main.js',
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
