import winston, { format, Logger as WinstonLogger } from 'winston';
const { combine, timestamp, json, simple, colorize, metadata } = winston.format;

export class Logger {
    private static logger: WinstonLogger;
    static getLogger(): WinstonLogger {
        if (!Logger.logger) {
            return this.initialize();
        }
        return Logger.logger;
    }

    private Logger() {}

    private static initialize(): WinstonLogger {
        const logger = winston.createLogger({
            level: 'info',
            format: format.combine(
                timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                // Format the metadata object
                metadata({
                    fillExcept: ['message', 'level', 'timestamp'],
                }),
                json()
            ),
            transports: [
                //
                // - Write all logs with importance level of `error` or less to `error.log`
                // - Write all logs with importance level of `info` or less to `combined.log`
                //
                new winston.transports.File({
                    filename: 'logs/error.log',
                    level: 'error',
                }),
                new winston.transports.File({ filename: 'logs/combined.log' }),
            ],
            exitOnError: false,
        });
        if (process.env.NODE_ENV !== 'production') {
            logger.add(
                new winston.transports.Console({
                    level: 'info',
                    handleExceptions: true,
                    format: combine(
                        timestamp(),
                        simple(),
                        colorize(),
                        metadata({
                            fillExcept: ['message', 'level', 'timestamp'],
                        })
                    ),
                })
            );
        }
        Logger.logger = logger;
        return logger;
    }
}
