

/**
 * colors
 color.black('this text is black');
color.red('this text is high-intensity red', true);
color.green('this text is green');
color.yellow('this text is high-intensity yellow', true);
color.blue('this text is blue');
color.purple('this text is purple');
color.cyan('this text is cyan');
color.white('this text is white');
 */

module.exports = function () {
    
    const notify = {}
    const util = require('util')
    const { objectSize } = require('./utils')

    var color = require('bash-color')

    notify.ulog = (l = false, err = false, strongMessage) => {
        // will produce warning message
        if (err === 0) {
            console.log('  ')
            console.log(util.inspect(l, false, null, true), (color.yellow('WARNING', true))) // enable colros
            console.log(color.yellow('-----------------------', true))
            console.log('  ')
            return
        }
        if (err === true || err === -1) {
            if (objectSize(l) && strongMessage) {
                if (l.message) console.log(color.red(l.message))
            }
            console.log('  ')
            console.log(util.inspect(l, false, null, true), (color.red('ERROR', true))) // enable colros
            console.log(color.red('-----------------------', true))
            console.log('  ')
        } else {
            if (objectSize(l) && strongMessage) {
                if (l.message) console.log(color.blue(l.message))
            }
            console.log(util.inspect(l, false, null, true)) // enable colros
            console.log(color.blue('----'))
        }
    }

    notify.log = (log = false, err = false) => {
        // will produce warning message
        if (err === 0) {
            console.log(color.wrap('WARNING', color.colors.YELLOW, color.styles.hi_background))
            console.log(log)
            console.log(color.yellow('----'))
            return
        }
        if (err === true || err === -1) {
            console.log(color.wrap('ERROR', color.colors.RED, color.styles.hi_background))
            console.log(log)
            console.log(color.red('----'))
        } else {
            console.log(color.green('----'))
            console.log(color.wrap(log, color.colors.GREEN, color.styles.hi_background))
            console.log(color.green('----'))
        }
    }
    return notify
}
