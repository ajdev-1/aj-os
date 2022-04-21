import './Dock.scss';
import React from 'react';
import { 
    faGithub, 
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { 
    faNewspaper,
    faTrashCan,
    faBox,
    faBoxArchive,
} from '@fortawesome/free-solid-svg-icons';

import AppInstance from '../AppInstance/AppInstance';
import trashImg1 from '../../assets/project-images/garbage-detector/trash1.png';
import trashImg2 from '../../assets/project-images/garbage-detector/trash2.png';
import trashImg4 from '../../assets/project-images/garbage-detector/trash4.png';
import pressImg1 from '../../assets/project-images/corona-press/formula.png';
import pressImg2 from '../../assets/project-images/corona-press/ldaviz.png';
import pressImg3 from '../../assets/project-images/corona-press/ger.png';
import smartHomeImg1 from '../../assets/project-images/smart-home/arch.png';
import priceImg from '../../assets/project-images/bees/price.png';

//const BASE_PATH = `${window.location.protocol}//${window.location.host}`;

class Dock extends React.Component {    
    render(){
        return (
            <div className="dockWrapper">
                {
                    /*
                    TBD....
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
                    */
                }

                <AppInstance
                    onAppInstanceToggled={this.props.onAppInstanceToggled}
                    text="NLP Covid Press Analysis"
                    logo={faNewspaper}
                    link={{
                        isExternal: false,
                        whereToGo: "https://github.com/ajdev-1/corona-press-analysis",
                        jupyter: "https://nbviewer.org/github/ajdev-1/corona-press-analysis/blob/master/COVID-19%20GIT.ipynb"
                    }}
                    tooltip="Opens an overview of my COVID-19 internationl press analysis with Python."
                    colour={{
                        isRadiant: false,
                        colour: "rgb(159, 95, 95)"
                    }}
                    content={{
                        "motivation":
                            <div className="projectSectionContent">
                                <p className="projectSectionContentText">The past has shown that the <a>press uses exceptional situations</a>, to bypass our attention filter with emotionalized reports that tend to exaggerate. In the U.S. there has been an increased number of reports on social consequences in about particular epidemics (swine flu, Zika virus, Ebola). Health aspects have been neglected.

                                <br/><br/>Thus, press articles can give an impression about a pandemic that <a>differs from the actual situation</a> (e.g. growth rate). This type of reporting could be repeated with COVID-19. This raises the question of whether emotionality or specific themes of press coverage of COVID-19 <a>correlate with the growth of the virus</a> in a country.
                                </p>
                            </div>,
                        "objective":
                            <div className="projectSectionContent">
                                <p className="projectSectionContentText">
                                Within this project I examined whether there is a <a>correlation between emotionality</a>, <a>used topics</a> of press articles and the <a>growth rate of COVID-19</a> in a country. Here, countries were examined that had a significant development of the growth rate (in March/ April 2020): Germany, USA, Spain, Italy, Great Britain, and France.
                                </p>
                            </div>,
                        "technology":
                            <div className="projectSectionContent">
                                <p className="projectSectionContentText">
                                Within this project, I used an open-source dataset from <a target="_blank" rel="noopener noreferrer" href="https://ieee-dataport.org/open-access/free-dataset-newsmessage-boardsblogs-about-coronavirus-4-month-data-52m-posts">IEEE DataPort</a> that includes news/message and blog entry data. Here I have concentrated on English reports.
                                <br/><br/>For the analysis of the reports and with that the <a>Natural Language Processing (NLP)</a> part of the project, I used a <a>Latent Dirichlet Allocation (LDA)</a> model which is a generative probabilistic model for collections of discrete data such as text corpora. It can be used to extract <a>topic propabilities</a> from documents.
                                </p>
                            </div>,
                        "results":
                            <div className="projectSectionContent">
                                <p className="projectSectionContentText">
                                    During the data exploration part of the project, I found out that the <a>dataset was not evenly distributed</a> when it comes to the different publishers. This means that the result for every country is heavily influenced by one single publisher of that country.

                                    Furthermore, I calculated an <a>emotionality rate</a> for every article in my dataset. For that, I divided the amount of emotionally charged words in that article by the log of the overall amount of words in that document. The formula looks like this:
                                </p>
                                <div className="projectSectionContentImage">
                                    <img className="largeImg" src={pressImg1} alt=""/>
                                </div>
                                <p className="projectSectionContentText">
                                    To visualize the results of my LDA analysis, I used a tool called <a target="_blank" rel="noopener noreferrer" href="https://github.com/TomasKeller/python-LDAviz">pyLDAvis</a> which visualizes the results in an interactive diagram. If you want to see the actual result, click on the <a>Open Jupyter Notebook</a> link which redirects you to my jupyter notebook. Scroll down to interact with the diagram.
                                </p>
                                <div className="projectSectionContentImage">
                                    <img className="largeImg" src={pressImg2} alt=""/>
                                </div>
                                <p className="projectSectionContentText">
                                    The following image shows the results of topic districution from Feb 2020 - April 2020 for Germany. It compares the four main categories <a>Social Consequences</a>, <a>Economy</a>, <a>Research and Health</a>, <a>Money and Stocks</a>.
                                </p>
                                <div className="projectSectionContentImage">
                                    <img className="largeImg" src={pressImg3} alt=""/>
                                </div>
                            </div>
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
                    content={{
                        "motivation":
                            <div className="projectSectionContent">
                                <p className="projectSectionContentText">In the world of smart home replenishment, <a>most of the solutions are lacking specific functionalities</a>. Dash buttons for example are not really measuring the exact needs of the customer. If you place the dash button near your toothpaste and click it as soon as the toothpaste runs emtpy, well, then you will need to wait for the package to arrive to refill your toothpaste. On the other hand smart solutions like the <a>smart HP ink printer</a> (Instant Ink) and the <a>smart washing machine</a> from Hoover are measuring the exact needs of the customer through constant monitoring of the washing powder or ink. However, in this case a customer needs two systems for two products. This does not scale well at all with adding more smart products to the household.

                                    <br/><br/>To provide a single platform for many smart home appliances, Amazon launched the Amazon Dash Replenishment Service. This service allows manufacturers to use the Amazon APIs to make their products smart by monitoring the actual needs of the customer. In that way reorders happen automatically when the appliance runs low. However, with this solution manufacturers are very <a>dependant on Amazon</a>. Amazon serves as a single source of truth for all manufacturers and their data. So in the end Amazon will have knowledge of all the reorders that happen within the system.

                                </p>
                            </div>,
                        "objective":
                            <div className="projectSectionContent">
                                <p className="projectSectionContentText">
                                    This project aims to provide a <a>decentralized solution</a> to manufacturers which means the middleman like Amazon will be omitted. This means that the manufacturers will have <a>direct contact</a> to the customers and their data. With that the system provides <a>more data democracy</a> to the manufacturers. Also, the dependency between manufacturers and a potential middleman can be omitted, saving costs in terms of contractual fees.
                                </p>
                            </div>,
                        "technology":
                            <div className="projectSectionContent">
                                <p className="projectSectionContentText">
                                
                                -<a target="_blank" rel="noopener noreferrer" href="https://www.hyperledger.org/use/fabric"> Hyperledger Fabric</a>
                                <br/><br/>- <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org/en/">Smart Contracts with NodeJS</a>
                                <br/><br/>- <a target="_blank" rel="noopener noreferrer" href="https://github.com/hyperledger/fabric-samples">Built upon the official Hyperledger Fabric fabric-samples repository</a>

                                </p>
                            </div>,
                        "results":
                            <div className="projectSectionContent">
                                <p className="projectSectionContentText">
                                    This whole system builds upon the Hyperledger Fabric fabric samples project. The images below show the Hyperledger Fabric <a>network infrasctructure</a> that has been developed for this project. The image shows an overall infrastructure that is scalable in terms of a production system. Organizations and manufacturers are linked via a <a>Replenishment Hub</a> that is installed in the household of the consumer and a web application. The Hub is responsible to receive sensor data for IoT-devices that measure the actual need of the products. The consumer is able to configure the <a>threshold for a reorder</a> through the web app for every connected device (e.g. filled up to 30%). Also, the consumer is able to connect any poduct of any manufacturer with an IoT-device. This means that this product will get ordered as soon as the reordering threshold gets hit.
                                </p>
                                <div className="projectSectionContentImage">
                                    <img className="largeImg" src={smartHomeImg1} alt=""/>
                                </div>
                            </div>
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
                    content={{
                        "motivation":
                            <div className="projectSectionContent">
                                <p className="projectSectionContentText">
                                The global <a>decline of bees</a> is an important ecological and economic issue. Increasing stressors such as <a>pests</a> and <a>pollutants</a> and the increasing <a>lack of diversity</a> due to monocultures are worsening the viability of bees. Beekeepers have great interest in the health of these complex systems and put a lot of work into monitoring them. Unfortunately, they usually do not have resources to engage experts in modern technologies like Internet of Things (IoT) and Machine Learning (ML).
                                </p>
                            </div>,
                        "objective":
                            <div className="projectSectionContent">
                                <p className="projectSectionContentText">
                                To support them, I helped in the development of a <a>visual programming environment</a> which enables laymen to handle those modern technologies much easier. The tool is an <a>IoT monitoring system</a> that not only collects data but also detects and reports <a>anomalies</a> such as vandalism or diseases on the beehive. This will enable beekeepers to minimise the effort required for beekeeping and will help to investigate the causes of colony problems using IoT and ML without in-depth knowledge of computer science.
                                </p>
                            </div>,
                        "technology":
                            <div className="projectSectionContent">
                                <p className="projectSectionContentText">
                                    I helped within this project by using <a>Python</a>, <a>JavaScript</a> and <a>Node-Red</a> to build the application logic and underlying system. The initial dataset was labeled with <a>Density-Based Spatial Clustering of Applications with Noise (DBSCAN)</a>, a clustering algorithm which is able to find clusters in an unlabeled dataset. In terms of anomaly detection, I used a <a>Support Vector Machine (SVM)</a> to train on that clustered and labeled data.
                                </p>
                            </div>,
                        "results":
                            <div className="projectSectionContent">
                                <p className="projectSectionContentText">
                                    In the end, I applied with a written paper to the <a>EnviroInfo conference</a>. This is a international interdisciplinary conference series on <a>leading environmental information and communication technologies</a>. Fortunately, I was awarded with the <a>first prize for students' work</a> on that conference.

                                    <br/><br/> Furthermore, I had the chance to co-author within <a>my first scientific paper on IEEE</a>.
                                    <br/>(see the IEEE Paper and Press Article buttons)  
                                </p>
                                <div className="projectSectionContentImage">
                                    <img className="mediumImg" src={priceImg} alt=""/>
                                </div>
                            </div>
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
            </div>
        )
    }
}

export default Dock;