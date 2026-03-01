export const login = async (username, password) => {
    // In the future, use fetch() or axios here
    return new Promise((resolve) => {
        setTimeout(() => resolve({ success: true, user: { name: username } }), 1000);
    });
};