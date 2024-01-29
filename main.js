const crawlerConductor = require('./crawlerConductor');
const crawler = require('./crawler');
// REMOVED FOR NOW AND REPLACED BY REQUEST CONTENT COLLECTOR
// const RequestCollector = require('./collectors/RequestCollector');
const RequestContentCollector = require('./collectors/RequestContentCollector');
const APICallCollector = require('./collectors/APICallCollector');
const CookieCollector = require('./collectors/CookieCollector');
const TargetCollector = require('./collectors/TargetCollector');
const TraceCollector = require('./collectors/TraceCollector');
const ScreenshotCollector = require('./collectors/ScreenshotCollector');
const CMPCollector = require('./collectors/CMPCollector');

// reexport main pieces of code so that they can be easily imported when this project is used as a dependency
// e.g. `const {crawlerConductor} = require('3p-crawler');`
module.exports = {
    crawler,
    crawlerConductor,
    // collectors ↓
    // RequestCollector,
    APICallCollector,
    CookieCollector,
    TargetCollector,
    TraceCollector,
    ScreenshotCollector,
    CMPCollector,
    RequestContentCollector
};