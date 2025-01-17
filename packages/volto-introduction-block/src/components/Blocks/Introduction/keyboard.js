import { Transforms } from 'slate';
import config from '@plone/volto/registry';
import {
  isCursorInList,
  isCursorAtListBlockStart,
} from '@plone/volto-slate/utils';

/**
 * Handles the Backspace key press event in the given `editor`.
 *
 * @param {Editor} editor
 * @param {Event} event
 */
export function backspaceInList({ editor, event }) {
  // If the cursor is not in a list, nothing special.
  if (!isCursorInList(editor)) return false;

  if (isCursorAtListBlockStart(editor)) {
    const { slate } = config.settings;

    // Raise all LI-s as direct children of the editor.
    // TODO: add check for path depth
    // Error: Cannot lift node at a path [0] because it has a depth of less
    // than `2`.
    Transforms.liftNodes(editor, {
      match: (n, path) => {
        // console.log('lift', n, path);
        return path.length > 1 && n.type === slate.listItemType;
      },
    });

    // Convert all the selection to be of type `slate.defaultBlockType` (by
    // default 'p' or paragraph).
    Transforms.setNodes(editor, { type: slate.defaultBlockType });

    return true;
  }
}
