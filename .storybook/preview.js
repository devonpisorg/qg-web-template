import {createApp} from 'vue';
import prettier from 'prettier'
import HTMLParser from 'prettier/parser-html'
import '../src/stories/stories.css';

export const renderToDOM = (story) => {
  const div = document.createElement('div');
  createApp(story()).mount(div);
  const snippet = prettier.format(div.innerHTML.replaceAll("><", "> <"), {
    parser: 'html',
    plugins: [HTMLParser],
    printWidth: 100,
  });
  div.remove();
  return snippet;
}
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    transformSource: (src, storyContext) => renderToDOM(storyContext.originalStoryFn),
  },
}