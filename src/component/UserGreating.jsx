function UserGreeting({ name = "guess", isLoggedIn = false }) {
    

        if(isLoggedIn) {
            return <h1>Welcome back, {name}!</h1>;
        }
        else{
            return <h1>Welcome, Guess!</h1>;
        }

    
}

export default UserGreeting;