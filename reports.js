// DOM Elements
const reportsBtn = document.getElementById('reportsBtn');
const merchantReportModal = document.getElementById('merchantReportModal');
const workReportModal = document.getElementById('workReportModal');
const closeButtons = document.querySelectorAll('.close-btn');
const merchantReportForm = document.getElementById('merchantReportForm');
const workReportForm = document.getElementById('workReportForm');

// Open Reports Selection Modal
reportsBtn.addEventListener('click', () => {
  const selection = prompt("Select one option: Merchant or Work").toLowerCase();
  if (selection === 'merchant') {
    merchantReportModal.style.display = 'block';
  } else if (selection === 'work') {
    workReportModal.style.display = 'block';
  }
});

// Close Modals
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    merchantReportModal.style.display = 'none';
    workReportModal.style.display = 'none';
  });
});

// Handle Merchant Report Form Submission
merchantReportForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Merchant Report Downloaded as Excel!');
  merchantReportModal.style.display = 'none';
});

// Handle Work Report Form Submission
workReportForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Work Report Downloaded as Excel!');
  workReportModal.style.display = 'none';
});
