import { defineMessages } from 'react-intl';

const messages = defineMessages({
  IntroductionBlock: {
    id: 'Introduction',
    defaultMessage: 'Introduction',
  },
});

export const IntroductionBlockSchema = (props) => ({
  title: props.intl.formatMessage(messages.IntroductionBlock),
  block: 'introductionBlock',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: [],
    },
  ],

  properties: {},
  required: [],
});
