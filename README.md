iValidate - Email Validator
iValidate is a simple and intuitive web-based tool designed to validate email addresses in real-time. It helps users verify whether an email address is syntactically correct, has a valid domain, and can receive emails. This project is built using vanilla HTML, CSS, and JavaScript, and it utilizes the emailvalidation.io API for validation checks.

Features
Real-time Validation: Instantly checks the validity of any email address.

Comprehensive Checks: Performs multiple validation checks, including:

Syntax validation (format_valid)

Domain and MX records check (mx_found)

Disposable email address detection (disposable)

SMTP verification (smtp_check)

User-Friendly Interface: A clean and simple UI for ease of use.

Detailed Results: Provides a detailed breakdown of the validation result, showing key metrics like the score, state (deliverable/undeliverable), and reason.

Responsive Design: The layout is adaptable for a better experience on smaller screens.

Technologies Used
HTML5: For the structure and content of the web pages.

CSS3: For styling the user interface, including a glowing effect on the main container and responsive design adjustments.

JavaScript (Vanilla): To handle API calls, process user input, and dynamically display validation results.

emailvalidation.io API: The external service used to perform the email validation.

Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
You only need a modern web browser to run this project.

Installation
Clone the repository to your local machine:

Bash

git clone https://github.com/your-username/iValidate.git
Navigate to the project directory:

Bash

cd iValidate
Open the index.html file in your web browser.

Usage
Open the index.html page.

Enter the email address you wish to validate in the input field.

Click the "Submit" button.

The validation results will be displayed in the "Your Results" section below the form.

Project Structure
iValidate/
├── index.html          # Main page with the validation form
├── about.html          # Page describing the project
├── contact.html        # Page with developer contact information
├── style.css           # Stylesheet for all HTML pages
├── index.js            # JavaScript for API interaction and DOM manipulation
└── img/
    ├── email.svg       # Icon used in the navigation bar
    └── loading.svg     # Loading animation shown during API call<img width="1917" height="922" alt="Screenshot 2025-09-21 235458" src="https://github.com/user-attachments/assets/11a4ca0b-032f-4914-a44d-b35665216710" />
