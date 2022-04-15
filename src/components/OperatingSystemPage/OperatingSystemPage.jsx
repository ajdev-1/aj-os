import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import StatusBar from "../StatusBar/StatusBar";
import AppGrid from "../AppGrid/AppGrid";
import Dock from "../Dock/Dock";

class OperatingSystemPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isSnackbarOpen: true,
            userHasBeenWelcomed: false 
        }
    }

    welcomeToast = () => toast(`🔓 Congratulations, you cracked the password. 
    Now feel free to explore my portfolio operating system.`, {
        theme: "dark",
        position: "bottom-left",
        autoClose: 15000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: 'welcomeToast'
    });

    componentDidMount() {
        if (!this.state.userHasBeenWelcomed) {
            this.welcomeToast();
            this.setState({ userHasBeenWelcomed: true })
        }
    }

    render() {
        console.log('rendered systems page');
        return (
            <div className="operatingSystemPageWrapper">
                <StatusBar/>
                <AppGrid/>
                <Dock/>
            </div>
        )
    }
}

export default OperatingSystemPage;