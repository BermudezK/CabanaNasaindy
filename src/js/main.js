
filterSelection("all");
function filterSelection(c) {
    var x, i, n, e;
    var especificacion_type = ['cabanas', 'pileta','quincho','espacios']

    x = document.getElementsByClassName("card");
    e = document.getElementsByClassName("especificacion")
    n = especificacion_type.indexOf(c)
    console.log(n);
    console.log(c);

    for (let i = 0; i < e.length; i++) {
        let element = e[i];
        w3RemoveClass(element, "d-block")
    }

    (n > -1) ? w3AddClass(e[n],"d-block") : w3AddClass(e[0],"d-block") ;
    
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "d-inline-flex");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "d-inline-flex");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}