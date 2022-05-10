import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Profile from './Profile';
import "../../index.css";

export default {
  title: 'Example/Profile',
  component: Profile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Profile>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Profile',
};