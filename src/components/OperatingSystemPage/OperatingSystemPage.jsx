import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import StatusBar from "../StatusBar/StatusBar";
import Dock from "../Dock/Dock";
import AppWindow from "../AppWindow/AppWindow";

class OperatingSystemPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isSnackbarOpen: true,
            userHasBeenWelcomed: false,
            appsOpened: [] // -> Objects that indicate which app is currently opened
        }
    }

    welcomeToast = () => toast(`⭐ I'm glad you're interested in my portfolio. Every app in my operating system tells you something about me, my projects or how you can get in touch with me.`, {
        theme: "dark",
        position: "bottom-left",
        autoClose: 15000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: 'welcomeToast'
    });

    /**
     * This function gets triggered as soon as the end user clicks on an app to open it.
     * This opens the app window and fills it with the appParams' values.
     * 
     * @param {*} appParams: name, description
     */
    onAppInstanceToggled = (action, appParams={}) => {
        let updatedAppsArray = null;

        if (action === 'open' && Object.keys(appParams).length > 0) {
            const isAppOpened = this.state.appsOpened.find(app => app.name === appParams.name);
            updatedAppsArray = this.state.appsOpened.concat([appParams]);

            if (!isAppOpened) {
                this.setState({
                    appsOpened: updatedAppsArray
                })
            }
        } else if (action === 'close') {
            updatedAppsArray = this.state.appsOpened.filter(app => {
                return app.name !== appParams.name;
            });

            this.setState({
                appsOpened: updatedAppsArray
            })
        }
    }

    componentDidMount() {
        if (!this.state.userHasBeenWelcomed) {
            this.welcomeToast();
            this.setState({ userHasBeenWelcomed: true })
        }
    }

    render() {
        let appWindows = null;
        if (this.state.appsOpened.length > 0 ) {
            appWindows = this.state.appsOpened.map(appParams => {
                return (
                    <div>
                        <AppWindow
                            key={appParams.name} 
                            appParams={appParams}
                            onAppInstanceToggled={this.onAppInstanceToggled}
                        />
                    </div> 
                );
            })
        }
        console.log('Opened apps', appWindows);
        return (
            <div id="operatingSystemPageWrapper">
                {appWindows}
                <StatusBar/>
                <Dock onAppInstanceToggled={this.onAppInstanceToggled}/>
            </div>
        )
    }
}

export default OperatingSystemPage;