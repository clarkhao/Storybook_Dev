import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Arrangement from '../../component/layout/Arrangement';

export default {
    title: 'Layout/Arrangement',
    component: Arrangement,
} as ComponentMeta<typeof Arrangement>;

const Template: ComponentStory<typeof Arrangement> = (args) => <Arrangement {...args} />;

export const ArrangementStory = Template.bind({});
ArrangementStory.args = {};
ArrangementStory.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
}