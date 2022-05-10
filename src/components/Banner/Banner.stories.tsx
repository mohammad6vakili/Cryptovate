import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Banner from './Banner';

export default {
  title: 'Example/Banner',
  component: Banner,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args: any) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {};
