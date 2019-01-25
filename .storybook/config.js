// Main imports
import { configure, addDecorator } from '@storybook/vue';
import { decorator } from './decorator';
// Import apps css file
import '@/app.scss';
// Add global decorator
addDecorator(decorator);
// Automatically import all story files
const componentStories = require.context('../components/', true, /story\/index\.js$/)
// Load stories
function loadStories() {
    componentStories.keys().forEach(componentStories);
}
configure(loadStories, module);