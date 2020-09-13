import React, { Fragment } from 'react';
import {
    Form,
    Input,
    DatePicker,
    Button,
    Checkbox,
    InputNumber,
    Modal,
    Select,
    Tooltip
} from 'antd';

import { TOURNAMENT_FORM_STAGES } from './../../util/constant';
import DateUtil from './../../util/date';

import './CreateTournamentForm.less';

const FORM_NAME = 'create-tournament-form';

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
    const onFinish = fields => {
        onSubmit({
            ...fields,
            tournamentDate: DateUtil.momentToDate(fields.tournamentDate),                
        })
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
                <Input autoComplete="off" />
            </Form.Item>  
            <Form.Item name="tournamentDate" label="Date">
                <DatePicker />
            </Form.Item>
            <Form.Item name="location" label="Location">
                <Input autoComplete="off" />
            </Form.Item>  
            <Form.Item name="questionSet" label="Question Set">
                <Input autoComplete="off" />
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
            <Form.List name="tossupValues">
                {
                    (fields, { add, remove }) => {
                        return (
                            <div className="answer-types-container">
                                {
                                    fields.map((field, idx) => (
                                        <Input.Group
                                            key={field.key}
                                            compact
                                        >
                                            <Form.Item
                                                label={idx === 0 ? 'Value' : null}
                                                name={[field.name, "value"]}
                                                className="pv"
                                            >
                                                <InputNumber type="number" />
                                            </Form.Item>
                                            <Form.Item
                                                label={idx === 0 ? 'Type' : null}
                                                name={[field.name, "answerType"]}
                                                className="pv"
                                            >
                                                <Select style={{ width: 120 }}>
                                                    <Select.Option value="Neg">Neg</Select.Option>
                                                    <Select.Option value="Base">Base</Select.Option>
                                                    <Select.Option value="Power">Power</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        </Input.Group>
                                    ))
                                }
                                <Button
                                    type="link"
                                    onClick={() => add()}
                                    >
                                    {
                                        fields.length === 0
                                            ? <Tooltip 
                                                title={
                                                    "The point scheme will default to standard NAQT rules "
                                                        + "with tossups worth 10, powers worth 15 and negs worth -5."
                                                }
                                            >
                                                Add custom point scheme
                                            </Tooltip>
                                            : 'Add another'
                                    }
                                </Button>
                            </div>
                        )
                    }
                }
            </Form.List>
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
                key="submit"
                form={FORM_NAME}
                className="next-button"
                type="primary"
                htmlType="submit"
                loading={submitting}
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
                name={FORM_NAME}
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 40 }}
                layout="horizontal"
                size="middle"
                className="CreateTournamentForm"
                form={form}
                onFinish={onFinish}
                initialValues={defaultValues}
            >
                { basicInfo }
                { rulesStage }
            </Form>
        </Modal>
    )
}

export default CreateTournamentForm;
