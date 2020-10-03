import React from 'react';
import {
    Form,
    Input,
    Button,
} from 'antd';
import { times } from 'lodash';

const { Item } = Form;

const initialFormValues = (numPlayers) => ({
    name: null,
    players: times(numPlayers, () => ({ name: null })),
})

const TeamForm = ({
    numPlayers = 4,
    formName,
    form,
}) => {
    return (
        <div className="TeamForm">
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                name={formName}
                layout="horizontal"
                size="middle"
                form={form}
                initialValues={initialFormValues(numPlayers)}
            >
                <Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please provide a name.' }]}
                >
                    <Input autoComplete="off" />
                </Item>
                <Item label="Players">
                    <Form.List name="players">
                        {
                            (fields, { add }) => {
                                return (
                                    <div>
                                        {
                                            fields.map((field, idx) => (
                                                <Form.Item
                                                    key={idx}
                                                    name={[field.name, "name"]}
                                                    className="pv"
                                                >
                                                    <Input autoComplete="off" />
                                                </Form.Item>
                                            ))
                                        }
                                        <Button
                                            type="link"
                                            onClick={() => add()}
                                            >
                                                Add another player
                                        </Button>
                                    </div>
                                )
                            }
                        }
                    </Form.List> 
                </Item>
            </Form>
        </div>
    )
}

export default TeamForm;
