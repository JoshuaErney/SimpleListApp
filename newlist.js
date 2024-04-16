// Linked html elements
const main = document.querySelector("main");
const createListbtn = document.querySelector("#newlist-btn");

// Actual Logic of adding a new list
createListbtn.addEventListener("click", () => {
  // Create a new div element each time the button is clicked
  const newlist = document.createElement("div");
  const createlistitembtn = document.createElement("button");
  const listitemcontainer = document.createElement("ul");

  // Adding class
  newlist.classList.add("list-container");
  createListbtn.classList.add("listItembtn");
  listitemcontainer.classList.add("unordered-list");

  // Get list name from user
  let listName = prompt("What would you like to call this list?");

  // Check if the name does not end with 'list'
  if (!listName.endsWith("list")) {
    return alert("Please add 'list' to the end of your item");
  }

  createlistitembtn.addEventListener("click", () => {
    const listitem = document.createElement("li");
    // Get item name from user
    let listItemName = prompt("What would you like to remember?");
    listitem.textContent = listItemName;
    listitemcontainer.appendChild(listitem);
  });

  // Set the text content of the new div
  newlist.textContent = listName;
  createlistitembtn.textContent = "+ add list item";

  // Append the new div to the main element
  main.appendChild(newlist);
  newlist.appendChild(createlistitembtn);
  newlist.appendChild(listitemcontainer);
});
