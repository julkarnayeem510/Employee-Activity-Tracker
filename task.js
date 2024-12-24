/*// task-script.js

// DOM Elements
const actionButton = document.getElementById("actionButton");
const dropdownMenu = document.querySelector(".dropdown-menu");
const outputSection = document.querySelector(".output-section");

// Action button toggle dropdown menu
actionButton.addEventListener("click", () => {
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

// Add event listeners for dropdown options
const dropdownOptions = dropdownMenu.querySelectorAll("button");
dropdownOptions.forEach(option => {
  option.addEventListener("click", (e) => {
    handleOptionClick(e.target.id);
    dropdownMenu.style.display = "none"; // Close the dropdown
  });
});

// Handle option clicks
function handleOptionClick(optionId) {
  outputSection.style.display = "block"; // Show output section

  switch (optionId) {
    case "editTaskInfo":
      outputSection.innerHTML = `
        <h3>Edit Task Info</h3>
        <form id="editTaskForm">
          <label for="merchantName">Merchant Name:</label>
          <input type="text" id="merchantName" required><br>
          <label for="merchantId">Merchant ID:</label>
          <input type="text" id="merchantId" required><br>
          <label for="consignmentId">Consignment ID:</label>
          <input type="text" id="consignmentId" required><br>
          <button type="submit">Save</button>
        </form>`;
      break;

    case "taskOperation":
      outputSection.innerHTML = `
        <h3>Task Operation</h3>
        <form id="taskOperationForm">
          <label for="issue">Issue:</label>
          <textarea id="issue" required></textarea><br>
          <label for="steps">Steps:</label>
          <textarea id="steps" required></textarea><br>
          <button type="submit">Save</button>
        </form>`;
      break;

    case "statusUpdate":
      outputSection.innerHTML = `
        <h3>Status Update</h3>
        <form id="statusUpdateForm">
          <label for="parcelStatus">Parcel Status:</label>
          <select id="parcelStatus" required>
            <option value="Pending">Pending</option>
            <option value="Delivered">Delivered</option>
            <option value="Partially Delivered">Partially Delivered</option>
            <option value="Cancelled/Returned">Cancelled/Returned</option>
            <option value="Missing/Damaged">Missing/Damaged</option>
            <option value="Zone Change">Zone Change</option>
            <option value="No/Wrong Entry">No/Wrong Entry</option>
            <option value="Rate Change">Rate Change</option>
            <option value="Other Issue">Other Issue</option>
          </select><br>
          <label for="problemStatus">Problem Status:</label>
          <select id="problemStatus" required>
            <option value="Done">Done</option>
            <option value="Processing">Processing</option>
            <option value="Need Follow-Up">Need Follow-Up</option>
          </select><br>
          <button type="submit">Save</button>
        </form>`;
      break;

    case "setReminder":
      outputSection.innerHTML = `
        <h3>Set Reminder</h3>
        <form id="setReminderForm">
          <label for="reminderDate">Reminder Date:</label>
          <input type="date" id="reminderDate" required><br>
          <button type="submit">Set Reminder</button>
        </form>`;
      break;

    default:
      outputSection.innerHTML = "<p>Invalid Option</p>";
  }
} */

// DOM Elements
const actionButton = document.getElementById('actionButton');
const actionDropdown = document.getElementById('actionDropdown');
const outputSection = document.getElementById('outputSection');

// Toggle dropdown visibility
actionButton.addEventListener('click', () => {
  actionDropdown.style.display =
    actionDropdown.style.display === 'block' ? 'none' : 'block';
});

// Handle dropdown item clicks
actionDropdown.addEventListener('click', (event) => {
  const action = event.target.id;
  actionDropdown.style.display = 'none';
  outputSection.innerHTML = ''; // Clear the output section

  if (action === 'editTaskInfo') {
    outputSection.innerHTML = `
      <h3>Edit Task Info</h3>
      <form>
        <label>Merchant Name:</label>
        <input type="text"><br>
        <label>Merchant ID:</label>
        <input type="text"><br>
        <label>Consignment ID:</label>
        <input type="text"><br>
        <button type="submit">Save</button>
      </form>
    `;
  } else if (action === 'taskOperation') {
    outputSection.innerHTML = `
      <h3>Task Operation</h3>
      <form>
        <label>Issue:</label>
        <textarea></textarea><br>
        <label>Steps:</label>
        <textarea></textarea><br>
        <button type="submit">Save</button>
      </form>
    `;
  } else if (action === 'setReminder') {
    outputSection.innerHTML = `
      <h3>Set Reminder</h3>
      <form>
        <label>Reminder Date:</label>
        <input type="date"><br>
        <button type="submit">Save</button>
      </form>
    `;
  } else if (action === 'statusUpdate') {
    outputSection.innerHTML = `
      <h3>Status Update</h3>
      <form>
        <label>Parcel Status:</label>
        <select>
          <option>Pending</option>
          <option>Delivered</option>
          <option>Cancelled</option>
        </select><br>
        <label>Problem Status:</label>
        <select>
          <option>Done</option>
          <option>Processing</option>
        </select><br>
        <button type="submit">Save</button>
      </form>
    `;
  }
});

