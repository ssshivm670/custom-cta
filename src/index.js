/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('create-block/custom-cta', {
	title: 'Call to Action',
	description: 'Block to generate a custom Call to Action',
	icon: 'format-image',
	category: 'layout',

	attributes: {
		title: {
			type: 'string',
			source: 'html',
			selector: 'h2'
		},
		titleColor: {
			type: 'string',
			default: 'black'
		},
		bodyColor: {
			type: 'string',
			default: 'black'
		},
		body: {
			type: 'string',
			source: 'html',
			selector: 'p'
		},
		backgroundImage: {
			type: 'string',
			default: null
		},
		overlayColor: {
			type: 'string',
			default: 'black'
		},
		overlayOpacity: {
			type: 'number',
			default: 0.3
		},
		ctaLink: {
			type: 'string',
			default: '#',
		},
		target: {
			type: 'boolean',
			default: '_self'
		},
		alignment: {
			type: 'string',
			default: 'none'
		},
		buttonPosition: {
			type: 'string',
			default: 'flex-start'
		}
	},

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
