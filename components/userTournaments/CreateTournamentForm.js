import React, { Fragment } from 'react';
import { Form, Input, DatePicker, Button, Card, Checkbox, InputNumber, Modal } from 'antd';

import { TOURNAMENT_FORM_STAGES } from './../../util/constant';
import DateUtil from './../../util/date';

import './CreateTournamentForm.less';

const renderStage = (stage, currentStage, element) => {
    return (
        <div style={{ display : stage === currentStage ? 'block' : 'none' }}>
            { element }
        </div>
    )
}

const CreateTournamentForm = ({
    stage,
    onCancel,
    onGoToStage,
    defaultValues,
    onSubmit,
    submitting
}) => {

    const [ form ] = Form.useForm();
    const onFinish = () => {
        form.validateFields()
            .then(() => onSubmit({
                ...form.getFieldsValue(),
                tournamentDate: DateUtil.momentToDate(form.getFieldValue('tournamentDate')),                
            }));
    }
    const onReset = () => form.resetFields();

    const basicInfo = renderStage(
        TOURNAMENT_FORM_STAGES.BASIC_INFO,
        stage,
        <Fragment>
            <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please provide a name.' }]}>
                <Input />
            </Form.Item>  
            <Form.Item name="tournamentDate" label="Date">
                <DatePicker />
            </Form.Item>
            <Form.Item name="location" label="Location">
                <Input />
            </Form.Item>  
            <Form.Item name="questionSet" label="Question Set">
                <Input />
            </Form.Item>
        </Fragment>,
    )
    const rulesStage = renderStage(
        TOURNAMENT_FORM_STAGES.RULES,
        stage,
        <Fragment>
            <Form.Item name="usesBouncebacks" label="Bouncebacks" valuePropName="checked">
                <Checkbox />
            </Form.Item>
            <Form.Item name="bonusPointValue" label="Bonus Value">
                <InputNumber type="number" />
            </Form.Item>
            <Form.Item name="partsPerBonus" label="Parts Per Bonus">
                <InputNumber type="number" />
            </Form.Item>
            <Form.Item name="maxActivePlayersPerTeam" label="Team Size">
                <InputNumber type="number" />
            </Form.Item>
        </Fragment>
    )
    const title = stage === TOURNAMENT_FORM_STAGES.BASIC_INFO
        ? 'Information'
        : 'Rules';
    const footer = stage === TOURNAMENT_FORM_STAGES.BASIC_INFO
        ? [
            <Button
                key={'back'}
                className="back-button"
                type="default"
                onClick={() => {
                    onReset();
                    onCancel();
                }}
                htmlType="button"
            >
                Cancel
            </Button>,
            <Button
                key='next'
                className="next-button"
                type="primary"
                onClick={(e) => {
                    e.preventDefault();
                    form.validateFields().then(() => onGoToStage(TOURNAMENT_FORM_STAGES.RULES));
                }}
                htmlType="button"
            >
                Next
            </Button>
        ]
        : [
            <Button
                key="back"
                className="back-button"
                type="default"
                onClick={() => onGoToStage(TOURNAMENT_FORM_STAGES.BASIC_INFO)}
                disabled={submitting}
                htmlType="button"
            >
                Back
            </Button>,
            <Button
                key="submit"
                className="next-button"
                type="primary"
                htmlType="submit"
                loading={submitting}
                onClick={() => onFinish()}
            >
                Finish
            </Button>
        ]
    return (
        <Modal
            visible
            title={title}
            onCancel={() => {
                onReset();
                onCancel();
            }}
            footer={footer}
            okText="Create"
        >
            <Form
                name="create-tournament-form"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 40 }}
                layout="horizontal"
                size="large"
                form={form}
                initialValues={defaultValues}
            >
                { basicInfo }
                { rulesStage }
            </Form>
        </Modal>
    )
}

export default CreateTournamentForm;
