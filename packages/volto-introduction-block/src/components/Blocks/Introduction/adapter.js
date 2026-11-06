// Saves a change made in the settings form. Volto calls it with this full
// signature, so custom adapters should keep it.
export const IntroductionBlockDataAdapter = ({
  block,
  data,
  id,
  onChangeBlock,
  value,
}) => {
  onChangeBlock(block, {
    ...data,
    [id]: value,
  });
};
