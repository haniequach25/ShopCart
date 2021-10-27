const dropDownList = document.querySelector(".dropdown-list");
const dropDownSelect = document.querySelector(".dropdown-select");

function openDropDownList() {
    if(dropDownList.classList.contains("display-block"))
    {
        dropDownList.classList.remove("display-block");
    }
    else {
        dropDownList.classList.add("display-block");
    }
}

dropDownSelect.addEventListener('click', openDropDownList)
dropDownList.addEventListener('click', openDropDownList)