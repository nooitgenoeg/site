// Build CSS

var fs = require('fs')
var path = require('path')
var cssnext = require('cssnext')
var autoform = require('autoform')
var autotable = require('autotable')
var autogrid = require('autogrid')
var colors = require('colors.css')


var styles = []

// styles.push(autoform({
//   borderColor: colors.gray,
// }))

// styles.push(autotable({
//   headerFontSize: '14px',
//   paddingY: '8px',
//   borderColor: colors.gray,
// }))

styles.push(fs.readFileSync(path.join(__dirname, './base.css'), 'utf8'))
var css = cssnext(styles.join('\n'))
fs.writeFileSync(path.join(__dirname, '../css/static.css'), css)
