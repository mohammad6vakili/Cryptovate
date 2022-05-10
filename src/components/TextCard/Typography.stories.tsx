import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from './index';
import "../../index.css";

export default {
  title: 'Example/Typography',
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Typography>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typography> = (args) => <div className='theme-box'><Typography {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
  type: '2column',
};