import React from "react"
import NavBar from "./NavBar"

function Login(){
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            <main>
                <h1>Login</h1>
                <form>
                    <div>
                        <lable for="username:"></lable>
                        <input id="username" type="text" name="username" placeholder="username"></input>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </main>
        </div>
    )
}
export default Login;