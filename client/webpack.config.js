const path = require('path');
const args = require('minimist')(process.argv.slice(2));
// Set the correct environment
const mode = args.mode || 'development';
const release = !!args.release;
console.log(args);
process.env.REACT_WEBPACK_ENV = mode;
const allowedEnvs = ['development', 'production'];
function buildConfig(wantedEnv) {
  const isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1;
  const validEnv = isValid ? wantedEnv : 'development';
  const config = require(path.resolve(__dirname, `webpack.config.${validEnv}`));
  if (release) {
    config.output.path = path.resolve(__dirname, '../dist/wwwroot');
  }
  return config;
}

module.exports = buildConfig(mode);
