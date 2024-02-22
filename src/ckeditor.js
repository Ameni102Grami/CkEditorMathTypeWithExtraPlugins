import MathType from "@wiris/mathtype-ckeditor5";
import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily.js";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import Emoji from "@wwalc/ckeditor5-emoji/src/emoji";
import Base64UploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter";

export default class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.builtinPlugins = [
	Alignment,
	Base64UploadAdapter,
	Emoji,
	FontColor,
	Highlight,
	Essentials,
	FontSize,
	FontFamily,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	MathType,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	fontSize: {
		options: [9, 11, 13, "default", 17, 19, 21],
		supportAllValues: true,
	},
	emoji: [
		{ name: "smile", text: "😀" },
		{ name: "wink", text: "😉" },
		{ name: "cool", text: "😎" },
		{ name: "surprise", text: "😮" },
		{ name: "confusion", text: "😕" },
		{ name: "crying", text: "😢" },
	],
	fontColor: {
		colors: [
			{
				color: "hsl(0, 0%, 0%)",
				label: "Black",
			},
			{
				color: "hsl(0, 0%, 30%)",
				label: "Dim grey",
			},
			{
				color: "hsl(0, 0%, 60%)",
				label: "Grey",
			},
			{
				color: "hsl(0, 0%, 90%)",
				label: "Light grey",
			},
			{
				color: "hsl(0, 0%, 100%)",
				label: "White",
				hasBorder: true,
			},
		],
	},
	fontFamily: {
		options: [
			"default",
			"Ubuntu, Arial, sans-serif",
			"Ubuntu Mono, Courier New, Courier, monospace",
		],
	},
	toolbar: {
		items: [
			"emoji",
			"heading",
			"alignment",
			"|",
			"highlight",
			"fontfamily",
			"fontcolor",
			"fontsize",
			"fontColor",
			"bold",
			"italic",
			"imageUpload",
			"link",
			"bulletedList",
			"numberedList",
			"|",
			"indent",
			"outdent",
			"|",
			"imageUpload",
			"blockQuote",
			"insertTable",
			"mediaEmbed",
			"undo",
			"redo",
			"mathType",
			"chemType",
		],
	},
	image: {
		toolbar: [
			"imageStyle:full",
			"imageStyle:side",
			"|",
			"imageTextAlternative",
		],
	},
	table: {
		contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: "en",
};
