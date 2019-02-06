import { storiesOf } from '@storybook/vue';

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
