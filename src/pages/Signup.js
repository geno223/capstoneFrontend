import { Form, Link } from "react-router-dom";

const Signup = () => {
    return (
    <div>
        <h1>Sign Up Form</h1>
        <Form action="/signup" method="POST">
            <label>username</label>
            <input type='text' name='username' placeholder="username"/>

            <label>password</label>
            <input type='password' name='password' placeholder="password"/>
            
            <input type='submit' value='sign up'/>
        </Form>
        <Link to="/">
                <button>Go Back</button>
            </Link>
    </div>
    )
}

export default Signup;