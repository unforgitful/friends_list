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
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//SORTING FUNCTION

// function listSort() {
//     let list, i, sort, b, unsort;
//     list = document.getElementById
// }