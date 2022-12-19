import cx from 'classnames';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';

const IntroductionBlockView = (props) => {
  const { className } = props;

  return (
    <div className={cx('block', 'introduction', className)}>
      <div className="block-container">
        <TextBlockView {...props} />
      </div>
    </div>
  );
};

export default IntroductionBlockView;
