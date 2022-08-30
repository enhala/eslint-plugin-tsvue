import type { ESLint } from 'eslint';
import processor from './processor';

export = {
  processors: {
    '.vue': processor,
  },
} as ESLint.Plugin;
