const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const userService = require("./services/userService");
const chatService = require("./services/chatService");
const dotenv = require('dotenv');

dotenv.config()

const port = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: `${process.env.ORIGIN_URL}`,
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.json());

// تحميل خدمة الدردشة وتمرير userService
chatService(io, userService);

server.listen(port, () => {
    console.log("Server running on port" + port);
});
