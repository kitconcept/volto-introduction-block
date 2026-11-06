import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vitest/config';

const here = path.dirname(fileURLToPath(import.meta.url));

// The add-on does not depend on react-intl itself. It comes with Volto, so
// resolve it from there, as the Volto build does.
const requireFromVolto = createRequire(
  path.resolve(here, 'node_modules/@plone/volto/package.json'),
);

export default defineConfig({
  resolve: {
    alias: {
      'react-intl': requireFromVolto.resolve('react-intl'),
    },
  },
  test: {
    environment: 'node',
    globals: true,
  },
});
