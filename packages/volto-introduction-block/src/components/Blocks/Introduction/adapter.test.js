import { IntroductionBlockDataAdapter } from './adapter';

describe('IntroductionBlockDataAdapter', () => {
  it('calls onChangeBlock with the data merged with the changed field', () => {
    const onChangeBlock = vi.fn();
    const data = {
      '@type': 'introduction',
      value: [{ type: 'p', children: [{ text: 'Old' }] }],
      plaintext: 'Old',
    };

    IntroductionBlockDataAdapter({
      block: 'block-1',
      data,
      id: 'plaintext',
      onChangeBlock,
      value: 'New',
    });

    expect(onChangeBlock).toHaveBeenCalledTimes(1);
    expect(onChangeBlock).toHaveBeenCalledWith('block-1', {
      '@type': 'introduction',
      value: [{ type: 'p', children: [{ text: 'Old' }] }],
      plaintext: 'New',
    });
  });

  it('keeps the existing fields that the change does not touch', () => {
    const onChangeBlock = vi.fn();
    const data = { '@type': 'introduction', value: [], other: 'kept' };

    IntroductionBlockDataAdapter({
      block: 'block-2',
      data,
      id: 'value',
      onChangeBlock,
      value: [{ type: 'p', children: [{ text: 'Text' }] }],
    });

    const [, saved] = onChangeBlock.mock.calls[0];
    expect(saved.other).toBe('kept');
    expect(saved.value).toStrictEqual([
      { type: 'p', children: [{ text: 'Text' }] },
    ]);
  });
});
