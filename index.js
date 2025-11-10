const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the public folder as before
app.use(express.static(path.join(__dirname, "public")));

// Also serve docs so design screenshots and notes are accessible at /docs/*
app.use("/docs", express.static(path.join(__dirname, "docs")));

app.get("/", (req, res) => {
  res.send("Server running — static files served from /public and /docs");
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
