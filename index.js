import { user } from "./UserDatabase.js";
let username = '';
let password = '';
let re_password = '';
let submit_button = document.querySelector('.submit');
class Create_Account {
    constructor(username, password, re_password) {
        this.username = username;
        this.password = password;
        this.re_password = re_password;
    }
    adduser() {
        user.push({
            username: this.username,
            password: this.password,
            re_password: this.re_password
        })
       this.localst();
    }

    localst()
    {
        localStorage.setItem('user', JSON.stringify(user));
        console.log(JSON.parse(localStorage.getItem('user')));
    }
}


submit_button.addEventListener('click', () => {
    username = document.querySelector('.name').value;
    password = document.querySelector('.password').value;
    re_password = document.querySelector('.repassword').value;
    if (password === re_password) {
        let Account = new Create_Account(username, password, re_password);
        Account.adduser();

        alert('Account Created Successfully');
    }
    else {
        alert('Your password doesnt match');
    }

})
