//SEARCH FUNCTION
//Add toUpperCase inbetween textvalue & index to disable case-sensitivity

function userFunction() {
    let input, filter, ul, li, h2, i, textValue;
    input = document.getElementById("userInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("friendData");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        h2 = li[i].getElementsByTagName("h2")[0];
        textValue = h2.textContent || h2.innerText;
        if (textValue.toUpperCase().indexOf(filter) === 0) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//SORTING FUNCTION
//need fixing

// function listSort() {
//     let list, i, sort, b, unSort;
//     list = document.getElementById("friendData");
//     sort = true;

//     while (sort) {
//         sort = false;
//         b = list.getElementsByTagName("h2");
//             for (i = 0; i < (b.length - 1); i++) {
//                 unSort = false;

//                 if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
//                     unSort = true;
//                     break;
//                 }              
//             }
//             if (unSort) {
//                 b[i].parentNode.insertBefore(b[i + 1], b[i]);
//                 sort = true;
//             }
//     }
// }