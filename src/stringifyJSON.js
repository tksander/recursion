// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
/*
  A JSON value MUST be an object, array, number, or string, or one of
   the following three literal names: false null true
*/

// test for empty object
function emptyObject(testObj) {
    for(var i in testObj) {
        if(testObj.hasOwnProperty(i)) {
            return false;
        } else return true;
    }
}


    // ---test the current element for type---- //

    // number type
    if(typeof obj === "number") {
        return String(obj);
    }

    // if boolean type
    if(typeof obj === "boolean") {
        return String(obj);
    }

    // null type
    if(obj === null) {
        return String(obj);
    }

    // string type
    if(typeof obj === "string") {
        return '"' + obj + '"';
    }

    // function type
    if(typeof obj === "function") {
        return null;
    }

    // undefined type
    if(obj === undefined) {
        return null;
    }

    var tempArr = [],
        tempValue,
        tempKey;

    // if array
    if(Array.isArray(obj)) {
        // if empty array
        if(obj.length === 0) {
            console.log("We found an empty one!");
            return "[]";
        }

        for(var i = 0; i < obj.length; i++) {
            // store a strigified value for current element
            tempValue = stringifyJSON(obj[i]);
            if(tempValue === null) {
                // do nothing
            } else {
                tempArr.push(tempValue);
            }
        }
        return "[" + tempArr.join(',') + "]";
    }

    // if object
    if(typeof obj === "object" && obj !== null) {

        // if empty object
        if(emptyObject(obj)) {
            console.log("We found an empty object!");
            return "{}";
        }

        for(var key in obj) {
            //if object and not null, recurse
            tempKey = stringifyJSON(key);
            tempValue = stringifyJSON(obj[key]);
            if(tempValue === null) {
                tempArr.push();
            } else {
                tempArr.push(tempKey + ":"  + tempValue);
            }
        }
        return "{" + tempArr.join(',') + "}";
    }
};

testString({
    'functions': function(){},
    'undefined': undefined
  });

// -------- Test functions ----------- //
function isString(obj) {
    console.log("typeof " + obj + ":  " + typeof obj);
}

function printObj(obj) {
    console.log("print:  " + obj);
}

function testString(obj) {
    var res = stringifyJSON(obj);
    isString(res);
    printObj(res);
}