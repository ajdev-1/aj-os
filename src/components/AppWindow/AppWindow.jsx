import './AppWindow.scss';
import React from 'react';
import { Rnd } from 'react-rnd';
import Fab from '@mui/material/Fab';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import GitHubIcon from '@mui/icons-material/GitHub';
import { faClose, faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AppWindow extends React.Component {

    constructor(props) {
        super(props);

        /**
         * Structure of appParams:
         * - colour: Object
         *      - isRadiant: bool
         *      - colour: string
         * - description: string
         * - disableDragging: bool
         * - enableDragging: bool
         * - logo: Object (FontAwesome)
         * - name: string
         */
        this.appParams = props.appParams;

        this.appWindowHeaderRef = React.createRef();
        this.appWindowContentRef = React.createRef();
        this.appWindowContentListRef = React.createRef();
        this.appWindowRef = React.createRef();

        this.state = {
            isInitialized: false,
            appWindowHeight: "500px",
            appWindowWidth: "300px",
            needAppWindowResize: false,
            isMaximized: false,
            isDeviceDesktop: window.innerWidth > 1280
        }
    }

    redirectToAppLink = (paperLink) => {
        const aTag = document.createElement("a");
        aTag.rel = "noopener";
        aTag.target = "_blank";
        aTag.href = typeof paperLink == "string"? this.appParams.link.paper : this.appParams.link.whereToGo;
        aTag.click();
    }

    closeWindow = () => {
        this.props.onAppInstanceToggled('close', this.appParams)
    }

    maximizeWindow = () => {
        this.adjustAppWindowHeight();
        this.appWindowRef.updateSize({ width: "100vw", height: "90vh" });
        this.appWindowRef.resizableElement.current.top = "5rem";
        this.appWindowRef.resizableElement.current.left = "0rem";
        

        this.setState({
            isMaximized: true
        });
    }

    minimizeWindow = () => {
        this.adjustAppWindowHeight();
        this.appWindowRef.updateSize({ width: 500, height: 300 });
        

        this.setState({
            isMaximized: false
        });
    }

    adjustAppWindowHeight = () => {
        const newHeight = `${this.appWindowRef.resizableElement.current.clientHeight}px`;

        this.setState({
            appWindowHeight: newHeight,
            needAppWindowResize: true
        });
    }

    componentDidMount() {
        if (!this.state.isInitialized) {
            this.appWindowHeaderRef.current.style.background = this.appParams.colour.colour;
            //this.appWindowHeaderRef.current.style.background = "rgb(188, 188, 188)";

            //Dynamically set the height of the content wrapper, to adjust the scrollbar
            this.appWindowContentRef.current.style.height = this.state.appWindowHeight;
            this.setState({
                isInitialized: true
            })
        }

        if (!this.state.isDeviceDesktop) {
            this.adjustAppWindowHeight();
        }
    }

    componentDidUpdate() {
        if(this.state.needAppWindowResize) {
            console.log( this.state.appWindowHeight);
            this.appWindowContentRef.current.style.height = this.state.appWindowHeight;

            this.setState({
                needAppWindowResize: false
            });
        }
    }
    
    render(){
        return (
            <div id="appWindowWrapper">
                <Rnd
                    onResizeStop={this.adjustAppWindowHeight}
                    className="appWindow"
                    id="appWindow"

                    ref={c => { this.appWindowRef = c; }}
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
                        <div className="appWindowHeaderCloseTitle">
                            {this.appParams.name}
                        </div>
                        {
                            this.state.isDeviceDesktop && !this.state.isMaximized?
                                <div onClick={this.maximizeWindow} className="appWindowHeaderBtn">
                                    <FontAwesomeIcon icon={faMaximize}/>
                                </div> : null
                        }
                        {
                            this.state.isDeviceDesktop && this.state.isMaximized?
                                <div onClick={this.minimizeWindow} className="appWindowHeaderBtn">
                                    <FontAwesomeIcon icon={faMinimize}/>
                                </div> : null
                        }
                        <div onClick={this.closeWindow} className="appWindowHeaderBtn">
                            <FontAwesomeIcon icon={faClose}/>
                        </div>
                    </div>
                    <div ref={this.appWindowContentRef} className="appWindowContent">
                        {/* GitHub Project*/}
                        {
                            this.appParams.link.whereToGo.includes('git')?
                                <Fab className="fabBtn fabBtnFirst" onClick={this.redirectToAppLink} color="info" variant="extended">
                                    <GitHubIcon sx={{ mr: 1 }} />
                                    Open GitHub
                                </Fab> : null
                        }

                        {/* BEE Project*/}
                        {
                            this.appParams.link.whereToGo.includes('www.umwelt-campus.de')?
                                <Fab className="fabBtn fabBtnFirst" onClick={this.redirectToAppLink} color="warning" variant="extended">
                                    <NewspaperIcon sx={{ mr: 1 }} />
                                    Open press article
                                </Fab> : null
                        }
                        
                        {
                            this.appParams.link.paper?
                                <Fab className="fabBtn fabBtnSecond" onClick={() => {
                                    this.redirectToAppLink(this.appParams.link.paper);
                                }} color="primary" variant="extended">
                                    <OpenInNewIcon sx={{ mr: 1 }} />
                                    Open IEEE paper
                                </Fab> : null
                        }
                        
                    </div>
                </Rnd>
            </div>
        )
    }
}

export default AppWindow;