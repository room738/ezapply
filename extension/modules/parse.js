import allLabels from './data.js'

function getAllRequiredFields() {
    allLabels;
    // document.forms
}
 
// Common input types

function getTextboxes() {
    return document.getElementsByTagName("input");
}

function getRadioButtons(){
    return document.getElementsByTagName("input"); //?
}

function getRadioButtons(){
    return document.getElementsByTagName("label");

    // labels.forEach((e)=>{
    //     link = e.attributes.for.nodeValue;

    // })

}

// function 

function bindInputTree() {
    this_page_template = []
    textboxes = getTextboxes()
    radios = getRadioButtons()
    labels = getLabels()
    req_info = getAllRequiredFields()
}

// *the* parser
function main() {
    todo = bindInputTree();
    // go thru input true, matching thru our hash as we go
}
