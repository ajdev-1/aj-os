import React from "react";
import './LoginWidget.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

class LoginOverlay extends React.Component {

    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
        this.loginOverlayRef = React.createRef();

        this.state = {
            isOverlayActivated: true,
        }
    }

    helpToast = () => toast(`So you did not yet try a password?
    Try one. \n It's easier than you think - I promise! 🙂`, {
        theme: "dark",
        position: "bottom-left",
        autoClose: 15000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: 'helpToast'
    });

    hideOverlay = (event) => {
        if (event.srcElement.value !== "") {
            setTimeout(() => {
                this.loginOverlayRef.current.style.display = "None";
            }, 600)

            this.setState({
                isOverlayActivated: false
            }, this.props.onOverlayActivationChange(false))
        }
    }

    componentDidMount() {
        this.inputRef.current.focus();
        this.inputRef.current.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                if (this.state.isOverlayActivated) {
                    this.hideOverlay(event);
                }
            }
        });
        this.inputRef.current.addEventListener("focusout", (event) => {
            this.inputRef.current.value = "";
        });
    }

    render() {
        const widget =
                <div ref={this.loginOverlayRef} className={`loginOverlay ${this.state.isOverlayActivated? '' : 'hidden'}`}>
                    <div className="loginContainer">
                        <div className="loginImage"></div>
                        <div className="userText">Hello friend,</div>
                        <div className="descriptionText">crack the password to explore my portfolio operating system</div>
                        <div className="inputWrapper">
                            <input
                                ref={this.inputRef}
                                type="password"
                                name=""
                                id="loginPassword"
                                placeholder="&#9998;"
                            />
                            <div className="helpIconWrapper">
                                <div ref={this.helpIconRef} onClick={this.helpToast} className="icon" id="help">
                                    <FontAwesomeIcon icon={faQuestion} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;

        return widget;
    }
    
}


export default LoginOverlay;