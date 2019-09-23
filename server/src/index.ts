import express from "express";
import path from "path";
import Response from "./response";

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
app.static(basePath);

router.route("/info").get((req, res) => {
    res.json(Response.createDefault({
        version: 1
    }));
});
