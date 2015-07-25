
// --------------------------------------------------
//  getElementByClassName
// --------------------------------------------------
var getElementsByClassName = function(className
){

    var elementArr = [];
    var body = document.body
    
    (function recurse(element) {

        // current element contains the classname
        if(element.classList.contains(className)) {
            elementArr.push(element)
        }

        // if the element has childnodes
        else if(element.hasChildNodes()) {
            var children = element.childNodes
            for(var i = 0; i < children.length; i++) {
                recurse(children[i])
            }
        }
    })(body);



    // return the array populated with elements
    return elementArr
};


/*
Returns an array-like object of all
child elements which have all of the
given class names

Dcoument model is searched, including
the root node


element.classList // returns a token list of 
the class attribute of the element

element.childNodes // returns a live colleciton 
of child nodes of the given element


*/