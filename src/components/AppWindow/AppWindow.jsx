import './AppWindow.scss';
import React from 'react';

import { Rnd } from 'react-rnd';

import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AppWindow extends React.Component {

    constructor(props) {
        super(props);
        this.appParams = props.appParams;

        this.appWindowHeaderRef = React.createRef();

        this.state = {
            isInitialized: false
        }
    }

    closeWindow = () => {
        this.props.onAppInstanceToggled('close', this.appParams)
    }

    componentDidMount() {
        console.log(this.appParams);
        if (!this.state.isInitialized) {
            this.appWindowHeaderRef.current.style.background = this.appParams.colour.colour;
            this.setState({
                isInitialized: true
            })
        }
    }
    
    render(){
        return (
            <div id="appWindowWrapper">
                <Rnd
                    className="appWindow"
                    disableDragging={this.appParams.disableDragging}
                    enableResizing={this.appParams.enableResizing}
                    default={
                        this.appParams.disableDragging? 
                            {
                                x: 0,
                                y: 0,
                                width: "100vw",
                                height: "90vh",
                            } : 
                            {
                                x: 0,
                                y: 0,
                                width: 960,
                                height: 540,
                            }
                    }
                >
                    <div ref={this.appWindowHeaderRef} className="appWindowHeader">
                        <div onClick={this.closeWindow} className="appWindowHeaderCloseBtn">
                            <FontAwesomeIcon icon={faClose}/>
                        </div>
                        <div className="appWindowHeaderCloseTitle">
                                {this.appParams.name}
                        </div>
                    </div>
                </Rnd>
            </div>
        )
    }
}

export default AppWindow;