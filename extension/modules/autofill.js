import * as data from './data.js' // make this smaller

/* Takes in an identifier from the page and returns a key in the datastore, 
for filling from an exaustive search method */
const outerSearch = identifier => {
    // go though all nodes
    // check if amy tags matches identifier
    // if so, return data.user[identifier]
}

/* Uses _____ to score the similarity between two strings*/
const similarity = texta, textb => {
    const comp = 0 // 0->1
    // something
    return comp
}

/* Takes in an identifier from the page and returns a key in the datastore */
const match = identifier => {
    /* 
    for key in data.user_categories_mapping:
        if similarity(key, identifier) > 0.75:
            for match in data.user_categories_mapping[key]:
                if similarity(match, identifier) > 0.95:
                    return data.user[key];
    */

    // use regex to regularizer the identifier and check against a set of common perms
    // find things that dont match on the loop above, no empty boxes!!
    const ret = ""
    if(ret = "") (
        outerSearch(identifier)
    };
};

// get every field on the page
inputs = document.getElementsByTagName("input");

// then just the textboxes
textboxes = Array.from(inputs).filter(input => input.type=="text");

// for each textbox,
textboxes.forEach(box => {

    // get its id
    ident = box.id

    // fill with user data matcher
    box.value = match(ident)
})

// deal with links in greenhouse use .click on a div link to open selector
// next give value

const main