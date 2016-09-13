import express from 'express';
import path from 'path';
import bodyParser from 'body-parser'; 

import webpack from 'webpack';
import webpackMiddleware from  'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.js';

const host = process.env.HOST || 'localhost';
const port = (Number(process.env.PORT) + 1) || 8555;

let app = express();

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, { 
  hot:true,
  noInfo: true, 
  publicPath: webpackConfig.output.publicPath 
}));

app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.json());

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});



app.listen(port, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('Development server listening on port %s', port);
  }
});