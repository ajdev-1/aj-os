import './StatusBar.scss';
import React from 'react';

import Fab from '@mui/material/Fab';
import GitHubIcon from '@mui/icons-material/GitHub';


class StatusBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        setInterval(() => this.setState({
            time: new Date()
        }), 1000);
    }
    
    render(){
        const hour = this.state.time.getHours()
		const min = this.state.time.getMinutes()
		const sec = this.state.time.getSeconds()

        return (
            <div className="statusBar">
                <div className="statusBarWrapper">
                    <div id="date">
                        {hour % 12}:{(min < 10 ? '0' + min : min)}:{(sec < 10 ? '0' + sec : sec)} {hour < 12 ? 'am' : 'pm'}
                    </div>
                </div>
                <div className="sourceCodeWrapper">
                    <Fab className="fabBtnStatusbar" onClick={() => {
                        const aTag = document.createElement("a");
                        aTag.rel = "noopener";
                        aTag.target = "_blank";
                        aTag.href = "https://github.com/ajdev-1/aj-os";
                        aTag.click();
                    }} color="info" variant="extended">
                        <GitHubIcon sx={{ mr: 1 }} />
                        View OS code
                    </Fab>
                </div>
            </div>

        )
    }
}

export default StatusBar;