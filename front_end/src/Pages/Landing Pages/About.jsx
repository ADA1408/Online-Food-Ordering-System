import React from 'react'
import image from '../../Image Component/image placeholder.jpeg';
import img1 from '../../Image Component/img1.jfif';
import img2 from '../../Image Component/img2.jpg';
import img3 from '../../Image Component/img3.jpeg';
import img4 from '../../Image Component/img4.jpg';

const About = () => {
    return (
        <div className='full'>
            <div className="groups">
                <h1>Lets Meet Our Team</h1>
                <div className='quarts'>
                    <div className="quart">
                        <h1>TAKE PLEASURE IN</h1>
                        <h1>HIS WORK LEADS TO</h1>
                        <h1>PERFECTION</h1>
                        <h3>-Aristotle</h3>
                    </div>
                    <div className="hire">
                        <h1>4 INTEGRATED PEOPLE</h1>
                        <h2>WANT TO JOIN US ?</h2>
                    </div>
                </div>
            </div>
            <div className='boxer'>
                <div className="st">
                    <div className="smallbox" id='num1'>
                        <div className="newer">
                            <div className="extents">
                                Project
                            </div>
                            <div className="extents">
                                2023
                            </div>
                        </div>
                    </div>
                    <div className="bigbox" id='num2'>
                        <img src={img3} />
                    </div>
                    <div className="midbox" id='num3'>
                        <div className="extent">
                            <div className="extents">
                                UI/UX
                            </div>
                            <div className="extents">
                                Designer
                            </div>
                        </div>
                    </div>
                    <div className="smallbox" id='num5'>
                        <h1>
                            Mentor
                        </h1>
                    </div>
                    <div className="midbox" id='num6'>
                        <div className="extent">
                            <div className="extents">
                                Backend
                            </div>
                            <div className="extents">
                                Developer
                            </div>
                        </div>
                    </div>
                    <div className="smallbox" id='num10'>
                        <h1>
                            MAKAUT
                        </h1>
                    </div>
                </div>
                <div className="nd">
                    <div className="midbox" id='num11'>
                        <div className="extent">
                            <div className="extents">
                                Database
                            </div>
                            <div className="extents">
                                Administrator
                            </div>
                        </div>
                    </div>
                    <div className="bigbox" id='num7'>
                        <img src={img1} />
                    </div>
                    <div className="bigbox" id='num8'>
                        <img src={img2} />
                    </div>
                    <div className="smallbox" id='num9'>
                        <h1>
                            FY23
                        </h1>
                    </div>
                </div>
                <div className="rd">
                    <div className="smallbox" id='num4'>
                        <img src={image} />
                    </div>
                    <div className="bigbox" id='num12'>
                        <img src={img4} />
                    </div>
                    <div className="midbox" id='num13'>
                        <div className="extent">
                            <div className="extents">
                                Frontend
                            </div>
                            <div className="extents">
                                Developer
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About