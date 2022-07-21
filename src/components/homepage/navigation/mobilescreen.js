import React from 'react'

import SideBar from './sidebar'

function mobilescreen() {

    return (
        <>
            <header className="absolute top-0 w-screen min-h-[5em] z-30 backdrop-blur-sm">
                <div className="flex flex-row relative w-full min-h-[5em] gap-[6em] justify-around items-center place-items-center">
                    <a href="/" className="outline-none">
                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 488" className='w-[80px] h-[80px]' >
                            <title>Logo</title>
                            <style >
                                {`.s0 {fill: #000000 }`}
                                {`.s1 {fill: #802d40 }`}
                                {`.s2 {fill: #5b1a2 }`}
                                {`.s3 {fill: #dedee1 }`}
                                {`.s4 {fill: #000000;stroke: #dcba62;stroke-width: 3 }`}
                                {`.s5 {opacity: .5;fill: #ffffff }`}
                            </style>
                            <path id="Shape 1" className="s0" d="m158.6 211.6c28.2 23.7 36 35.1 35.4 69.4-0.6 35.2-11.5 52.8-39.5 69.4-44.1 26.2-101.7 10.9-123.2-23.8-23.4-37.8-2.9-99 46.3-128.6 16.2-9.8 23.5-6.9 44.9-2.7 18.9 3.7 21.7 4.3 36.1 16.3z" />
                            <path id="Shape 1 copy" className="s0" d="m427.6 207.6c28.2 23.7 36 35.1 35.4 69.4-0.6 35.2-11.5 52.8-39.5 69.4-44.1 26.2-101.7 10.9-123.2-23.8-23.4-37.8-2.9-99 46.3-128.6 16.2-9.8 23.5-6.9 44.9-2.7 18.9 3.7 21.7 4.3 36.1 16.3z" />
                            <g id="ShoeLayer">
                                <path id="Layer" className="s1" d="m49.5 291.1c0 0-11.6-18.5 2.3-41.6 0 0 5-7 6.9 4.6 0 0 4.9 14 29.8-6.9 0 0 7.5-5.3 11.5-2.3 4 3 39.1 24.8 41.3 25.2 1.1 0.3 7 2.9 12.2 5.3 4.1 1.9 8.3 3.4 12.4 5 3.7 1.4 7.5 4.7 7.5 10.7 0 0-123.9 0-123.9 0z" />
                                <path id="Layer" className="s2" d="m58.3 262.4v-10.4q0.2 0.9 0.4 2.1c0 0 4.4 12.6 26.1-4v12.3c0 2.4-1.9 4.4-4.4 4.4h-17.7c-2.4 0-4.4-2-4.4-4.4z" />
                                <path id="Layer" className="s2" d="m76 293.3c-0.6 0-1.1-0.2-1.6-0.6-0.8-0.9-0.8-2.3 0-3.1l28.8-28.8c0.9-0.9 2.3-0.9 3.1 0 0.9 0.9 0.9 2.3 0 3.1l-28.7 28.8c-0.5 0.4-1 0.6-1.6 0.6z" />
                                <path id="Layer" className="s2" d="m87.1 293.3c-0.6 0-1.2-0.2-1.6-0.6-0.9-0.9-0.9-2.3 0-3.1l24.3-24.4c0.9-0.8 2.3-0.8 3.2 0 0.8 0.9 0.8 2.3 0 3.1l-24.4 24.4c-0.4 0.4-1 0.6-1.5 0.6z" />
                                <path id="Layer" className="s2" d="m98.1 293.3c-0.5 0-1.1-0.2-1.5-0.6-0.9-0.9-0.9-2.3 0-3.1l19.9-20c0.8-0.8 2.2-0.8 3.1 0 0.9 0.9 0.9 2.3 0 3.2l-19.9 19.9c-0.4 0.4-1 0.6-1.6 0.6z" />
                                <path id="Layer" className="s2" d="m88.5 247.2c0 0 7.5-5.3 11.5-2.3 4 3 39.1 24.8 41.3 25.2 0.7 0.2 3.3 1.3 6.5 2.7l-1.2 1.8c-3.4 5.5-10.6 7.1-16.1 3.7l-45.3-28.5q1.6-1.2 3.3-2.6z" />
                                <path id="Layer" className="s1" d="m109.2 260.1c-0.6 0-1.1-0.2-1.6-0.6-0.8-0.9-0.8-2.3 0-3.1l6.7-6.7c0.8-0.8 2.2-0.8 3.1 0 0.9 0.9 0.9 2.3 0 3.2l-6.6 6.6c-0.5 0.4-1 0.6-1.6 0.6z" />
                                <path id="Layer" className="s1" d="m118 264.6c-0.5 0-1.1-0.2-1.5-0.7-0.9-0.8-0.9-2.2 0-3.1l6-6.1c0.9-0.8 2.3-0.8 3.2 0 0.8 0.9 0.8 2.3 0 3.2l-6.1 6c-0.4 0.5-1 0.7-1.6 0.7z" />
                                <path id="Layer" className="s1" d="m126.9 271.2c-0.6 0-1.1-0.2-1.6-0.6-0.8-0.9-0.8-2.3 0-3.2l6.6-6.5c0.9-0.9 2.3-0.9 3.1 0 0.9 0.8 0.9 2.2 0 3.1l-6.5 6.6c-0.5 0.4-1 0.6-1.6 0.6z" />
                                <path id="Layer" className="s3" d="m49.4 291.1h124c-0.1 9.6-11.5 8.9-11.5 8.9h-112.5c-1.2 0-2.2-1-2.2-2.2v-4.5c0-1.2 1-2.2 2.2-2.2z" />
                            </g>
                            <g id="ShoeLayer copy">
                                <path id="Layer" className="s1" d="m319.5 291.1c0 0-11.6-18.5 2.3-41.6 0 0 5-7 6.9 4.6 0 0 4.9 14 29.8-6.9 0 0 7.5-5.3 11.5-2.3 4 3 39.1 24.8 41.3 25.2 1.1 0.3 7 2.9 12.2 5.3 4.1 1.9 8.3 3.4 12.4 5 3.7 1.4 7.5 4.7 7.5 10.7 0 0-123.9 0-123.9 0z" />
                                <path id="Layer" className="s2" d="m328.3 262.4v-10.4q0.2 0.9 0.4 2.1c0 0 4.4 12.6 26.1-4v12.3c0 2.4-1.9 4.4-4.4 4.4h-17.7c-2.4 0-4.4-2-4.4-4.4z" />
                                <path id="Layer" className="s2" d="m346 293.3c-0.6 0-1.1-0.2-1.6-0.6-0.8-0.9-0.8-2.3 0-3.1l28.8-28.8c0.9-0.9 2.3-0.9 3.1 0 0.9 0.9 0.9 2.3 0 3.1l-28.7 28.8c-0.5 0.4-1 0.6-1.6 0.6z" />
                                <path id="Layer" className="s2" d="m357.1 293.3c-0.6 0-1.2-0.2-1.6-0.6-0.9-0.9-0.9-2.3 0-3.1l24.3-24.4c0.9-0.8 2.3-0.8 3.2 0 0.8 0.9 0.8 2.3 0 3.1l-24.4 24.4c-0.4 0.4-1 0.6-1.5 0.6z" />
                                <path id="Layer" className="s2" d="m368.1 293.3c-0.5 0-1.1-0.2-1.5-0.6-0.9-0.9-0.9-2.3 0-3.1l19.9-20c0.8-0.8 2.2-0.8 3.1 0 0.9 0.9 0.9 2.3 0 3.2l-19.9 19.9c-0.4 0.4-1 0.6-1.6 0.6z" />
                                <path id="Layer" className="s2" d="m358.5 247.2c0 0 7.5-5.3 11.5-2.3 4 3 39.1 24.8 41.3 25.2 0.7 0.2 3.3 1.3 6.5 2.7l-1.2 1.8c-3.4 5.5-10.6 7.1-16.1 3.7l-45.3-28.5q1.6-1.2 3.3-2.6z" />
                                <path id="Layer" className="s1" d="m379.2 260.1c-0.6 0-1.1-0.2-1.6-0.6-0.8-0.9-0.8-2.3 0-3.1l6.7-6.7c0.8-0.8 2.2-0.8 3.1 0 0.9 0.9 0.9 2.3 0 3.2l-6.6 6.6c-0.5 0.4-1 0.6-1.6 0.6z" />
                                <path id="Layer" className="s1" d="m388 264.6c-0.5 0-1.1-0.2-1.5-0.7-0.9-0.8-0.9-2.2 0-3.1l6-6.1c0.9-0.8 2.3-0.8 3.2 0 0.8 0.9 0.8 2.3 0 3.2l-6.1 6c-0.4 0.5-1 0.7-1.6 0.7z" />
                                <path id="Layer" className="s1" d="m396.9 271.2c-0.6 0-1.1-0.2-1.6-0.6-0.8-0.9-0.8-2.3 0-3.2l6.6-6.5c0.9-0.9 2.3-0.9 3.1 0 0.9 0.8 0.9 2.2 0 3.1l-6.5 6.6c-0.5 0.4-1 0.6-1.6 0.6z" />
                                <path id="Layer" className="s3" d="m319.4 291.1h124c-0.1 9.6-11.5 8.9-11.5 8.9h-112.5c-1.2 0-2.2-1-2.2-2.2v-4.5c0-1.2 1-2.2 2.2-2.2z" />
                            </g>
                            <path id="XMLID_1738_" fillRule="evenodd" className="s4" d="m487.6 275.9c0 60-48.8 108.8-108.8 108.8-55.4 0-101.2-41.7-107.9-95.3-8 4.6-17.2 7.2-27.1 7.2-9.8 0-19.1-2.6-27.1-7.2-6.6 53.7-52.5 95.4-107.9 95.4-60 0-108.8-48.8-108.8-108.8 0-30.7 12.7-58.4 33.2-78.2 2.7-2.7 5.6-5.2 8.6-7.5l41-34.8c15.7-11 34.6-18.2 55-19.6l22.7-22.9h0.2c7-6.4 16.2-10.2 26.3-10.2 17.3 0 32 11.3 37.1 26.9 5.6-3.5 12.2-5.6 19.3-5.6 1 0 2.1 0 3.1 0.1 6.3 0.4 12.1 2.3 17.1 5.5 5-15.7 19.7-27 37.1-27 10.1 0 19.4 3.9 26.3 10.2h0.2l22.7 22.9c20.4 1.4 39.2 8.5 55 19.6l41 34.8c3 2.4 5.9 4.9 8.6 7.5 20.5 19.8 33.2 47.5 33.1 78.2zm-137.7-140.2l2.2 2.2-2.2-2.1q0 0 0-0.1zm-214.3 2.3l2.2-2.2q0 0.1 0 0.1zm47.4 138c0-41-33.2-74.2-74.2-74.2-41 0-74.2 33.2-74.2 74.2 0 41 33.2 74.2 74.2 74.2 41 0 74.3-33.3 74.2-74.2zm85-34.3c0-13.3-10.8-24.1-24.1-24.1-13.3 0-24.1 10.8-24.1 24.1 0 13.3 10.8 24.1 24.1 24.1 13.3 0 24.1-10.8 24.1-24.1zm185.2 34.3c0-41-33.2-74.2-74.2-74.2-41 0-74.2 33.2-74.2 74.2 0 41 33.2 74.2 74.2 74.2 41 0 74.2-33.3 74.2-74.2z" />
                            <path id="XMLID_1737_" className="s5" d="m384.2 235.6c0 6.1-5 11.1-11.1 11.1-13.3 0-24.2 10.9-24.2 24.2 0 6.1-5 11.1-11.1 11.1-6.1 0-11.1-5-11.1-11.1 0-25.5 20.7-46.3 46.3-46.3 6.1 0 11.1 4.9 11.2 11z" />
                            <path id="XMLID_1745_" className="s5" d="m110 236.6c0 6.1-5 11.1-11.1 11.1-13.3 0-24.2 10.9-24.2 24.2 0 6.1-5 11.1-11.1 11.1-6.1 0-11.1-5-11.1-11.1 0-25.5 20.7-46.3 46.3-46.3 6.1 0 11.1 4.9 11.2 11z" />
                        </svg>
                    </a>
                    <button onClick={() => document.getElementById("_sideBar").classList.remove("translate-x-[100em]") }>
                        <svg enableBackground="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" className='w-[30px] h-[30px]' xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m26 16c0 1.104-0.896 2-2 2h-16c-1.104 0-2-0.896-2-2s0.896-2 2-2h16c1.104 0 2 0.896 2 2z" /><path d="m26 8c0 1.104-0.896 2-2 2h-16c-1.104 0-2-0.896-2-2s0.896-2 2-2h16c1.104 0 2 0.896 2 2z" /><path d="m26 24c0 1.104-0.896 2-2 2h-16c-1.104 0-2-0.896-2-2s0.896-2 2-2h16c1.104 0 2 0.896 2 2z" /></svg>
                    </button>

                </div>

            </header>
            <SideBar />
        </>
    )
}

export default mobilescreen