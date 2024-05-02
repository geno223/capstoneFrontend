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
export const updateAction = async ({ request, params }) => {
    const formData = await request.formData() //the request object has data for forms. We can access it. 
    const updatedApparel = {
        gender: formData.get('gender'), //we can get the value of each form field by using the .get(<value of name ('name') property on the input>)
        tops: formData.get('tops'),
        bottoms: formData.get('bottoms'),
        image: formData.get('image'), //we can get the value of each form field by using the .get(<value of name ('image') property on the input>)
        price: formData.get('price'), //we can get the value of each form field by using the .get(<value of name('title')  property on the input>)
    }

    await fetch(`${baseUrl}/apparel/${params.id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedApparel)
    })

    return redirect('/')
}

export const createAction = async ({ request }) => {
    const formData = await request.formData() //the request object has data for forms. We can access it. 
    const createdApparel = {
        gender: formData.get('gender'), //we can get the value of each form field by using the .get(<value of name ('name') property on the input>)
        tops: formData.get('tops'),
        bottoms: formData.get('bottoms'),
        image: formData.get('image'), //we can get the value of each form field by using the .get(<value of name ('image') property on the input>)
        price: formData.get('price'), 
    }

    await fetch(`${baseUrl}/apparel`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createdApparel)
    })

    return redirect('/')
}


//added this new deleteAction funciton
export const deleteAction = async ({params}) => {
    await fetch(`${baseUrl}/apparel/${params.id}`, {
        method: 'delete'
    });

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
    //saving token to browser local storage
    localStorage.setItem('token', data.token)

    return redirect('/')
}
