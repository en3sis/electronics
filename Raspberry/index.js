const express = require('express')
const app = express()
const path = require('path');
const { port, enableUI } = require('./config.json')

/* Modules */
const video = require('./modules/motion-video-recorder')

video.exec()

app.get('/', (req, res) => {
  enableUI
    ? res.sendFile(path.join(__dirname + '/src/index.html'))
    : res.send({
      enableUI: enableUI,
      msg: 'Check config.json for more information'
    })
})

app.listen(port, () => {
  console.log(`🚀 Server started at http://localhost:${port}`);
})
