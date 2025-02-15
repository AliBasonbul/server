module.exports = (io, userService) => {
    io.on("connection", (socket) => {
        console.log("User connected:", socket.id);

        socket.on("join", (username) => {
            const users = userService.addUser(socket.id, username);
            io.emit("activeUsers", users);
        });

        socket.on("sendMessage", (data) => {
            io.emit("receiveMessage", data);
        });

        socket.on("disconnect", () => {
            const users = userService.removeUser(socket.id);
            io.emit("activeUsers", users);
            console.log("User disconnected:", socket.id);
        });
    });
};
