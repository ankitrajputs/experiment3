import express from 'express'
const app = express()

app.use(express.urlencoded({ extended: false }));

// Middleware to ignore the favicon request
app.use((req, res, next) => {
    if (req.url === '/favicon.ico') {
        return res.status(204).end();  // End response for favicon.ico without further logging
    }
    next();
});

// First middleware
app.use((req, res, next) => {
    console.log("hello m1", req.url);  // Log the URL of the incoming request
    next();
})

// Second middleware
app.use((req, res, next) => {
    console.log("hello m2", req.url);  // Log the URL again
    res.end("m2 ends the response");
});

app.listen(3000, () => console.log("app is running on port 3000"));
