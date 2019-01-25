import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

// Imports
import Example from '@/example';

// Stories
storiesOf('Base', module)
	.add('Default', () => ({
		components: { 
			Example
		},
		template: 
			`<example>Default</example>`
	}))
	.add('Info', () => ({
		components: { 
			Example
		},
		template: 
			`<example status="info">Info</example>`
	}))