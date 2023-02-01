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
        // remove any adjacent separators
        .filter((button, index, array) => button !== array[index + 1]),
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
