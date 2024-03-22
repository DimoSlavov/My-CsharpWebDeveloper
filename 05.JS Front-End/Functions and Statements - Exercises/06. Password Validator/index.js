
    function solve(password) {
        let valid = true;
        let messages = [];
        if (password.length < 6 || password.length > 10) {
            valid = false;
            messages.push("Password must be between 6 and 10 characters");
        } 
        if (!/^[a-zA-Z0-9]+$/.test(password)) {
            valid = false;
            messages.push("Password must consist only of letters and digits");
        }
        let digitCount = password.split('').filter(char => /[0-9]/.test(char)).length;
        if (digitCount < 2) {
            valid = false;
            messages.push("Password must have at least 2 digits");
        }
        if (valid) {
            console.log("Password is valid");
        } else {
            messages.forEach(message => console.log(message));
        }
    }
    solve('logIn'); 
solve('MyPass123'); 
solve('Pa$s$s'); 

