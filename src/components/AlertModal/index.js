import React, {Component} from 'react';

import {AlertContainer,
    ConfirmAlertButton,
    ConfirmAlertText,
    AlertTitle,
    AlertMessage,
    AlertMessageBox,
    AlertBackdrop
} from "./styles.js";

const AlertModal = ({
    title,
    message
}) => (
    <AlertBackdrop>
        <AlertContainer>
            <AlertMessageBox>
                <AlertTitle>
                    {title}
                </AlertTitle>
                <AlertMessage>
                    {message}
                </AlertMessage>
            </AlertMessageBox>
            <ConfirmAlertButton>
                <ConfirmAlertText>
                    Ok
                </ConfirmAlertText>
            </ConfirmAlertButton>
        </AlertContainer>
    </AlertBackdrop>
);

export default AlertModal;

