var { exec } = require('child_process')
var fs = require('fs')
var path = require('path')

var args = process.argv.slice(2);
var uiCmd = 'dev'
if (args.length) {
    uiCmd = 'build';
}

var cmds = {
    'server': `${!fs.existsSync(path.resolve(__dirname, './server/node_modules')) && 'npm i && ' || ''} npm start`,
    'client': `${!fs.existsSync(path.resolve(__dirname, './client/node_modules')) && 'npm i && ' || ''} npm run ${uiCmd}`,
}
var workerProcesses = [];
if(uiCmd == 'dev'){
    console.log('Service is starting, ports [3000,9000] will be used, browser will open after service started, please wait about 10s...')
}
else {
    delete cmds.server
}
Object.keys(cmds).forEach((dir, i) => {
    var cmd = cmds[dir];
    cmd = `cd ${dir} && ${cmd}`
    workerProcesses[i] = exec(cmd, {})
    workerProcesses[i].stdout.pipe(process.stdout);
    workerProcesses[i].stderr.pipe(process.stderr);
});
