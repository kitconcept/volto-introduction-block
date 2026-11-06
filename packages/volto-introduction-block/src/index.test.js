import applyConfig from './index';
import { IntroductionBlockSchema } from './components/Blocks/Introduction/schema';
import { IntroductionBlockDataAdapter } from './components/Blocks/Introduction/adapter';

// The icon is an asset of Volto that the test runner cannot load as a file.
vi.mock('@plone/volto/icons/subtext.svg', () => ({ default: 'subtext.svg' }));
// The view, the editor and the keyboard handlers need the Volto editor
// runtime. The registration only needs to reference them.
vi.mock('./components/Blocks/Introduction/View', () => ({
  default: () => null,
}));
vi.mock('./components/Blocks/Introduction/Edit', () => ({
  default: () => null,
}));
vi.mock('./components/Blocks/Introduction/keyboard', () => ({
  backspaceInList: () => {},
  enterCreatesIntroductionBlock: () => {},
}));

const makeConfig = () => ({
  blocks: { blocksConfig: {} },
  settings: { slate: { textblockDetachedKeyboardHandlers: {} } },
});

describe('applyConfig', () => {
  it('registers the introduction block', () => {
    const config = applyConfig(makeConfig());

    expect(config.blocks.blocksConfig.introduction.id).toBe('introduction');
    expect(config.blocks.blocksConfig.introduction.title).toBe('Introduction');
  });

  it('registers the schema function that the endpoint and the form use', () => {
    const config = applyConfig(makeConfig());

    expect(config.blocks.blocksConfig.introduction.blockSchema).toBe(
      IntroductionBlockSchema,
    );
  });

  it('registers the data adapter that the settings form uses', () => {
    const config = applyConfig(makeConfig());

    expect(config.blocks.blocksConfig.introduction.dataAdapter).toBe(
      IntroductionBlockDataAdapter,
    );
  });
});
