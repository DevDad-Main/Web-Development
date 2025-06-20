// Import core Node.js modules
const http = require("http"); // To create an HTTP server
const fs = require("fs"); // To interact with the file system (read files)
const path = require("path"); // To work with file/directory paths

const port = 3001; // Port number for the server

// Create the server
const server = http.createServer((req, res) => {
  // 🧭 Resolve the file path the user requested

  // If the URL is "/", serve "index.html"; otherwise serve the file they requested (e.g., "/style.css")
  const filePath = path.join(
    __dirname, // __dirname is the current folder where this script runs
    req.url === "/" ? "index.html" : req.url, // fallback to index.html for homepage
  );

  console.log(filePath); // Log the resolved file path to the console

  // 🧱 Determine the file extension (e.g., .html, .js)
  const extName = String(path.extname(filePath).toLowerCase());

  // 📦 Define a map of known file types and their MIME types
  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "text/png",
  };

  // 📎 If the extension is recognized, use the corresponding content type
  // Otherwise default to a generic binary stream
  const contentType = mimeTypes[extName] || "application/octet-stream";

  // 📖 Read the file from the file system
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // 📛 If file not found
      if (err.code === "ENOENT") {
        res.writeHead(404, {
          "content-type": "text/html",
        });
        res.end("404: File Not Found Mush"); // Custom 404 message
      } else {
        // 💥 Other server errors
        res.writeHead(500);
        res.end(`Server error: ${err.code}`);
      }
    } else {
      // ✅ Success! Send the file content with correct MIME type
      res.writeHead(200, { "content-type": contentType });
      res.end(content, "utf-8");
    }
  });
});

// 🚀 Start the server
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
