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

import { RichText } from '@wordpress/block-editor';

import './style.scss'
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
		ctaLink,
		target,
		alignment,
		buttonPosition
	} = attributes
	return (
		<div className='cta-container' style={{
			backgroundImage: `url(${backgroundImage})`,
			borderRadius: borderRadius ? '16px' : '0',
			textAlign: alignment,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			padding: '24px 24px 28px',
		}}>
			<RichText.Content
				tagName="h1"
				value={title}
				style={{
					color: titleColor,
					fontSize: '24px',
					fontWeight: 600,
					lineHeight: '28px',
				}}
			/>
			<RichText.Content
				tagName="p"
				value={body}
				style={{ color: bodyColor }}
			/>
			<div style={{
				justifyContent: buttonPosition,
				display: 'flex'
			}}>
				<button className='cta-button' style={{
					background: '#2C61F3',
					borderRadius: '47px'
				}}>
					<a href={ctaLink} target={target ? '_blank' : '_self'}>
						<RichText.Content
							tagName="p"
							value={buttonText}
							style={{
								color: buttonColor,
								margin: '9px 15px'
							}}
							className='cta-button-text'
						/>
					</a>
				</button>

			</div>
		</div >
	);
}
