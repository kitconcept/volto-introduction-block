import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import Sidebar from './Sidebar';
import { DetachedTextBlockEditor } from '@plone/volto-slate/blocks/Text/DetachedTextBlockEditor';
import config from '@plone/volto/registry';

const IntroductionBlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  const unwantedButtons = ['heading-two', 'heading-three', 'blockquote'];

  const filteredToolbarProps = {
    ...props,
    slateSettings: {
      ...config.settings.slate,
      toolbarButtons: config.settings.slate.toolbarButtons
        .filter((button) => !unwantedButtons.includes(button))
        // eslint-disable-next-line array-callback-return
        .filter((button, index, array) => {
          if (button !== array[index + 1]) {
            return button;
          }
        }),
    },
  };

  return (
    <>
      <DetachedTextBlockEditor {...filteredToolbarProps} />
      <SidebarPortal selected={selected}>
        <Sidebar
          {...props}
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default IntroductionBlockEdit;
