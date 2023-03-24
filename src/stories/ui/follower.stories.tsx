import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Follower from '../../component/ui/Follower';

export default {
    title: 'UI/Follower',
    component: Follower,
    argTypes: {
        
    },
} as ComponentMeta<typeof Follower>;

const Template: ComponentStory<typeof Follower> = (args) => <Follower {...args} />;

export const FollowerStory = Template.bind({});
FollowerStory.args = {
    
};
FollowerStory.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
}