import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import SidebarMenu from '../../component/composite/structure/SidebarMenu';

export default {
    title: 'Composite/SidebarMenu',
    component: SidebarMenu,
} as ComponentMeta<typeof SidebarMenu>;

const Template: ComponentStory<typeof SidebarMenu> = (args) => <SidebarMenu {...args} />;

export const SidebarMenuStory = Template.bind({});
SidebarMenuStory.args = {};
SidebarMenuStory.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
}