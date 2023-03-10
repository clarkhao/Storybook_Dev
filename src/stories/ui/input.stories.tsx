import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Input from '../../component/ui/InputUI';

export default {
    title: 'UI/Input',
    component: Input,
    argTypes: {
        type: {
          options: ['email', 'password', 'text', 'search'],
          control: { type: 'radio' },
        },
      },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputStory = Template.bind({});
InputStory.args = {
    type: 'search',
    labelText: 'search'
};
InputStory.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
}