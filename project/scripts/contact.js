// Array of subjects for the contact form
const subjects = [
    { id: "gen-inquiry", name: "General Inquiry" },
    { id: "feedback", name: "Feedback" },
    { id: "support", name: "Support" },
    { id: "sales", name: "Sales Inquiry" },
    { id: "other", name: "Other" }
];

document.addEventListener("DOMContentLoaded", () => {
    const subjectSelect = document.getElementById("subject");

    // Populate subjects dropdown
    subjects.forEach(subject => {
        const option = document.createElement("option");
        option.value = subject.id;
        option.textContent = subject.name;
        subjectSelect.appendChild(option);
    });
});