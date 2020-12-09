/* The code in src/index.js, but unminified and ES6-ed */

const informing = {
  agent: () => (informing.environment() === "browser" ? navigator.userAgent : null),
  argv: () => (informing.environment() === "node" ? require("process").argv.slice(2) : null),
  baseURL: () => (informing.environment() === "browser" ? location.origin : null),
  day: () => new Date().getDate(),
  dayOfWeek: (n = !0) => (n ? ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()] : new Date().getMonth()),
  directory: () => (informing.environment() === "node" ? __dirname : null),
  environment: () => (typeof window === "undefined" ? "node" : "browser"),
  file: () => (informing.environment() === "node" ? __filename : null),
  hash: () => (informing.environment() === "browser" ? location.hash : null),
  host: () => (informing.environment() === "browser" ? location.host : null),
  hostname: () => (informing.environment() === "browser" ? location.hostname : null),
  hour: () => new Date().getHours(),
  millisecond: () => new Date().getMilliseconds(),
  minute: () => new Date().getMinutes(),
  month: (n = !1) => (!n ? ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][new Date().getMonth()] : new Date().getMonth()),
  pathname: () => (informing.environment() === "browser" ? location.pathname : null),
  port: () => (informing.environment() === "browser" ? location.port : null),
  protocol: () => (informing.environment() === "browser" ? location.protocol : null),
  query: () => (informing.environment() === "browser" ? location.search : null),
  second: () => new Date().getSeconds(),
  URL: () => (informing.environment() === "browser" ? location.href : null),
  username: () => (informing.environment() === "node" ? require("os").userInfo().username : null),
};

if (informing.environment === "node") module.exports = exports = informing;
