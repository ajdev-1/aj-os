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
            // Open modal/ whatever... TBD
        }
    }

    componentDidMount() {
        if(this.state.appColour.isRadiant) {
            this.appLogoRef.current.style["background"] = this.state.appColour.colour;
        } else if (this.state.appColour.colour !== ""){
            this.appLogoRef.current.style["background-color"] = this.state.appColour.colour;
        }
        
        if(typeof this.state.appLogo === "string") {
            console.log('setting background', this.state.appLogo);
            this.appLogoRef.current.style.backgroundImage = this.state.appLogo;
        }

        this.setState({
            isAppInitialized: true
        });
    }
    
    render(){
        const app =
            <div onClick={this.redirectToAppLink} className="appInstanceWrapper">
                <div ref={this.appLogoRef} id="appLogo">
                    { typeof this.state.appLogo !== "string"? <FontAwesomeIcon icon={this.state.appLogo}/> : null } 
                </div>
                <div id="appText">{this.state.appText}</div>
            </div>;

        return (
            this.state.appTooltip === ""? app :
                <Tooltip  title={this.state.appTooltip} placement="right" >{app}</Tooltip>
        )
    }
}

export default AppInstance;