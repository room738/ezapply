// modules
import * as parse from './parse.js'
import * as data from './data.js'
import * as fill from './fill.js'
import * as panel from './panel.js'
import * as options from './options.js'
import * as utils from './utils.js'

// *this* is ezapply
// TODO: what is the flow here
function main() {
    console.log("hi this is working in main.main()")
    // is user itialized? is the page valid?
    if(utils.isInit() && parse.isPageValid()) {

        /* parse the page and fill with info
        and update panel and storage */

        fill.main().then((application) => {
            data.handleAfter(application)
        }).then((application) => {
            panel.handleAfter(application)
        })
    }
    else{
        if(!utils.isInit){
            console.log("Tell the user to finish filling out manditory stuff.")
        }
        else{
            console.log("Something about this page is funky.")
        }
    }
}

export default main;