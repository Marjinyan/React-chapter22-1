import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contacts from './components/Contacts';
import Home from './components/Home';

export const MyRoutes = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path='' element={<Home/>}>
                <Route path='about' element={<About/>} />
                <Route path='contacts' element={<Contacts/>} />
            </Route>
            <Route path='*' element={<h1>NOT FOUND</h1>} />
        </Routes>
    </BrowserRouter>
    );
}