# Annual Deforestation Chart

## Required Configuration

For development, two config constants API_BASE_URI and DEV_SERVER_PORT must be specified in webpack.dev.config.js.

The two constants default to:

```javascript
const DEV_SERVER_PORT = 3001;
const API_BASE_URI = 'http://localhost:3001/json';
```

To reconfigure these constants, set up a configstore [NPM Configstore](https://www.npmjs.com/package/configstore) using packageName "garanca", or modify webpack.dev.config.js.

## Client Specification

### Visual (Static) Features

1. single series using marker symbols connected by a line
2. subtle indication of missing values

### Interactive Features

This is a foundational chart with no interactive features.
