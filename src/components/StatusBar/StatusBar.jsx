import './StatusBar.scss';
import React from 'react';

import Fab from '@mui/material/Fab';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';

const greyTheme = createTheme({
    status: {
      danger: 'rgba(138, 138, 138, 0.79)',
    },
    palette: {
      primary: {
        main: 'rgba(138, 138, 138, 0.79)',
        darker: 'rgba(138, 138, 138, 0.79)',
      },
      neutral: {
        main: 'rgba(138, 138, 138, 0.79)',
        contrastText: 'rgba(138, 138, 138, 0.79)',
      },
    },
});


class StatusBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        setInterval(() => this.setState({
            time: new Date()
        }), 1000);
    }
    
    render(){
        const hour = this.state.time.getHours()
		const min = this.state.time.getMinutes()
		const sec = this.state.time.getSeconds()

        return (
            <div className="statusBar">
                <div className="statusBarWrapper">
                    <div id="date">
                        {hour % 12}:{(min < 10 ? '0' + min : min)}:{(sec < 10 ? '0' + sec : sec)} {hour < 12 ? 'am' : 'pm'}
                    </div>
                </div>
                <div className="sourceCodeWrapper">
                    <Fab className="fabBtnStatusbar" onClick={() => {
                        const aTag = document.createElement("a");
                        aTag.rel = "noopener";
                        aTag.target = "_blank";
                        aTag.href = "https://github.com/ajdev-1/aj-os";
                        aTag.click();
                    }} color="info" variant="circular">
                        <GitHubIcon sx={{ mr: 0 }} />
                    </Fab>
                    <ThemeProvider theme={greyTheme}>
                        <Fab className="fabBtnStatusbarMail" href={`mailto:altenhofer.j@web.de`} variant="circular">
                            <EmailIcon sx={{ mr: 0 }} />
                        </Fab>
                    </ThemeProvider>
                </div>
            </div>

        )
    }
}

export default StatusBar;