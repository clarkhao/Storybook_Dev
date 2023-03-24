import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Avatar from '../../component/ui/Avatar';

export default {
    title: 'UI/Avatar',
    component: Avatar,
    argTypes: {
        
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarStory = Template.bind({});
AvatarStory.args = {
    
};
AvatarStory.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
}