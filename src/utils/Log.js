import chalk from 'chalk';

/**
 * @description Log object
 */
class Log {
    /**
     * @private
     * @description pool text message to print
     */
    _content = [];
    set content(text) {
        this._content.push(`${text}`);
    }
    get content() {
        return this._content;
    }
    /**
     * @constructor
     * @param {string} header - header message to print
     */
    constructor(header) {
        this.header = header;
    }
    /**
     * @description render function for print log
     */
    render() {
        console.log(this.header);
        this._content.forEach((text) => console.log(text));
    }
}

/**
 * @description object Log builder
 * @param {string} header - header message to print
 * @returns {Log} - Log object
 */
const builderLog = (header) => new Log(header);

/**
 * @description show status up-server
 * @param {string} header - header message to print
 */
export const listen = (header) => {
    const log = builderLog(`${chalk.blue(header)}`);
    if (process.env.MODE === 'development') {
        log.content = `${chalk.cyan(
            `◌ listening on http://localhost:${process.env.PORT}`
        )}`;
    }
    log.render();
};
/**
 * @description fail response ✖
 * @param {string} header - header message to print
 * @param {Array} content - chain test to print
 */
export const fail = (header, ...content) => {
    const log = builderLog(`${chalk.yellowBright(`⚠ ${header}`)}`);
    content.forEach(
        (text) => (log.content = `${chalk.redBright('✖')} ${text}`)
    );
    log.render();
};
/**
 * @description success response ✔
 * @param {string} header - header message to print
 * @param {Array} content - chain test to print
 */
export const complete = (header, ...content) => {
    const log = builderLog(`${chalk.yellowBright(`ℹ ${header}`)}`);
    content.forEach(
        (text) => (log.content = `${chalk.greenBright('✔')} ${text}`)
    );
    log.render();
};
/**
 * @description info response ℹ
 * @param {string} header - header message to print
 */
export const info = (header) => {
    const log = builderLog(`${chalk.yellowBright(`ℹ ${header}`)}`);
    log.render();
};
