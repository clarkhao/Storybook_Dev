import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import SignupRight from '../../component/composite/auth/SignupRight';

export default {
    title: 'Composite/SignupRight',
    component: SignupRight,
    /*
    parameters: {
        actions: {
          handles: ['mouseover', 'mouseleave'],
        },
      },
    */
} as ComponentMeta<typeof SignupRight>;
//setup Template to use args and display multi state
const Template: ComponentStory<typeof SignupRight> = (args) => <SignupRight {...args} />;

export const SignupRightStory = Template.bind({});
SignupRightStory.args = {};
SignupRightStory.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
}