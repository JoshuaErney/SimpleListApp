// Element selectors
const main = document.querySelector("main");
const createListBtn = document.querySelector("#newlist-btn");

// Event listener for creating a new list
createListBtn.addEventListener("click", handleCreateList);

// Function to handle the creation of a new list
function handleCreateList() {
  const newList = document.createElement("div");
  const createListItemBtn = document.createElement("button");
  const listItemContainer = document.createElement("ul");

  // Styling with class names
  newList.classList.add("list-container");
  createListItemBtn.classList.add("list-item-btn");
  listItemContainer.classList.add("unordered-list");

  // Set button text
  createListItemBtn.textContent = "+ add list item";

  // Get and validate list name
  const listName = prompt("What would you like to call this list?");
  if (!listName.endsWith("list")) {
    return alert("Please add 'list' to the end of your item");
  }
  newList.textContent = listName;

  // Append elements to DOM
  main.appendChild(newList);
  newList.appendChild(createListItemBtn);
  newList.appendChild(listItemContainer);

  // Add event listener to create list items
  createListItemBtn.addEventListener("click", () =>
    handleCreateListItem(listItemContainer)
  );
}

// Function to handle the creation of a new list item
function handleCreateListItem(listContainer) {
  const listItem = document.createElement("li");
  const listItemName = prompt("What would you like to remember?");
  listItem.textContent = listItemName;
  listContainer.appendChild(listItem);
}
