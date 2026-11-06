import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { BlockDataForm } from '@plone/volto/components/manage/Form';

const IntroductionBlockData = (props) => {
  const { block, data, onChangeBlock, blocksConfig } = props;
  const intl = useIntl();
  const { blockSchema, dataAdapter } = blocksConfig.introduction;
  const schema = blockSchema({ data, intl });

  return (
    <>
      <BlockDataForm
        schema={schema}
        title={schema.title}
        onChangeField={(id, value) => {
          dataAdapter({ block, data, id, onChangeBlock, value });
        }}
        formData={data}
        block={block}
      />
    </>
  );
};

IntroductionBlockData.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default IntroductionBlockData;
