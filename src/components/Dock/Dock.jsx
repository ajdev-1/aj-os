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
import trashImg1 from '../../assets/project-images/garbage-detector/trash1.png';
import trashImg2 from '../../assets/project-images/garbage-detector/trash2.png';
import trashImg3 from '../../assets/project-images/garbage-detector/trash3.png';
import trashImg4 from '../../assets/project-images/garbage-detector/trash4.png';

//const BASE_PATH = `${window.location.protocol}//${window.location.host}`;

class Dock extends React.Component {    
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
                        whereToGo: "https://github.com/ajdev-1/corona-press-analysis"
                    }}
                    tooltip="Opens an overview of my COVID-19 internationl press analysis with Python."
                    colour={{
                        isRadiant: false,
                        colour: "rgb(159, 95, 95)"
                    }}
                />
                <AppInstance
                    onAppInstanceToggled={this.props.onAppInstanceToggled}
                    text="Garbage Detector"
                    logo={faTrashCan}
                    link={{
                        isExternal: false,
                        whereToGo: "https://github.com/ajdev-1/garbage-detector"
                    }}
                    tooltip="Opens an overview of my intelligent garbage detector project via object detection."
                    colour={{
                        isRadiant: false,
                        colour: "#AFBFC0"
                    }}
                    content={{
                        "motivation":
                            <div className="projectSectionContent">
                                <p className="projectSectionContentText">Incorrect waste separation and <a>high rates of misdirected waste</a> have a negative impact on different areas. On the one hand, this <a>harms the environment</a> and, on the other, it leads to <a>increased costs</a> for recycling companies.

                                    <br/><br/>Accordingly, this project trained an object detection model to help people in private households decide on which way to dispose an object.

                                    <br/><br/>The development of this app was not part of this project. This project only dealt with the implementation of a first <a>object detection PoC</a>. For this first PoC I tried to classify objects into the following classes:

                                    <br/><br/>- Glass
                                    <br/>- Yellow container (German waste system)
                                    <br/>- Paper
                                </p>
                            </div>,
                        "objective":
                            <div className="projectSectionContent">
                                <p className="projectSectionContentText">
                                In this project, I trained an object detection model that <a>classifies garbage</a> into the different <a>German garbage separation categories</a>. The data basis of this project consisted on the one hand of a data set created for scientific purposes (Trashnet) and on the other hand of a small data set that I created and labeled myself.
                                </p>
                            </div>,
                        "technology":
                            <div className="projectSectionContent">
                                <p className="projectSectionContentText">
                                The pipeline (<a>Jupyter Notebook</a>), all data handling and training of the models was done in Google Colab with <a>Python</a>. By connecting Google Colab with Google Drive, it was possible to perform the project from different computers, independent of the operating system. I only had to upload the required data to <a>Google Drive</a>.

                                <br/><br/>Transfer Learning was used to train the model. Thus, I chose a MobileNet architecture (<a>TensorFlow 2 Detection Model Zoo</a>), which is especially useful for use on mobile devices.
                                </p>
                            </div>,
                        "results":
                            <div className="projectSectionContent">
                                <p className="projectSectionContentText">
                                    Due to the too <a>small amount of data</a>, I was not able to train a model that could be used in private households. Nevertheless, this PoC showed that a sufficiently large amount of data definitely offers the <a>possibility for a usable model</a>.
                                    <br/><br/>The below images show positive/ good results of my object detection model. But these objects were also likely to overfit during the training process...
                                </p>
                                <div className="projectSectionContentImage">
                                    <img className="mediumImg" src={trashImg1} alt=""/>
                                    <img className="mediumImg" src={trashImg2} alt=""/>
                                    <img className="mediumImg" src={trashImg4} alt=""/>
                                </div>
                                <div className="projectSectionContentImage">
                                    <img className="largeImg" src={trashImg3} alt=""/>
                                </div>
                            </div>
                    }}
                />
                <AppInstance
                    onAppInstanceToggled={this.props.onAppInstanceToggled}
                    text="Smart Repl. System"
                    logo={faBox}
                    link={{
                        isExternal: false,
                        whereToGo: "https://github.com/ajdev-1/smart-home-replenishment-system"
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
                        whereToGo: "https://www.umwelt-campus.de/campus/aktuelles/medien-presse/pressemitteilungen/modellierung-eines-intelligenten-bienenstocks",
                        paper: "https://ieeexplore.ieee.org/document/9134323"
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