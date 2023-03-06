import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import SignupLeft from '../../component/composite/auth/SignupLeft';

export default {
    title: 'Composite/SignupLeft',
    component: SignupLeft,
    /*
    parameters: {
        actions: {
          handles: ['mouseover', 'mouseleave'],
        },
      },
    */
} as ComponentMeta<typeof SignupLeft>;
//setup Template to use args and display multi state
const Template: ComponentStory<typeof SignupLeft> = (args) => <SignupLeft {...args} />;

export const SignupLeftStory = Template.bind({});
SignupLeftStory.args = {};
SignupLeftStory.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
}