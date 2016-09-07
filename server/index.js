import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
// import cors from'cors';

import webpack from 'webpack';
import webpackMiddleware from  'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.js';

const compiler = webpack(webpackConfig);
const host = process.env.HOST || 'localhost';
const port = (Number(process.env.PORT) + 1) || 8555;

let app = express();

app.use(bodyParser.json());

// app.use(cors());

// app.use(webpackMiddleware(compiler, {
//   contentBase: 'http://' + host + ':' + port,
//   quiet: true,
//   noInfo: true,
//   hot: true,
//   inline: true,
//   lazy: false,
//   publicPath: webpackConfig.output.publicPath,
//   headers: {
//     'Access-Control-Allow-Origin': '*'
//   },
//   stats: {colors: true}
// }));

app.use(webpackMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))

app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

// app.use('/*', function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
//     next();
// });

app.listen(port, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('development server listening on port %s', port);
  }
});