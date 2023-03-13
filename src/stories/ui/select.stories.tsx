import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Select from '../../component/ui/Select';

export default {
    title: 'UI/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectStory = Template.bind({});
SelectStory.args = {};
SelectStory.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
}