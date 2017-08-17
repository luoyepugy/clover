


import React from 'react';
import Header from '../components/Header.js';

var Index = React.createClass({
    render: function() {
        return (
            <div>
                <Header></Header>
                <div><a href="#/">返回首页</a></div>
                <div>这是详情页</div>
            </div>
        );
    }
});

export default Index;
