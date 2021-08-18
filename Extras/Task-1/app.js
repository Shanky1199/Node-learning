const fs = require('fs')

var read = fs.createReadStream(__dirname+'/father.txt',{encoding:'utf8', highWaterMark: 16 * 1024})

var write1 = fs.createWriteStream(__dirname+'/son.txt')
var write2 = fs.createWriteStream(__dirname+'/d.txt')

read.pipe(write1)
read.pipe(write2)
