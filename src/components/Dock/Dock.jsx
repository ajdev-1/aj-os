import './Dock.scss';
import React from 'react';
import { 
    faGithub, 
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { 
    faPaperPlane,
    faNewspaper,
    faTrashCan,
    faBox,
    faBoxArchive,
    faPerson
} from '@fortawesome/free-solid-svg-icons';

import AppInstance from '../AppInstance/AppInstance';
import avatarImg from '../../assets/avatar.jpg';
import beePriceImg from '../../assets/price.jpg';

const BASE_PATH = `${window.location.protocol}//${window.location.host}`;

class Dock extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className="dockWrapper">
                <AppInstance
                    onAppInstanceToggled={this.props.onAppInstanceToggled}
                    text="Me"
                    //logo={`url("${BASE_PATH}${avatarImg}");`}
                    logo={faPerson}
                    link={{
                        isExternal: false,
                        whereToGo: ""
                    }}
                    tooltip=""
                    colour={{
                        isRadiant: false,
                        colour: "#3F2A2B"
                    }}
                />
                <AppInstance
                    onAppInstanceToggled={this.props.onAppInstanceToggled}
                    text="NLP Covid Press Analysis"
                    logo={faNewspaper}
                    link={{
                        isExternal: false,
                        whereToGo: ""
                    }}
                    tooltip="Opens an overview of my COVID-19 internationl press analysis with Python."
                    colour={{
                        isRadiant: false,
                        colour: "#A20021"
                    }}
                />
                <AppInstance
                    onAppInstanceToggled={this.props.onAppInstanceToggled}
                    text="Garbage Detector"
                    logo={faTrashCan}
                    link={{
                        isExternal: false,
                        whereToGo: ""
                    }}
                    tooltip="Opens an overview of my intelligent garbage detector project via object detection."
                    colour={{
                        isRadiant: false,
                        colour: "#AFBFC0"
                    }}
                />
                <AppInstance
                    onAppInstanceToggled={this.props.onAppInstanceToggled}
                    text="Smart Repl. System"
                    logo={faBox}
                    link={{
                        isExternal: false,
                        whereToGo: ""
                    }}
                    tooltip="Opens an overview of my decentralized smart home replenishment system project with Hyperledger Fabric."
                    colour={{
                        isRadiant: false,
                        colour: "#78BC61"
                    }}
                />
                <AppInstance
                    onAppInstanceToggled={this.props.onAppInstanceToggled}
                    text="Intelligent bee hive"
                    //logo={`url("${BASE_PATH}${beePriceImg}");`}
                    logo={faBoxArchive}
                    link={{
                        isExternal: false,
                        whereToGo: "https://www.umwelt-campus.de/campus/aktuelles/medien-presse/pressemitteilungen/modellierung-eines-intelligenten-bienenstocks"
                    }}
                    tooltip="This app redirects you in a new browser to the press article of my awarded intelligent bee hive system."
                    colour={{
                        isRadiant: false,
                        colour: "#00A6A6"
                    }}
                />
                <AppInstance
                    onAppInstanceToggled={this.props.onAppInstanceToggled}
                    text="GitHub"
                    logo={faGithub}
                    link={{
                        isExternal: true,
                        whereToGo: "https://github.com/ajdev-1"
                    }}
                    tooltip="This app redirects you in a new browser tab to my Github profile."
                    colour={{
                        isRadiant: false,
                        colour: "black"
                    }}
                />
                <AppInstance
                    onAppInstanceToggled={this.props.onAppInstanceToggled}
                    text="LinkedIn"
                    logo={faLinkedin}
                    link={{
                        isExternal: true,
                        whereToGo: "https://www.linkedin.com/in/altenhofer-j/"
                    }}
                    tooltip="This app redirects you in a new browser tab to my LinkedIn profile."
                    colour={{
                        isRadiant: false,
                        colour: "rgb(10, 102, 194)"
                    }}
                />
                <AppInstance
                    onAppInstanceToggled={this.props.onAppInstanceToggled}
                    text="Mail"
                    logo={faPaperPlane}
                    link={{
                        isExternal: false,
                        whereToGo: ""
                    }}
                    tooltip=""
                    colour={{
                        isRadiant: false,
                        colour: "#5c5c5c"
                    }}
                />
            </div>
        )
    }
}

export default Dock;