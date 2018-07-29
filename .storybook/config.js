import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Container from './Container';

// automatically import all files ending in *.stories.js
const req = require.context('../app', true, /stories\.js$/)
function loadStories() {
  req.keys().forEach(req);
};

addDecorator(Container);
addDecorator(withKnobs);

configure(loadStories, module);
