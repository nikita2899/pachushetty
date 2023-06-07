import React from 'react';
import { Route, Routes } from "react-router-dom";
import LandingPage from './Components/Landing Page/LandingPage';
import  About  from './Components/About/About';
import Payments from './Components/Payments/Payment';
import Expeditions from './Components/Career/Expeditions/Expeditions';
import Treks from './Components/Career/Treks/Treks';
import Projects from './Components/Career/Upcoming Projects/Projects';
import Qualifications from './Components/Career/Qualifications/Qualifications';
import A2A from "./Components/Achievments&Awards/A&A/A&A";
import Media from './Components/Media/Media';
function AppRoutes(){
    return(
        <>
            <Routes>
                <Route>
                    <Route path='/' element={<LandingPage/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/payment' element={<Payments/>} />
                    <Route path='/expeditions' element={<Expeditions/>}/>
                    <Route path='/treks' element={<Treks/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/Qualifications' element={<Qualifications/>}/>
                    <Route path='/A&A' element={<A2A/>}/>
                    <Route path='/Media' element={<Media/>} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes;