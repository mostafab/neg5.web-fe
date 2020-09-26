import React from 'react';
import { Modal, Button, Form } from 'antd';

import TeamForm from './TeamForm';

const FORM_NAME = 'TeamForm';

const TeamModal = ({
    onCancel,
    numPlayers,
    onSubmitTeam,
    saving,
    onSelectTeam,
}) => {
    const [ form ] = Form.useForm();
    const onSubmit = callback => () => {
        form.validateFields().then(() => {
            const vals = form.getFieldsValue();
            const fields = {
                ...vals,
                players: vals.players.filter(p => p && p.name)
            }
            onSubmitTeam(fields, callback);
        });
    }
    const footer = [
        <Button
            type="default"
            key="add-another"
            loading={saving}
            onClick={onSubmit(team => {
                form.resetFields();
                onSelectTeam && onSelectTeam(team);
            })}
        >
            Save & Add Another
        </Button>,
        <Button
            key="submit"
            type="primary"
            loading={saving}
            onClick={onSubmit()}
        >
            Save and Close
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
                formName={FORM_NAME}
                onSubmit={onSubmit}
                numPlayers={numPlayers}
                form={form}
            />
        </Modal>
    )
}

export default TeamModal;
