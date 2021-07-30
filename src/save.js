/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */

import {
	useBlockProps, RichText,
	InspectorControls,
	ColorPalette,
	InnerBlocks,
	MediaUpload
} from '@wordpress/block-editor';



import { PanelBody, IconButton, RangeControl } from '@wordpress/components'

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const {
		title,
		titleColor,
		body,
		bodyColor,
		buttonText,
		buttonColor,
		borderRadius,
		backgroundImage,
		overlayColor,
		overlayOpacity,
		ctaLink,
		target,
		alignment,
		buttonPosition
	} = attributes
	return (
		<div class="cta-container" style={{
			backgroundImage: `url(${backgroundImage})`,
			borderRadius: borderRadius ? '16px' : '0',
			textAlign: alignment
		}}>
			<RichText.Content
				tagName="h2"
				value={title}
				style={{ color: titleColor }}
			/>
			<RichText.Content
				tagName="p"
				value={body}
				style={{ color: bodyColor }}
			/>
			<div style={{ justifyContent: buttonPosition }}>
				<button>
					<a href={ctaLink} target={target ? '_blank' : '_self'}>
						<RichText.Content
							tagName="p"
							value={buttonText}
							style={{ color: buttonColor }}
						/>
					</a>
				</button>

			</div>
		</div>
	);
}
