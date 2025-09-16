function verify (name) {            // outer function  
    function isJohn() {             // inner function
        return name === "John";     // full access to argument        
    }
    if (isJohn()) {
        alert("Yep, this is John");
    }
}
verify("John");