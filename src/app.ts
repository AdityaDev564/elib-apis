import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";

const app = express();

// Routes
// HTTP methods: GET, POST, PUT, DELETE, PATCH
app.get("/", (req, res) => {
  res.json({ message: "Welcome to elib apis" });
});

// Routes
app.use("/api/users", userRouter);

// Global error handler
app.use(globalErrorHandler);

export default app;
