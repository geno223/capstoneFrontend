import {
    createBrowserRouter, //allows us to define paths in react router (the url, our loaders, our actions)
    createRoutesFromElements, //is a helper function that that allows paths to be create using Element for example we will be using <Route>
    Route //will be put into the helper 
} from 'react-router-dom';
import App from './App';
import Landing from './pages/Index';
import Show from './pages/Show';
import Login from './pages/Login';
import { apparelLoader, clothingLoader, mensLoader, womensLoader} from './loaders';
import Signup from './pages/Signup';
import { signupAction, loginAction, updateAction, deleteAction, createAction } from './actions';
import Mens from './pages/Mens';
import Womens from './pages/Womens';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App /> }>
            <Route path='womens' element={<Womens/>} loader={womensLoader}/>
            <Route path='mens' element={<Mens/>} loader={mensLoader}/>
            <Route path='signup' element={<Signup/>} action={signupAction}/> 
            <Route path='login' element={<Login/>} action={loginAction}/>
            <Route path='' element={<Landing/>} loader={apparelLoader}/>
            <Route path=':id' element={<Show/>} loader={clothingLoader}/>
            <Route path='create' action={createAction}/> {/*this is an action and doesnt render an element*/}
            <Route path='update/:id' action={updateAction}/> 
            <Route path='delete/:id' action={deleteAction}/>
        </Route>
    )
)

export default router;