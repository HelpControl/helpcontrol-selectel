/**
 * NOTE: Proxy Server
 * выполняет перенаправление запросов на внешний URL selectel
 * Цель: решения проблемы отсуствия поддержки CORS
 */
import * as express from 'express';
import * as cors from 'cors';
import * as axios from 'axios';
import { platform, hostname, totalmem, type } from 'os';
import { environment as env } from './environments/environment';

const { DEV_X_TOKEN, SERVER_URL } = env;

const app = express();

app.use(cors());

app.get('/helth', (req, res) => {
  res.send({
    message: 'Welcome to reverse-proxy-api!',
    timestamp: Date.now(),
    os: platform(),
    hostname: hostname(),
    totalmem: totalmem(),
    type: type(),
  });
});

app.get(':endpoint([\\/\\w\\.-]*)', (req, res) => {
  const endpoint = SERVER_URL + req.params.endpoint;
  const headers = req.headers;
  const config = {
    headers: {
      'X-Token': headers['X-Token'] || DEV_X_TOKEN,
    },
  };

  axios
    .get(endpoint, config)
    .then((response) => {
      // if()
      res.json(response.data);
    })
    .catch((error) => res.json(error));
  // res.send({ message: 'Welcome to reverse-proxy-api!' });
});

const port = process.env.PORT || 3334;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/v1`);
});
server.on('error', console.error);
