import React, { useState } from 'react';
import { Modal, Button, Form } from 'antd';

import TeamForm from './TeamForm';

const FORM_NAME = 'TeamForm';

const TeamModal = ({
    onCancel,
    numPlayers,
    onSubmitTeam,
    saving,
}) => {
    const [ forms, setForms ] = useState([
        {
            form: Form.useForm()[0],
            formName: FORM_NAME + '0',
        }
    ]);
    
    const addNewForm = () => {
        setForms([
            ...forms,
            {
                form: Form.useForm()[0],
                formName: FORM_NAME + forms.length,
            }
        ])
        console.log(forms);
    }

    const onSubmit = formValues => onSubmitTeam(formValues)
    const footer = [
        <Button
            key="add-another"
            type="default"
            onClick={addNewForm}
        >
            Add Another Team
        </Button>,
        <Button
            key="submit"
            form={FORM_NAME}
            type="primary"
            htmlType="submit"
            loading={saving}
        >
            Save Team
        </Button>
    ]
    return (
        <Modal
            onCancel={onCancel}
            className="TeamModal"
            title="Add Team"
            visible
            footer={footer}
            maskClosable={false}
        >
            <TeamForm
                formName={forms[forms.length - 1].formName}
                onSubmit={onSubmit}
                numPlayers={numPlayers}
                form={forms[forms.length - 1].form}
            />
        </Modal>
    )
}

export default TeamModal;
