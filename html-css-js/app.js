const addText = () => {
  console.log("Text added");

  const getDiv = document.getElementById('new-text');
  const newElement = document.createElement('p');
  newElement.textContent = "Sample Text";
  getDiv.appendChild(newElement);

}

