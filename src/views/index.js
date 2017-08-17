

import React from 'react';
import Header from '../components/Header.js';

var Index = React.createClass({
    render: function() {
        return (
            <div>
                <Header></Header>
                <div className="content">
                    <div className="slider-box" id="sliderBox">
                        <ul className="slider-list">
                            <li className="slider-item"><img src={require('../images/index_1.jpg')} alt="1" /></li>
                            <li className="slider-item"><img src={require('../images/index_2.jpg')} alt="2" /></li>
                            <li className="slider-item"><img src={require('../images/index_3.jpg')} alt="3" /></li>
                            <li className="slider-item"><img src={require('../images/index_4.jpg')} alt="4" /></li>
                        </ul>
                        <div className="slider-links"></div>
                        <div className="slider-dots"></div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Index;
