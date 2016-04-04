var app = require('app')
var BrowserWindeow = require('browser-window')

app.on('ready', function () {
  var mainWindow = new BrowserWindeow({
    width: 800,
    height: 600
  })
  mainWindow.loadUrl('file://'+ __dirname + '/index.html')
})
