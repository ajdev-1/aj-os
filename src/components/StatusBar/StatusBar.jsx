import './StatusBar.scss';
import React from 'react';

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
            <div className="statusBarWrapper">
                <div id="date">
                    {hour % 12}:{(min < 10 ? '0' + min : min)}:{(sec < 10 ? '0' + sec : sec)} {hour < 12 ? 'am' : 'pm'}
                </div>
            </div>
        )
    }
}

export default StatusBar;