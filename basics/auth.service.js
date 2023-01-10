class AuthServcice{
    getLogin = (username, password) => {
        // logic 
        // username pwd => match 
        let user = {
            name: "Sandesh Bhattarai",
            username: "admin",
            password: 'admin123',
            role: "admin"
        }
        return user;
    }
}

// const auth_svc = new AuthServcice();
// let user_loggedin = auth_svc.getLogin("admin",'admin123');