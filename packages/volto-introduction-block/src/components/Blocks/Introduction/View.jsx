import cx from 'classnames';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';
import MaybeWrap from '@plone/volto/components/manage/MaybeWrap/MaybeWrap';

const LegacyWrapper = (props) => (
  <div
    className={cx('block', 'introduction', props.className)}
    style={props.style}
  >
    <div className="block-container">{props.children}</div>
  </div>
);

const IntroductionBlockView = (props) => {
  const { blocksConfig } = props;
  const isBlockModelv3 = blocksConfig?.introduction?.blockModel === 3;

  return (
    <MaybeWrap {...props} condition={!isBlockModelv3} as={LegacyWrapper}>
      <TextBlockView {...props} />
    </MaybeWrap>
  );
};

export default IntroductionBlockView;
