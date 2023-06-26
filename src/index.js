import textIntroductionSVG from '@plone/volto/icons/subtext.svg';
import IntroductionBlockView from './components/Blocks/Introduction/View';
import IntroductionBlockEdit from './components/Blocks/Introduction/Edit';
import { backspaceInList } from './components/Blocks/Introduction/keyboard';

const applyConfig = (config) => {
  config.blocks.blocksConfig.introduction = {
    id: 'introduction',
    title: 'Introduction',
    icon: textIntroductionSVG,
    group: 'text',
    view: IntroductionBlockView,
    edit: IntroductionBlockEdit,
    // This has a good reason: Slate does not work in detached mode if enabled
    blockHasOwnFocusManagement: true,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    unwantedButtons: ['heading-two', 'heading-three', 'blockquote'],
  };

  // TODO: To remove when it's in core
  config.settings.slate.textblockDetachedKeyboardHandlers = {
    ...config.settings.slate.textblockDetachedKeyboardHandlers,
    Backspace: [
      backspaceInList, // Backspace in list item lifts node and breaks Volto blocks
    ],
  };

  return config;
};

export default applyConfig;
