import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import PostCard from '../../component/ui/PostCard';

export default {
    title: 'UI/PostCard',
    component: PostCard,
    argTypes: {
        
    },
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = (args) => <PostCard {...args} />;

export const PostCardStory = Template.bind({});
PostCardStory.args = {
    
};
PostCardStory.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
}