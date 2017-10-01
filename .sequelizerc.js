const path = require('path');

module.exports = {
  "config": path.resolve('./api/config', 'config.json'),
  "models-path": path.resolve('./api/models'),
  "seeders-path": path.resolve('./api/seeders'),
  "migrations-path": path.resolve('./api/migrations')
};