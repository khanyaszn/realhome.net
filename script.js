document.addEventListener("DOMContentLoaded", function () {
    // Contact Agent Buttons
    let buttons = document.querySelectorAll(".contact-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let agentCard = this.closest(".agent-card");
            let name = agentCard.querySelector("h3").textContent;
            let email = agentCard.querySelector("p:nth-of-type(1)").textContent.replace("Email: ", "");
            let phone = agentCard.querySelector("p:nth-of-type(2)").textContent.replace("Phone: ", "");

            alert(`Contact ${name}\nEmail: ${email}\nPhone: ${phone}`);
        });
    });

    // Form Submission
    let contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert("Thank you for reaching out! We will get back to you soon.");
            this.reset(); // Reset form after submission
        });
    }
});

// Email Validation
function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Search Properties
function searchProperties() {
    let input = document.getElementById("search-input").value.toLowerCase();
    let properties = document.querySelectorAll(".property-card");
    let listingsContainer = document.getElementById("property-listings");
    let matchFound = false;

    properties.forEach(property => {
        let title = property.querySelector("h2").textContent.toLowerCase();
        let location = property.querySelector("p:nth-of-type(1)").textContent.toLowerCase();

        if (title.includes(input) || location.includes(input)) {
            property.style.display = "flex";
            matchFound = true;
        } else {
            property.style.display = "none";
        }
    });

    listingsContainer.style.display = matchFound ? "grid" : "none";
}

// Add Property to Favorites
function addToFavorites(property) {
    let favoritesList = document.getElementById("favorites-list");
    let listItem = document.createElement("li");
    listItem.textContent = property;
    favoritesList.appendChild(listItem);
}

// Clear Favorites
function clearFavorites() {
    document.getElementById("favorites-list").innerHTML = "";
}
