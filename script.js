function removeColor() {
    // Select the dropdown list by its ID
    const selectElement = document.getElementById("colorSelect");
    
    // Get the index of the currently selected option
    const selectedIndex = selectElement.selectedIndex;

    // Check if an item is actually selected (index -1 means nothing is selected)
    if (selectedIndex !== -1) {
        // Remove the option at the specified index
        selectElement.remove(selectedIndex);
    }
}

// Attach the function to the button click event
// Assuming your button has an onclick="removeColor()" attribute or similar
document.querySelector('input[type="button"]').addEventListener('click', removeColor);