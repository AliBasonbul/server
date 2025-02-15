let activeUsers = [];

module.exports = {
    addUser: (socketId, username) => {
        if (!activeUsers.some(user => user.id === socketId)) {
            activeUsers.push({ id: socketId, username });
        }
        return activeUsers;
    },

    removeUser: (socketId) => {
        activeUsers = activeUsers.filter(user => user.id !== socketId);
        return activeUsers;
    },

    getUsers: () => activeUsers
};
