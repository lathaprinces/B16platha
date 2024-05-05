class LoginPage {

    orangeHRMLogo() {

        return 'img[alt="company-branding"]'
    }

    usernameInput() {

        return 'input[placeholder="Username"]'
    }

    passwordInput() {

        return 'input[placeholder="Password"]'
    }

    loginBtn() {

        return 'button[type="submit"]'
    }
    loginerrorMessage(){

        return 'Invalid credentials'
}
}
const loginpage = new LoginPage()

export default loginpage