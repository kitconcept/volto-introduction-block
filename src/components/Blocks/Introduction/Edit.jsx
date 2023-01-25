import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import Sidebar from './Sidebar';
import { DetachedTextBlockEditor } from '@plone/volto-slate/blocks/Text/DetachedTextBlockEditor';
import config from '@plone/volto/registry';

const IntroductionBlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;

  const filteredToolbarProps = {
    ...props,
    slateSettings: {
      ...config.settings.slate,
      toolbarButtons: [
        'bold',
        'italic',
        'strikethrough',
        'link',
        'separator',
        'sub',
        'sup',
        'separator',
        'numbered-list',
        'bulleted-list',
      ],
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
