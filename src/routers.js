import {
    createBrowserRouter, //allows us to define paths in react router (the url, our loaders, our actions)
    createRoutesFromElements, //is a helper function that that allows paths to be create using Element for example we will be using <Route>
    Route //will be put into the helper 
} from 'react-router-dom';
import App from './App';
import Landing from './pages/Index';
import Show from './pages/Show'
import { apparelLoader } from './loaders';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App /> }>
            <Route path='' element={<Landing/>} loader={apparelLoader}/>
            <Route path=':id' element={<Show/>}/>
            <Route path='create'/> {/*this is an action and doesnt render an element*/}
            <Route path='update/:id'/> {/*this is an action and doesnt render an element*/}
            <Route path='delete/:id'/> {/*this is an action and doesnt render an element*/}
        </Route>
    )
)

export default router;