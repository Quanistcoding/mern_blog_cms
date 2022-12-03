const config = require('config');

export default () => {
  if (!config.get('db_password')) {
    throw new Error('FATAL ERROR: db_password is not defined.');
  }
}