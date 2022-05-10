import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Pill from './index';
import "../../styles/global.scss";

export default {
  title: 'Example/Pill',
  component: Pill,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Pill>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Lorem Ipsum",
  imgSrc: "https://s3-alpha-sig.figma.com/img/bc17/ce11/f288095b8901cacbf9a2001247fbdaac?Expires=1646611200&Signature=RbwCP5qYSuUqkAxX2yiCs~l4wZFoSmeA~pr-QwDFezpDQ0nPn35eC-5J~TIZRbiR7uxVIKi-XHq9RNTFaX9NSkB6MoYEMJbTPLCivA6MvrXUyVexOxPIwHjpf5X8qvDAglpmmU9742VATJV2Jg0o1J4EiyM01Ts4ki~1zgSe9aNxpkBOQCGZ2UDMMpjvY6DYXQUC0KrJGqCtPo1xHLZf1kAluH3vlKZcR~y2c8-3s-HPbQUumb2Ca5HyRd30yQCPny6mUo0hFjRWe0jmeBeyRK86ILy64YMkksf0jUnJnZ7tyjPH~l-mY84uq5T-uvuoyKxEUXrH1rZKLIVUq1bpvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  isSecondary: false
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   variant: 'secondary',
//   label: 'Pill',
//   onClick: () => console.log('Clicked!')
// };