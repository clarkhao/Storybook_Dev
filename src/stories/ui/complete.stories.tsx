import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Complete from '../../component/ui/Complete';

export default {
    title: 'UI/Complete',
    component: Complete,
    argTypes: {
        
    },
} as ComponentMeta<typeof Complete>;

const Template: ComponentStory<typeof Complete> = (args) => <Complete {...args} />;

export const CompleteStory = Template.bind({});
CompleteStory.args = {
    
};
CompleteStory.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
}