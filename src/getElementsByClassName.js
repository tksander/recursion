// --------------------------------------------------
//  getElementByClassName
// --------------------------------------------------
var getElementsByClassName = function(className) {

    var elementArr = [];

    function recurse(element) {

        console.log("classlist:  " + element.classList + "||" + "element: " + element);
        // current element contains the classname
        if(element.classList.contains(className)) {
            elementArr.push(element)
        }

        // if the element has childnodes
        if(element.hasChildNodes()) {
            console.log("element in else if:   " + element);
            var children = element.childNodes
            for(var i = 0; i < children.length; i++) {
                if(children[i].nodeType !== 3) {
                    recurse(children[i])
                }
            }
        }
    };

    recurse(document.body);

    // return the array populated with elements
    return elementArr
};


/*


element.classList // returns a token list of 
the class attribute of the element

element.childNodes // returns a live colleciton 
of child nodes of the given element


*/