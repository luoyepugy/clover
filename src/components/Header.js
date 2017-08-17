


import React from 'react';

var Header = React.createClass({
    render: function() {
        return (
            <div>
                <div className="header">
                    <div className="nav">
                        <div className="logo"><a title="首页" href="#/"><img src={require('../images/logo.png')} alt="logo" /></a></div>
                        <ul>
                            <li><a title="精选" href="#/recommend">精选</a></li>
                            <li><a title="风光" href="#/scenery">风光</a></li>
                            <li><a title="微距" href="#/macro">微距</a></li>
                            <li><a title="人物" href="#/person">人物</a></li>
                            <li><a title="联系我们" href="#/contact_us">联系我们</a></li>
                            <li className="sound"><span title="音频 开/关" className="soundOff j-sound"></span></li>
                        </ul>
                    </div>
                </div>
                <audio id="audio" preload="auto" loop="loop">
                    <source src={require('file-loader!../media/audio.mp3')} type="audio/mpeg" />
                </audio>
            </div>
        );
    }
});

export default Header;
