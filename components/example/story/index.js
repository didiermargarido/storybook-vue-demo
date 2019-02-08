import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withDocs, withReadme } from 'storybook-readme';
import { action } from '@storybook/addon-actions';

// Imports
import Example from '@/example';
import Docs from './DOCS.md';
import ReadMe from './README.md';

// Stories
storiesOf('Example', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(Docs))
  .addDecorator(withReadme(ReadMe))
	.add('Default', () => ({
		components: {
			Example
    },
    data() {
      return {
        text: text('Text', 'Default')
      };
    },
		template:
      `<example @egClick="egClick">
        {{ text }}
      </example>`,
    methods: {
      egClick: action('Clicked')
    }
	}))
	.add('Info', () => ({
		components: {
			Example
		},
    data() {
      return {
        text: text('Text', 'Info')
      };
    },
		template:
      `<example status="info" @egClick="egClick">
        {{ text }}
      </example>`,
    methods: {
      egClick: action('Clicked')
    }
	}))
