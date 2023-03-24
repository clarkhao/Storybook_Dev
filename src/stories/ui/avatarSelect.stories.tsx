import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import AvatarSelect from '../../component/ui/AvatarSelect';

export default {
    title: 'UI/AvatarSelect',
    component: AvatarSelect,
    argTypes: {
        
    },
} as ComponentMeta<typeof AvatarSelect>;

const Template: ComponentStory<typeof AvatarSelect> = (args) => <AvatarSelect {...args} />;

export const AvatarSelectStory = Template.bind({});
AvatarSelectStory.args = {
    
};
AvatarSelectStory.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
}