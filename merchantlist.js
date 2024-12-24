// DOM Elements
const addMerchantBtn = document.getElementById('addMerchantBtn');
const addMerchantModal = document.getElementById('addMerchantModal');
const closeBtn = document.querySelector('.close-btn');
const addMerchantForm = document.getElementById('addMerchantForm');
const merchantList = document.getElementById('merchantList');
const csvUpload = document.getElementById('csvUpload');
const searchInput = document.getElementById('searchInput');

// Show Modal
addMerchantBtn.addEventListener('click', () => {
  addMerchantModal.style.display = 'flex';
});

// Close Modal
closeBtn.addEventListener('click', () => {
  addMerchantModal.style.display = 'none';
});

// Add Merchant Form Submit
addMerchantForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form data
  const merchantName = document.getElementById('merchantName').value;
  const merchantID = document.getElementById('merchantID').value;
  const contactNumber = document.getElementById('contactNumber').value;
  const contactPerson = document.getElementById('contactPerson').value;
  const address = document.getElementById('address').value;
  const assignedKAM = document.getElementById('assignedKAM').value;

  // Add row to table
  const row = document.createElement('tr');
  row.setAttribute('data-merchant-id', merchantID); // Add data attribute for search
  row.innerHTML = `
    <td>${merchantName}</td>
    <td>${merchantID}</td>
    <td>${contactNumber}</td>
    <td>${contactPerson}</td>
    <td>${address}</td>
    <td>${assignedKAM}</td>
  `;
  merchantList.appendChild(row);

  // Clear form and close modal
  addMerchantForm.reset();
  addMerchantModal.style.display = 'none';
});

// Handle CSV Upload
csvUpload.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const rows = e.target.result.split('\n');
    rows.forEach((row) => {
      const columns = row.split(',');
      if (columns.length === 6) {
        const rowElement = document.createElement('tr');
        rowElement.setAttribute('data-merchant-id', columns[1].trim()); // Add data attribute for search
        rowElement.innerHTML = `
          <td>${columns[0]}</td>
          <td>${columns[1]}</td>
          <td>${columns[2]}</td>
          <td>${columns[3]}</td>
          <td>${columns[4]}</td>
          <td>${columns[5]}</td>
        `;
        merchantList.appendChild(rowElement);
      }
    });
  };
  reader.readAsText(file);
});

// Search Functionality
searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.toLowerCase();
  const rows = merchantList.querySelectorAll('tr');
  rows.forEach((row) => {
    const merchantID = row.getAttribute('data-merchant-id');
    if (merchantID && merchantID.toLowerCase().includes(searchValue)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});




