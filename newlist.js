// Element selectors
const main = document.querySelector("main");
const createOListBtn = document.querySelector("#organized-btn");
const createUListBtn = document.querySelector("#unorganized-btn");

// Event listener for creating a new list
createOListBtn.addEventListener("click", () => handleCreateList("ol"));
createUListBtn.addEventListener("click", () => handleCreateList("ul"));

// Function to handle the creation of a new list
function handleCreateList(listType) {
  const listDiv = document.createElement("div");
  const createListBtn = document.createElement("button");
  const deleteListBtn = document.createElement("button");
  const deleteListItemBtn = document.createElement("button");
  const listGroup = document.createElement(listType);

  // Styling with class names
  listDiv.classList.add("list-container");
  deleteListItemBtn.classList.add("list-item-btn");
  deleteListBtn.classList.add("list-btn");
  listGroup.classList.add(
    listType === "ol" ? "ordered-list" : "unordered-list"
  );

  // Set button text
  createListBtn.textContent = "add list item";
  deleteListBtn.textContent = "remove list";
  deleteListItemBtn.textContent = "delete item";

  // Get list name
  const listName = prompt("What would you like to call this list?");
  listDiv.textContent = listName;

  // Append elements to DOM
  main.appendChild(listDiv);
  listDiv.appendChild(createListBtn);
  listDiv.appendChild(deleteListBtn);
  listDiv.appendChild(listGroup);

  // Add event listener to create list items
  createListBtn.addEventListener("click", () =>
    handleCreateListItem(listGroup)
  );

  deleteListBtn.addEventListener("click", () => {
    main.removeChild(listDiv);
  });
}

// Function to handle the creation of a new list item
function handleCreateListItem(listDiv) {
  const listItem = document.createElement("li");
  const deleteListItemBtn = document.createElement("button");

  // Styling and text for delete button
  deleteListItemBtn.classList.add("list-item-btn");
  deleteListItemBtn.textContent = "delete item";

  const listItemName = prompt("What would you like to remember?");
  listItem.textContent = listItemName;

  // Append elements
  listItem.appendChild(deleteListItemBtn);
  listDiv.appendChild(listItem);

  // Add event listener to delete list item
  deleteListItemBtn.addEventListener("click", () => {
    listDiv.removeChild(listItem);
  });
}
