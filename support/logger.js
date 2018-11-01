// const winston = require('winston');

// const path = require('path');

// const logger = winston.createLogger({
//     transports: [
//         new (winston.transports.File)({
//             filename: path.resolve('./logs/combined.log'),
//             timestamp: () => {
//                 let currentMoment = new Date(Date.now());
//                 return currentMoment.toLocaleString('ru', { timeZone: 'Europe/Minsk' });
//             }
//         }),
//         new (winston.transports.File)({
//             name: 'error-log',
//             filename: path.resolve('./logs/error.log'),
//             level: 'error'
//         }),
//         new (winston.transports.Console)({
//             colorize: true
//         })
//     ]
// });

// module.exports = { logger };

const path = require('path');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const myFormat = printf(info => {
    return `${info.timestamp} ${info.message}`;
});

module.exports = createLogger({
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        myFormat
    ),
    transports: [
        new (transports.File)({
            filename: path.resolve('./logs/combined.log')
        }),
        new (transports.File)({
            name: 'error-log',
            filename: path.resolve('./logs/error.log'),
            level: 'error'
        }),
        new (transports.Console)({
            colorize: true
        })
    ]
});
