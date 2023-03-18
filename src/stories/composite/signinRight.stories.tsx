import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import SigninRight from '../../component/composite/auth/SigninRight';

export default {
    title: 'Composite/SigninRight',
    component: SigninRight,
    /*
    parameters: {
        actions: {
          handles: ['mouseover', 'mouseleave'],
        },
      },
    */
} as ComponentMeta<typeof SigninRight>;
//setup Template to use args and display multi state
const Template: ComponentStory<typeof SigninRight> = (args) => <SigninRight {...args} />;

export const SigninRightStory = Template.bind({});
SigninRightStory.args = {};
SigninRightStory.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
}