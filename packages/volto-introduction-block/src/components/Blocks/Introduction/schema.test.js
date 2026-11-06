import { createIntl, createIntlCache } from 'react-intl';
import { IntroductionBlockSchema } from './schema';

const intl = createIntl({ locale: 'en', messages: {} }, createIntlCache());

describe('IntroductionBlockSchema', () => {
  it('resolves with only intl, as the @blocks-schema endpoint calls it', () => {
    const schema = IntroductionBlockSchema({ intl });

    expect(schema.title).toBe('Introduction');
    expect(schema.block).toBe('introductionBlock');
    expect(schema.fieldsets).toHaveLength(1);
    expect(schema.fieldsets[0].id).toBe('default');
  });

  it('has no fields, as the block stores only its rich text', () => {
    const schema = IntroductionBlockSchema({ intl });

    expect(schema.properties).toStrictEqual({});
    expect(schema.required).toStrictEqual([]);
  });
});
