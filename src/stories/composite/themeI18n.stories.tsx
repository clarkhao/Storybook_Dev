import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import ThemeI18n from '../../component/composite/ThemeI18n';

export default {
    title: 'Composite/ThemeI18n',
    component: ThemeI18n,
    /*
    parameters: {
        actions: {
          handles: ['mouseover', 'mouseleave'],
        },
      },
    */
} as ComponentMeta<typeof ThemeI18n>;
//setup Template to use args and display multi state
const Template: ComponentStory<typeof ThemeI18n> = (args) => <ThemeI18n {...args} />;

export const ThemeI18nStory = Template.bind({});
ThemeI18nStory.args = {};
ThemeI18nStory.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
}