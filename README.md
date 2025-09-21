iValidate - Real-Time Email Validator 📧
iValidate is a simple and intuitive web-based tool designed to validate email addresses in real-time. It leverages the emailvalidation.io API to provide detailed, accurate verification through a clean user interface built with vanilla HTML, CSS, and JavaScript.

✨ Key Features
Real-time Validation: Instantly checks the validity of any email address upon submission.


Comprehensive Checks: Performs multiple validation checks, including syntax, domain, MX records, and SMTP verification.



Detailed Results: Provides a complete breakdown of the validation result, including the email's state (deliverable, undeliverable), score, and reason.


User-Friendly Interface: A clean and simple web interface requiring no installation for end-users.



Responsive Design: The layout adapts for a seamless experience on both desktop and mobile devices.

🛠️ Technologies Used
Frontend: HTML5, CSS3, JavaScript (Vanilla)

API: emailvalidation.io API

🚀 Setup and Installation
To run this project locally, follow these simple steps:

Clone the repository:

Bash

git clone https://github.com/your-username/iValidate.git
cd iValidate
Get your API Key:

Sign up on emailvalidation.io to get a free API key.

Add your API key to the project:

Open the index.js file.

Find the line with the 

key variable (line 19).

Replace the placeholder API key with your own key:

JavaScript

const key = "YOUR_API_KEY_HERE";
Run the application:

Simply open the index.html file in your web browser. No complex setup or server is needed.

Usage
Launch the application by opening the index.html file.

Enter the email address you wish to validate in the input field.

Click the "Submit" button.



The detailed validation results will appear in the "Your Results" section below the form<img width="1917" height="922" alt="Screenshot 2025-09-21 235458" src="https://github.com/user-attachments/assets/8f146b5f-4bb1-452c-bec0-716d36ee0fe2" />
