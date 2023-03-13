import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Success from '../../component/composite/auth/Success';

export default {
    title: 'Composite/Success',
    component: Success,
    /*
    parameters: {
        actions: {
          handles: ['mouseover', 'mouseleave'],
        },
      },
    */
} as ComponentMeta<typeof Success>;
//setup Template to use args and display multi state
const Template: ComponentStory<typeof Success> = (args) => <Success {...args} />;

export const SuccessStory = Template.bind({});
SuccessStory.args = {};
SuccessStory.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
}