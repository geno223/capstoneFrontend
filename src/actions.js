import { redirect } from "react-router-dom";
const baseUrl = process.env.REACT_APP_URL;

export const signupAction = async ({request}) => {
    const formData  = await request.formData();

    const newUser = {
        username: formData.get('username'),
        password: formData.get('password')
    }
    const response = await fetch(`${baseUrl}/signup`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json"
        }

    })

    if(response.status >= 400){
    alert(response.statusText)
    return redirect('/signup')
    }

    return redirect('/')
}

export const loginAction = async ({request}) => {
    const formData  = await request.formData();

    const newUser = {
        username: formData.get('username'),
        password: formData.get('password')
    }
    const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json"
        }

    })

    if(response.status >= 400){
    alert(response.statusText)
    return redirect('/signup')
    }
    const data = await response.json();
    console.log(data)
    localStorage.setItem('token', data.token)

    return redirect('/')
}
