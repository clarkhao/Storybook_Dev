import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Header from '../../component/composite/structure/Header';

export default {
    title: 'Composite/Header',
    component: Header,
    /*
    parameters: {
        actions: {
          handles: ['mouseover', 'mouseleave'],
        },
      },
    */
} as ComponentMeta<typeof Header>;
//setup Template to use args and display multi state
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderStory = Template.bind({});
HeaderStory.args = {};
HeaderStory.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
}