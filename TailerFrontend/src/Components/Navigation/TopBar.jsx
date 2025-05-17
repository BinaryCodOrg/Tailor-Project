import { Breadcrumb } from 'antd';
import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap';

import avatar1 from "../../assets/Images/logos/logo2.png"
import { FaHamburger, FaMoon, FaSun } from 'react-icons/fa';
import { TiThMenu } from 'react-icons/ti';
import { useLocation } from 'react-router-dom';
import CButton from '../../assets/Custom/CButton';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SelectedLang, WebContent } from '../../Store/Atom';

const TopBar = (props) => {
    let { collapsed, setCollapsed } = props;

    let [selectedLang, setSelectedLang] = useRecoilState(SelectedLang);
    let webContent = useRecoilValue(WebContent);


    let location = useLocation();

    let [breadcrumbs, setBreadcrumbs] = useState([""]);
    let [lightMode, setLightMode] = useState(false);

    useEffect(() => {
        // Remove the leading slash from the pathname and split it into an array
        const slicesArray = location.pathname.split("/");
        // console.log(slicesArray, "array");
        setBreadcrumbs(slicesArray)


    }, [location.pathname]); // Use location.pathname as the dependency to avoid unnecessary re-renders

    let renderHead = () => {
        const allEmpty = breadcrumbs.every(elem => elem === "");
        const displayText = allEmpty ? "DashBoard" : breadcrumbs[breadcrumbs.length - 1];

        // return (<h2 className='Head2'>{displayText}</h2>)
        return (<h2 className='Head2'>{webContent?.Pages?.[displayText] || ""}</h2>)

    }


    return (<div className='TopBarStyle'>
        <div className='mainContainer'>
            <div className='row justify-content-between'>
                <div className='col-md-4'>
                    <div className='d-flex flex-column justify-content-center'>

                        <Breadcrumb>
                            {breadcrumbs.map((elem, index) => {
                                if (index === 0) {
                                    return (<Breadcrumb.Item> {webContent?.Pages?.["DashBoard"] || ""}</Breadcrumb.Item>)
                                }
                                else {
                                    return (<Breadcrumb.Item>
                                        {webContent?.Pages[elem] || ""}
                                    </Breadcrumb.Item>)
                                }
                            })}

                        </Breadcrumb>
                        {renderHead()}
                    </div>
                </div>

                <div className='col-md-2 py-2'>
                    <div className='AdminControlSection shadow'>
                        <div className='w-25'>
                            <TiThMenu role='button' size={"20px"} onClick={() => { setCollapsed(!collapsed) }} />
                        </div>
                        <div className='w-25'>
                            {lightMode ?
                                <FaMoon role='button' size={"20px"} onClick={() => { setLightMode(!lightMode) }} />
                                :
                                <FaSun role='button' size={"20px"} onClick={() => { setLightMode(!lightMode) }} />
                            }
                        </div>

                        <div className='w-50'>
                            <CButton text={selectedLang}
                                styles={{ width: '100%' }}
                                callBackFunction={() => {
                                    let lan = [
                                        "eng", "urdu", "urEng"
                                    ]
                                    let currentIndex = lan.indexOf(selectedLang);
                                    let nextIndex = (currentIndex + 1) % lan.length;
                                    setSelectedLang(lan[nextIndex]);
                                }} />
                        </div>
                        {/**
                                <div className='w-25'>
                                <Image src={avatar1} alt={"userIcon"} fluid rounded height={"50px"} width={"50px"} />
                                </div>
                                */}
                    </div>
                </div>

            </div>
        </div>
    </div>);
}

export default TopBar
