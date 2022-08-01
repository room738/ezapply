// *USER DATA MODEL
let user = {
    uid: 0,
    legal_first_name: "Nikhil",
    preferred_first_name: "Nikhi",
    last_name: "Bhambra",
    schools: [{
        school_name: "University of Toronto",
        major: "Computer Science",
        alternate_program: "Cognitive Science", // ping when this is used
        degree_type: "Bachelor's", // [bachelor's, master's, MBA, PHd, PharmD, Associates, High School, Other]
        gpa: "2.9", // add I do not want this to everything
        start_m: 9,
        start_y: 2017,
        end_m: 4,
        end_y: 2022,
    }],
    contact: {
        phone: "9055990979",
        email: "nikhibhambra@gmail.com"
    },
    location: "Toronto, Ontario, Canada",
    resume: link, // or object key? user id?
    cover_letter: "",
    equal_employment: {
        ethnicity: "South Asian", // from []
        gender_identification: "Male", // from [Male, Female, Non-Binary]
        pronouns: "he, him, his", // from []]
        us_work_auth: false,
        require_sponsorship: false,
        disabled: false,
        veteran: false,
        lgbtq: false,
    },
    work_exp:[{
        company:"Apollo GraphQL",
        location:"Toronto, ON, Canada",
        job_title: "Software Engineer",
        experience_type: "Full-time",
        description: "Working on Apollo Studio Observe, the insights platform that makes it easy for developers to understand and optimize their GraphQL API services.Working on Apollo Studio Observe, the insights platform that makes it easy for developers to understand and optimize their GraphQL API services.",
        type: "remote", // remote || hybrid || in-person
    }, {
        company:"Karat",
        location:"Toronto, ON, Canada",
        job_title: "Interviewer",
        experience_type: "Part-time",
        description: "Conducting fair and enjoyable software engineering interviews spanning many technical disciplines and writing detailed recommendations for companies like Pinterest, Roblox, etc.",
        type: "remote", // remote || hybrid || in-person
    }],
    socials: {
        linkedin: "https://www.linkedin.com/in/nikhibhambra",
        github: "https://github.com/nkhi",
        personal: "https://nikhi.ca",
        other: "" // parse this one for weird reqs to use prefill logic for unassigned links
    },
    skills: [
        "HTML/CSS", 
        "Git", 
        "Python", 
        "Accessibility", 
    ]
};

// each category in the model
// should map to something on the page

let user_categories = [
    "uid",
    "legal_first_name",
    "preferred_first_name",
    "last_name",
    "schools",
    "contact",
    "location",
    "resume",
    "cover_letter",
    "equal_employment",
    "work_exp",
    "socials",
    "skills"
] || keys(user);

let user_categories_mapping = new Map(user_categories);

// *PAST APPLICATION DATA MODEL
let jobs = [{
    name: "",
    url:"",
    applied_date: ""
}]

// *DATA OPERATIONS 

// Add  user value to localStorage
function storeUser() {
    chrome.storage.sync.set({'user': value}, function() {
        console.log('Resume is set to' + value);
    });
}

// Update a User Attribute (like resume, name, etc)
function updateUserValue(key, value) {
    update = user
    update[key] = value
    chrome.storage.sync.set({key: update}, function() {
        console.log(key + 'is now set to' + value);
    });
}

// Retreive the user's stored resume
function getUserValues(cols=[]) {
    chrome.storage.sync.get(['resume'], (data) => {
        if(cols){
            return data[cols]
        }
        return data
    })
}

// Allows the user to delete their resume
function destroyResume() {
    chrome.storage.sync.clear(['resume'], function(result) {
        if(result) {
            console.log('The resume is now gone!');
        } else {
            console.log('Try again?')
        }
    });
}

function updateUserJobHistory() {
    console.log()
}

// TODO
function updateUserValues() {}
function updateUserJobHistory() {}

// https://stackoverflow.com/questions/34951170/save-json-to-chrome-storage-local-storage
// json stringify storage for chrome.storage API
var local = (function(){

    var setData = function(key,obj){
        var values = JSON.stringify(obj);
        localStorage.setItem(key,values);
    }

    var getData = function(key){
        if(localStorage.getItem(key) != null){
        return JSON.parse(localStorage.getItem(key));
        }else{
            return false;
        }
    }

    var updateDate = function(key,newData){
        if(localStorage.getItem(key) != null){
            var oldData = JSON.parse(localStorage.getItem(key));
            for(keyObj in newData){
                oldData[keyObj] = newData[keyObj];
            }
            var values = JSON.stringify(oldData);
            localStorage.setItem(key,values);
        }else{
            return false;
        }
    }

    return {set:setData,get:getData,update:updateDate}
})();


export default {
    user, 
    storeUser,
    updateUserValue,
    getUserValues,
    destroyResume
}