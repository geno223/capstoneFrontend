import {
    createBrowserRouter, //allows us to define paths in react router (the url, our loaders, our actions)
    createRoutesFromElements, //is a helper function that that allows paths to be create using Element for example we will be using <Route>
    Route //will be put into the helper 
} from 'react-router-dom';
import App from './App';
import Landing from './pages/Index';
import Show from './pages/Show';
import Main from './pages/Main';
import Login from './pages/Login';
import { apparelLoader, clothingLoader} from './loaders';
import Signup from './pages/Signup';
import { signupAction, loginAction } from './actions';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App /> }>
            <Route path=''element={<Main/>}/>
            <Route path='signup' element={<Signup/>} action={signupAction}/>
            <Route path='login' element={<Login/>} action={loginAction}/>
            <Route path='dashboard' element={<Landing/>} loader={apparelLoader}/>
            <Route path=':id' element={<Show/>} loader={clothingLoader}/>
            <Route path='create'/> {/*this is an action and doesnt render an element*/}
            <Route path='update/:id'/> {/*this is an action and doesnt render an element*/}
            <Route path='delete/:id'/> {/*this is an action and doesnt render an element*/}
        </Route>
    )
)

export default router;