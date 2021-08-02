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
	RichText,
	InspectorControls,
	ColorPalette,
	MediaUpload,
	AlignmentToolbar,
	BlockControls,

} from '@wordpress/block-editor';

import { PanelBody, SelectControl, AlignmentControl, IconButton, RangeControl, ToggleControl, TextControl } from '@wordpress/components'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
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
		alignment,
		target,
		buttonPosition
	} = attributes;

	function onSelectBorderRadius(value) {
		setAttributes({ borderRadius: value })
	}

	function onChangeTitle(newTitle) {
		setAttributes({ title: newTitle });
	}

	function onChangeBody(newBody) {
		setAttributes({ body: newBody });
	}

	function onChangeButtonText(newButtonText) {
		setAttributes({ buttonText: newButtonText });
	}

	function onTitleColorChange(newColor) {
		setAttributes({ titleColor: newColor });
	}

	function onBodyColorChange(newColor) {
		setAttributes({ bodyColor: newColor });
	}

	function onButtonColorChange(newColor) {
		setAttributes({ buttonColor: newColor });
	}

	function onSelectImage(newImage) {
		setAttributes({ backgroundImage: newImage.sizes.full.url });
	}

	function onCTALinkUpdate(newLink) {
		setAttributes({ ctaLink: newLink })
	}

	function onTargetChange(newValue) {
		setAttributes({ target: newValue })
	}

	function onChangeAlignment(newAlignment) {
		setAttributes({
			alignment: newAlignment === undefined ? 'none' : newAlignment,
		});
	};

	function onChangeButtonAlignment(value) {
		setAttributes({
			buttonPosition: value
		})
	};

	return ([
		<InspectorControls style={{ marginBottom: '40px' }}>
			<PanelBody title={'CTA styles'}>
				<p><strong>Select a Background Image:</strong></p>
				<MediaUpload
					onSelect={onSelectImage}
					type="image"
					value={backgroundImage}
					render={({ open }) => (
						<IconButton
							className="editor-media-placeholder__button is-button is-default is-large"
							icon="upload"
							onClick={open}>
							Background Image
						</IconButton>
					)} />
				<ToggleControl
					label={'Round Border'}
					checked={borderRadius}
					onChange={onSelectBorderRadius}
				/>
			</PanelBody>
			<PanelBody title={'CTA link controls'}>
				<p><strong>Enter URL on button:</strong></p>
				<TextControl
					label="CTA link"
					value={ctaLink}
					onChange={onCTALinkUpdate}
				/>
				<p>Link target</p>
				<ToggleControl
					label={'Open link in new window'}
					checked={target}
					onChange={onTargetChange}
				/>
			</PanelBody>
			<PanelBody title={'Font Color Settings'}>
				<p><strong>Select Title color:</strong></p>
				<ColorPalette value={titleColor}
					onChange={onTitleColorChange} />
				<p><strong>Select Body color:</strong></p>
				<ColorPalette value={bodyColor}
					onChange={onBodyColorChange} />
				<p><strong>Select Button Text color:</strong></p>
				<ColorPalette value={buttonColor}
					onChange={onButtonColorChange} />
			</PanelBody>
			<PanelBody title={'CTA Button setting'}>
				<div>
					<SelectControl
						label="Button position"
						value={buttonPosition}
						options={[
							{ label: 'Left', value: 'flex-start' },
							{ label: 'Center', value: 'center' },
							{ label: 'Right', value: 'flex-end' },
						]}
						className='wp-cta-controlPanel'
						onChange={onChangeButtonAlignment}
					/>
				</div>
			</PanelBody>
		</InspectorControls>,

		<>
			<BlockControls>
				<AlignmentToolbar
					value={alignment}
					onChange={onChangeAlignment}
				/>
			</BlockControls>
			<div class="cta-container" style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				borderRadius: borderRadius ? '16px' : '0',
				textAlign: alignment,
			}}>
				<RichText key="editable"
					tagName="h1"
					placeholder="Your CTA Title"
					value={title}
					onChange={onChangeTitle}
					style={{
						color: titleColor,
						fontSize: '24px',
						fontWeight: 600,
						lineHeight: '28px',
					}} />
				<RichText key="editable"
					tagName="p"
					placeholder="Your CTA Description"
					value={body}
					onChange={onChangeBody}
					style={{ color: bodyColor }} />
				<div style={{
					justifyContent: buttonPosition,
					display: 'flex'
				}}>
					<button className='cta-button' style={{
						background: '#2C61F3',
						borderRadius: '47px'
					}}>
						<a>
							<RichText key="editable"
								tagName="p"
								placeholder="Your CTA button"
								value={buttonText}
								onChange={onChangeButtonText}
								style={{
									color: buttonColor,
									margin: '9px 15px'
								}}
								className='cta-button-text' />
						</a>
					</button>
				</div>
			</div>
		</>
	]);
}
