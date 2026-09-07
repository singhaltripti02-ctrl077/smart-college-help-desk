// ==========================
// 📅 Date & Time Auto Update
// ==========================
function updateDateTime() {
    const now = new Date();
    const formatted = now.toLocaleString();
    const dt = document.getElementById("datetime");
    if (dt) dt.textContent = formatted;
}
setInterval(updateDateTime, 1000);


// ==========================
// 🎉 Welcome Button (Home)
// ==========================
function welcome() {
    alert("Welcome to Smart College HelpDesk!\nWe are here to solve your problems.");
}


// ==========================
// 📌 Modal (Home Page Info)
// ==========================
const modal = document.getElementById("infoModal");
const closeBtn = document.querySelector(".close");

if (modal && closeBtn) {
    // Open modal when clicking Get Support
    document.querySelector("button")?.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // Close modal
    closeBtn.onclick = () => modal.style.display = "none";

    window.onclick = (e) => {
        if (e.target === modal) modal.style.display = "none";
    };
}


// ==========================
// 📩 Complaint Form Handling
// ==========================
const complaintForm = document.getElementById("complaintForm");

if (complaintForm) {
    complaintForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const studentId = document.getElementById("studentId").value;
        const department = document.getElementById("department").value;
        const issue = document.getElementById("issue").value;
        const complaint = document.getElementById("complaint").value;

        // Create object
        const data = {
            id: Date.now(),
            name,
            email,
            studentId,
            department,
            issue,
            complaint,
            status: "Pending"
        };

        // Save to localStorage
        let complaints = JSON.parse(localStorage.getItem("complaints")) || [];
        complaints.push(data);
        localStorage.setItem("complaints", JSON.stringify(complaints));

        // Show success modal
        document.getElementById("successModal").style.display = "block";

        // Reset form
        complaintForm.reset();
    });
}


// ==========================
// ❌ Close Success Modal
// ==========================
const successModal = document.getElementById("successModal");

if (successModal) {
    const closeBtn2 = successModal.querySelector(".close");

    closeBtn2.onclick = () => {
        successModal.style.display = "none";
    };

    window.onclick = (e) => {
        if (e.target === successModal) {
            successModal.style.display = "none";
        }
    };
}


// ==========================
// 📬 Contact Form Handling
// ==========================
const contactForm = document.getElementById("contactForm");
const messageList = document.getElementById("messageList");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("cName").value;
        const email = document.getElementById("cEmail").value;
        const message = document.getElementById("cMessage").value;

        const msgData = {
            name,
            email,
            message
        };

        let messages = JSON.parse(localStorage.getItem("messages")) || [];
        messages.push(msgData);
        localStorage.setItem("messages", JSON.stringify(messages));

        displayMessages();
        contactForm.reset();
    });
}


// ==========================
// 📜 Display Messages
// ==========================
function displayMessages() {
    if (!messageList) return;

    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messageList.innerHTML = "";

    messages.forEach(msg => {
        const li = document.createElement("li");
        li.textContent = `${msg.name} (${msg.email}): ${msg.message}`;
        messageList.appendChild(li);
    });
}

displayMessages();


// ==========================
// 🧠 Extra Feature (Optional)
// View Complaints in Console
// ==========================
function viewComplaints() {
    const data = JSON.parse(localStorage.getItem("complaints")) || [];
    console.table(data);
}