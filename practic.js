// Get the modal and buttons
const documentsModal = document.getElementById("documentsModal");
const consultationModal = document.getElementById("consultationModal");
const hireButton = document.getElementById("hireButton");
const documentsButton = document.getElementById("documentsButton");
const closeModal = document.getElementsByClassName("close");
const documentListItems = document.querySelectorAll("#documentsModal ul li");

// Open modal when either button is clicked
hireButton.onclick = function() {
    consultationModal.style.display = "block";
}

documentsButton.onclick = function() {
    documentsModal.style.display = "block";
}

// Close modal when user clicks "X"
for (let close of closeModal) {
    close.onclick = function() {
        documentsModal.style.display = "none";
        consultationModal.style.display = "none";
    }
}

// Close modal if user clicks outside of the modal content
window.onclick = function(event) {
    if (event.target == documentsModal || event.target == consultationModal) {
        documentsModal.style.display = "none";
        consultationModal.style.display = "none";
    }
}

// Handle document selection
documentListItems.forEach(item => {
    item.onclick = function() {
        const documentName = item.textContent.trim();
        alert(`Thank you for selecting "${documentName}". Bharat Legal is coming soon to your city!`);
        documentsModal.style.display = "none"; // Close modal after selection
    };
});

// Handle consultation form submission
document.getElementById("consultationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    alert(`Thank you for choosing legal consultation in ${city}, ${state}. Bharat Legal is coming soon to your city!`);
    consultationModal.style.display = "none"; // Close modal after submission
});
