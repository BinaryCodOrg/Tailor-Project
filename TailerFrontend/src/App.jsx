

import React, { useEffect } from 'react'
import './App.css'
import ResourceBlock from './assets/ResourceBlock/ResourceBlock'
import { Route, Routes, useLocation } from 'react-router-dom'

import Aos from "aos";
import "aos/dist/aos.css";
import { Element, scroller } from 'react-scroll'
import LandingPage from './Components/Landing/LandingPage';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SelectedLang, WebContent } from './Store/Atom';
import Language from './assets/Language/Language';

function App() {

  let location = useLocation();

  let selectedLang = useRecoilValue(SelectedLang);
  let [webContent, setWebContent] = useRecoilState(WebContent);
  let Lang = Language;

  useEffect(() => {

    // let cLocation = location.pathname;

    // console.log(cLocation)

    // Automatically scroll to "test1" when the component mounts
    scroller.scrollTo("test1", {
      duration: 800, // Animation duration in milliseconds
      delay: 0, // Delay before scroll starts
      smooth: "easeInOutQuart", // Smooth scroll effect
      offset: -70, // Adjust for fixed headers (if any)
    });

  }, [location])

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);


  useEffect(() => {
    setWebContent(Lang[selectedLang]);
  }, [selectedLang])



  return (
    <div>
      <Element name="test1" className="element"></Element>
      <Routes>
        <Route path="/ResourceBlock/*" element={<ResourceBlock />} />
        <Route path="/*" element={<LandingPage />} />
      </Routes>
    </div>
  )
}

export default App
