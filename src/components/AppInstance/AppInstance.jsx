import './AppInstance.scss';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from '@mui/material';


class AppInstance extends React.Component {

    constructor(props) {
        super(props);

        this.appLogoRef = React.createRef();

        this.state = {
            appLogo: props.logo,
            appText: props.text,
            appTooltip: props.tooltip,
            appLink: props.link,
            appColour: props.colour,
            isAppInitialized: false
        }
    }

    redirectToAppLink = () => {
        if(this.state.appLink.isExternal) {
            const aTag = document.createElement("a");
            aTag.rel = "noopener";
            aTag.target = "_blank";
            aTag.href = this.state.appLink.whereToGo;
            aTag.click();
        } else {
            this.props.onAppInstanceToggled('open', {
                name: this.state.appText,
                description: 'TBD',
                disableDragging: window.innerWidth <= 1280,
                enableResizing: window.innerWidth > 1280,
                colour: this.state.appColour,
                logo: this.state.appLogo
            })
        }
    }

    componentDidMount() {
        if(this.state.appColour.isRadiant) {
            this.appLogoRef.current.style["background"] = this.state.appColour.colour;
        } else if (this.state.appColour.colour !== ""){
            this.appLogoRef.current.style["background-color"] = this.state.appColour.colour;
        }
        
        if(typeof this.state.appLogo === "string") {
            document.body.style.backgroundImage = this.state.appLogo;
            this.appLogoRef.current.style.backgroundImage = this.state.appLogo;
        }

        this.setState({
            isAppInitialized: true
        });
    }
    
    render(){
        const appLogoElement = 
            <div onClick={this.redirectToAppLink} ref={this.appLogoRef} id="appLogo">
                { typeof this.state.appLogo !== "string"? <FontAwesomeIcon icon={this.state.appLogo}/> : null } 
            </div>;

        return (
            <div className="appInstanceWrapper">
                    {this.state.appTooltip === ""? appLogoElement :
                        <Tooltip  title={this.state.appTooltip} placement="right" >
                            {appLogoElement}
                        </Tooltip>}
                <div id="appText">{this.state.appText}</div>
            </div>
        );
    }
}

export default AppInstance;