import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import Sidebar from './Sidebar';
import { DetachedTextBlockEditor } from '@plone/volto-slate/blocks/Text/DetachedTextBlockEditor';

const IntroductionBlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;

  return (
    <>
      <DetachedTextBlockEditor {...props} />
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
