import './StatusBar.scss';
import React from 'react';

class StatusBar extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className="statusBarWrapper">
                <div id="date">Thu 9 Apr 10:30 PM</div>
            </div>
        )
    }
}

export default StatusBar;