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
import { useBlockProps, RichText,
    InspectorControls,
    ColorPalette,
    MediaUpload } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
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
		body,
		titleColor,
		backgroundImage,
		overlayColor,
		overlayOpacity
	} = attributes;

	// custom functions
	function onChangeTitle(newTitle) {
		setAttributes( { title: newTitle } );
	}

	function onChangeBody(newBody) {
		setAttributes( { body: newBody } );
	}

	function onTitleColorChange(newColor) {
		setAttributes( { titleColor: newColor } );
	}

	function onSelectImage(newImage) {
		setAttributes( { backgroundImage: newImage.sizes.full.url } );
	}

	function onOverlayColorChange(newColor) {
		setAttributes( { overlayColor: newColor } );
	}

	function onOverlayOpacityChange(newOpacity) {
		setAttributes( { overlayOpacity: newOpacity } );
	}

	return ([
		<InspectorControls style={ { marginBottom: '40px' } }>
			<PanelBody title={ 'Font Color Settings' }>
				<p><strong>Select a Title color:</strong></p>
				<ColorPalette value={ titleColor }
							  onChange={ onTitleColorChange } />
			</PanelBody>
			<PanelBody title={ 'Background Image Settings' }>
				<p><strong>Select a Background Image:</strong></p>
				<MediaUpload
					onSelect={ onSelectImage }
					type="image"
					value={ backgroundImage }
					render={ ( { open } ) => (
						<IconButton
							className="editor-media-placeholder__button is-button is-default is-large"
							icon="upload"
							onClick={ open }>
							 Background Image
						</IconButton>
					)}/>
				<div style={{ marginTop: '20px', marginBottom: '40px' }}>
					<p><strong>Overlay Color:</strong></p>
					<ColorPalette value={ overlayColor }
								  onChange={ onOverlayColorChange } />
				</div>
				<RangeControl
					label={ 'Overlay Opacity' }
					value={ overlayOpacity }
					onChange={ onOverlayOpacityChange }
					min={ 0 }
					max={ 1 }
					step={ 0.01 }/>
			</PanelBody>
		</InspectorControls>,
		<div class="cta-container" style={{
			backgroundImage: `url(${backgroundImage})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat'
		}}>
			<RichText key="editable"
					  tagName="h2"
					  placeholder="Your CTA Title"
					  value={ title }
					  onChange={ onChangeTitle }
					  style={ { color: titleColor } }/>
			<RichText key="editable"
					  tagName="p"
					  placeholder="Your CTA Description"
					  value={ body }
					  onChange={ onChangeBody }/>
		</div>
	]);
}
