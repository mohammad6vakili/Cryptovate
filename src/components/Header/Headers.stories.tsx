import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {MemoryRouter } from 'react-router-dom';
import "../../styles/global.scss";
import Header from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args: any) => <MemoryRouter><Header {...args} /></MemoryRouter>;

export const LoggedOut = Template.bind({
  args: {
      theme: "dark",
      profileImg: "https://s3-alpha-sig.figma.com/img/512d/453f/6cba690c99a6c2ea0cf2afd74b5a0acd?Expires=1646611200&Signature=WKARJyzYWaWHbS9etnPnYRsvQFQ3mLaSzmswzbSn0SlfqBKhckSL2k-aPvLWX3DW0slYuYs-Y9rAxsGlCzOs1PVMBmJiXqQqf5Ups5b-yB2Ks-ExlsB9BW-ojVIfP4GuqSgtvI5P2S1vjmiiilUxVrZp2DAWm9kWrkPBHzygoR0Kc0T5sWP6hFYoZXYTdJqrphnrZAWmaxbk2KqT81RnsW1~pr782qACQ6W-d8or6IMdTh~y~4r9okxEGx~xDuu1Sp~BztIeMLSUHQ3v4LdG2SCpxx~BeyGDh2dxlSwRv4r~MU-aqT80owTteRqIuOdhVPk3vCdL8zBl-dkI0X9-wA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
  }
});
