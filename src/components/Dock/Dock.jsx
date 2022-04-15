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
    faUserLarge
} from '@fortawesome/free-solid-svg-icons';

import AppInstance from '../AppInstance/AppInstance';

class Dock extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className="dockWrapper">
                <AppInstance
                    text="Me"
                    logo={faUserLarge}
                    link={{
                        isExternal: false,
                        whereToGo: ""
                    }}
                    tooltip=""
                    colour={{
                        isRadiant: false,
                        colour: "blue"
                    }}
                />
                <AppInstance
                    text="NLP Covid Press Analysis"
                    logo={faNewspaper}
                    link={{
                        isExternal: false,
                        whereToGo: ""
                    }}
                    tooltip="Opens an overview of my COVID-19 internationl press analysis with Python."
                    colour={{
                        isRadiant: false,
                        colour: "#145363"
                    }}
                />
                <AppInstance
                    text="Garbage Detector"
                    logo={faTrashCan}
                    link={{
                        isExternal: false,
                        whereToGo: ""
                    }}
                    tooltip="Opens an overview of my intelligent garbage detector project via object detection."
                    colour={{
                        isRadiant: false,
                        colour: "#FD703B"
                    }}
                />
                <AppInstance
                    text="Smart Repl. System"
                    logo={faBox}
                    link={{
                        isExternal: false,
                        whereToGo: ""
                    }}
                    tooltip="Opens an overview of my decentralized smart home replenishment system project with Hyperledger Fabric."
                    colour={{
                        isRadiant: false,
                        colour: "#FE9B3D"
                    }}
                />
                <AppInstance
                    text="Intelligent bee hive price"
                    logo={faBoxArchive}
                    link={{
                        isExternal: false,
                        whereToGo: "https://www.umwelt-campus.de/campus/aktuelles/medien-presse/pressemitteilungen/modellierung-eines-intelligenten-bienenstocks"
                    }}
                    tooltip="This app redirects you in a new browser to the press article of my awarded intelligent bee hive system."
                    colour={{
                        isRadiant: false,
                        colour: "#FDCA3B"
                    }}
                />
                <AppInstance
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