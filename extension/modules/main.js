// modules
import * as parse from './parse.js'
import * as data from './data.js'
import * as autofill from './autofill.js'
import * as panel from './panel.js'
import * as options from './options.js'
import * as utils from './utils.js'

// *this* is ezapply
// TODO: what is the flow here
function main() {

    // is user itialized? is the page valid?
    if(utils.isInit() && parse.isPageValid()) {

        // parse the page and fill with user data
        pageDetails = await autofill.main() 
        
        // point to what is unfinished
        panel.handleAfter(state[0])
        options.handleAfter(state[0])

        // save to some simple history
        data.handleAfter(state[1])
    }
}

export default main;