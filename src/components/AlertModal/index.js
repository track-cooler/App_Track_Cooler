import React, {Component} from 'react';

import {AlertContainer,
    ConfirmAlertButton,
    ConfirmAlertText,
    AlertTitle,
    AlertMessage,
    AlertMessageBox,
    AlertBackdrop
} from "./styles.js";


class AlertModal extends Component {

    constructor({display, title, message}) {
        super();
    }

    hideModal = () => {
        this.display = false;
    }

    render() {
        if(this.display) {
            return (
                <AlertBackdrop>
                    <AlertContainer>
                        <AlertMessageBox>
                            <AlertTitle>
                                {this.title}
                            </AlertTitle>
                            <AlertMessage>
                                {this.message}
                            </AlertMessage>
                        </AlertMessageBox>
                        <ConfirmAlertButton onPress={this.hideModal}>
                            <ConfirmAlertText>
                                Ok
                            </ConfirmAlertText>
                        </ConfirmAlertButton>
                    </AlertContainer>
                </AlertBackdrop>
            )
        }else{
            return null;
        }
    }
}

export default AlertModal;

