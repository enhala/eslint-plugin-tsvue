import type { Linter } from 'eslint';
import { parseComponent } from 'vue-sfc-parser';
import vueEslintPluginProcessor from 'eslint-plugin-vue/lib/processor';

export = Object.assign({}, vueEslintPluginProcessor, {
  preprocess(text: string, filename: string): Linter.ProcessorFile[] {
    const parseResult = parseComponent(text);
    const script = parseResult.script;
    const lang = script?.lang || 'js';

    if (lang === 'js') {
      return [{ text, filename }];
    }

    return [{ text, filename: filename.replace(/\.vue$/, `.${lang}vue`) }];
  },
} as Linter.Processor);
