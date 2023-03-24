import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Menu from '../../component/ui/Menu';

export default {
    title: 'UI/Menu',
    component: Menu,
    argTypes: {
        
    },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const MenuStory = Template.bind({});
MenuStory.args = {
    
};
MenuStory.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
}