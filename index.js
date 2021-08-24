// Get the selector from HTML
let resultDiv = document.querySelector(".result_list");

// Set a variable of result to empty string, so will let user know this will be assign later on
let result = "";

let glossaryTerm = "";
let glossaryClass = "";
let glossaryDefinition = "";
let glossaryTags = "";
// Create a forEach function to loop glossary[i] to HTML
// Use += to repeat each result/ +1 count
function glossaryList(item) {
  glossaryTerm = item.term;
  glossaryClass = item.class;
  glossaryDefinition = item.definition;
  glossaryTags = item.tags.join(", ");

  result += `<div>
    <h3>${glossaryTerm}</h3>
    <p>${glossaryDefinition}</p>
    <p>${glossaryClass}</p>
    <small>${glossaryTags}</small>
    </div>`;
}

// callback function forEach
glossary.forEach(glossaryList);
resultDiv.innerHTML = result;

let searchBtn = document.querySelector("#searchBtn");
let input = document.querySelector("#searchInput");

function filterSearch() {
  result = "";
  let userInput = input.value.toLowerCase();

  function filterItemFn(item) {
    return (
      item.definition.toLowerCase().includes(userInput) ||
      item.term.toLowerCase().includes(userInput)
    );
  }
  glossary.filter(filterItemFn).forEach(glossaryList);
  resultDiv.innerHTML = result;
}

// user input and button click function
function onKeyPress(event) {
  filterSearch();
}
input.addEventListener("keyup", onKeyPress);

function onClick(event) {
  filterSearch();
}
searchBtn.addEventListener("click", onClick);

let dropdown = document.querySelector("#dropdown");
let option = document.createElement("option");
dropdown.appendChild(option);
let optionValue = option.value;

function getAllClass(item) {
  let classG = item.class;
  return classG;
}
new Set(glossary.map(getAllClass)).forEach(appendOption);
function appendOption(classG) {
  let dropdownItems = `<option value="${classG}">${classG}</option>`;
  dropdown.innerHTML += dropdownItems;
}
function onChange(e) {
  let x = e.target.value;
  filterSearch();
}
dropdown.addEventListener("change", onChange);

function dropdownValue(e) {
  let y = e.target.value;
  appendOption();
}
option.addEventListener("change", dropdownValue);
