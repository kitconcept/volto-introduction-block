import { defineMessages } from 'react-intl';

const messages = defineMessages({
  IntroductionBlock: {
    id: 'Introduction',
    defaultMessage: 'Introduction',
  },
});

// Called by Volto with `intl` only, both in the settings form and in the
// `@blocks-schema` endpoint, so it must not depend on editor-only props.
export const IntroductionBlockSchema = ({ intl }) => ({
  title: intl.formatMessage(messages.IntroductionBlock),
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
