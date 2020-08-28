# Annual Deforestation Chart

## Required Setup

For development, the two config constants API_BASE_URI and DEV_SERVER_PORT must be specified in webpack.dev.config.js.

The two constants default to:

```javascript
const DEV_SERVER_PORT = 3001;
const API_BASE_URI = `http://localhost:3001/json';
```

To reconfigure these constants, set up a configstore (https://www.npmjs.com/package/configstore) using packageName "garanca", or modify webpack.dev.config.js.
