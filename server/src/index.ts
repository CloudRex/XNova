import express from "express";
import path from "path";
import Response from "./response";

const port: number = 80;

// Create the Express app.
const app = express();

// Create a Router instance.
const router = express.Router();

const basePath: string = path.resolve("..", "..", "dist", "public");

const resolveDist = (pathString: string): string => {
    return path.resolve(basePath, pathString);
};

// Attach the router.
app.use("/api", router);

// Setup static assets.
//app.static(basePath);

router.route("/info").get((req, res) => {
    res.json(Response.createDefault({
        version: 1
    }));
});

router.route("/auth").post((req, res) => {
    console.log(req.body);
});

// Begin listening.
app.listen(port);
console.log(`Server listening at port ${port}`);
