import React, { useEffect, useState } from "react";
import { Modal, TextArea } from "@unifocus/react-components";

//tslint:disable
interface LocalProps {
    showEventDataModal: boolean;
    result: string;
    OnHandleCancel: () => void;
 }
type Props = LocalProps;


export const EventDataDetailsModal = (props: Props) => {

    const handleCancel = () => {
        props.OnHandleCancel();
    }
    return (
            <Modal
                title="Event Data"
                visible={props.showEventDataModal}
                onCancel={handleCancel}
                hideOk={true}
                size='medium'
            >
                <TextArea
                    value={props.result}
                    allowClear={false}
                    readOnly={true}
                    padding={false}
                    border={false}
                    rows={20}
                    style={{
                        width: '100%',
                    }}
                />
            </Modal>
    );
};
