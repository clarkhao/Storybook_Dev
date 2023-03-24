import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import ProfileCard from '../../component/composite/ProfileCard';

export default {
    title: 'Composite/ProfileCard',
    component: ProfileCard,
    /*
    parameters: {
        actions: {
          handles: ['mouseover', 'mouseleave'],
        },
      },
    */
} as ComponentMeta<typeof ProfileCard>;
//setup Template to use args and display multi state
const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const ProfileCardStory = Template.bind({});
ProfileCardStory.args = {};
ProfileCardStory.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
}