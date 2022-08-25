import { ESLint } from 'eslint';
import processor from './processor';

export default {
  processors: {
    '.vue': processor,
  },
} as ESLint.Plugin;
