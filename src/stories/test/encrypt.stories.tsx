import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Encrypt from '../../component/test/encrypt';

export default {
    title: 'Test/Encrypt',
    component: Encrypt,
} as ComponentMeta<typeof Encrypt>;

const Template: ComponentStory<typeof Encrypt> = (args) => <Encrypt {...args} />;

export const EncryptStory = Template.bind({});
EncryptStory.args = {};
EncryptStory.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
}