import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import SigninLeft from '../../component/composite/auth/SigninLeft';

export default {
    title: 'Composite/SigninLeft',
    component: SigninLeft,
    /*
    parameters: {
        actions: {
          handles: ['mouseover', 'mouseleave'],
        },
      },
    */
} as ComponentMeta<typeof SigninLeft>;
//setup Template to use args and display multi state
const Template: ComponentStory<typeof SigninLeft> = (args) => <SigninLeft {...args} />;

export const SigninLeftStory = Template.bind({});
SigninLeftStory.args = {};
SigninLeftStory.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
}