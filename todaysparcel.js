// DOM Elements
const todaysDate = document.getElementById('todaysDate');
const parcelTableBody = document.getElementById('parcelTableBody');
const exportForm = document.getElementById('exportForm');

// Sample Merchant List (Simulated Data)
const merchants = [
  { id: 'M001', name: 'Merchant A' },
  { id: 'M002', name: 'Merchant B' },
  { id: 'M003', name: 'Merchant C' },
];

// Set Today's Date
const today = new Date().toISOString().split('T')[0];
todaysDate.textContent = today;

// Populate Table with Merchants
merchants.forEach((merchant, index) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${index + 1}</td>
    <td>${merchant.name}</td>
    <td>${merchant.id}</td>
    <td>
      <input type="number" class="parcel-quantity" placeholder="Enter Quantity">
    </td>
    <td>
      <button class="submit-btn" onclick="submitQuantity(this)">Submit</button>
      <button class="edit-btn" onclick="editQuantity(this)">Edit</button>
    </td>
  `;
  parcelTableBody.appendChild(row);
});

// Handle Submit Button Click
function submitQuantity(button) {
  const row = button.parentElement.parentElement;
  const input = row.querySelector('.parcel-quantity');
  if (input.value.trim() === '') {
    alert('Please enter a parcel quantity.');
    return;
  }
  input.disabled = true;
  alert(`Quantity Submitted: ${input.value}`);
}

// Handle Edit Button Click
function editQuantity(button) {
  const row = button.parentElement.parentElement;
  const input = row.querySelector('.parcel-quantity');
  input.disabled = false;
  alert('You can now edit the quantity.');
}

// Handle Export Data Form Submission
exportForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const fromDate = document.getElementById('fromDate').value;
  const toDate = document.getElementById('toDate').value;

  if (!fromDate || !toDate) {
    alert('Please select a valid date range.');
    return;
  }

  // Simulate Excel Download
  alert(`Report Downloaded for Date Range: ${fromDate} to ${toDate}`);
});
