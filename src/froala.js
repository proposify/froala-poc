import React, { useRef, useState, useEffect } from 'react';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
// import 'font-awesome/css/font-awesome.css';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';
import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';

import FroalaEditor from 'react-froala-wysiwyg';


const FroalaPage = () => {
  const ref = useRef({ editor: null });
  const [isFroalaInitialized, setIsFroalaInitialized] = useState(false);
  // const tribute = new Tribute(options);
  const [editor, setEditor] = useState(undefined);
  const [model, setModel] = useState("");

  const handleModelChange = (model) => {
    setModel(model);
  };

  useEffect(() => {
    if (!ref && !ref.current && !ref.current.editor && !ref.current.editor.data._init) return;
    ref.current.editor.data._init = null;
    setEditor(ref.current.editor);
    editor && setIsFroalaInitialized(true);
    console.log("tes", <Froala />);
  }, [ref.current]);

  useEffect(() => {
    if (isFroalaInitialized) {
      // tribute.attach(editor.el);
      editor.html.set(model);
    }
  }, [isFroalaInitialized]);

  return (
    <>
    <FroalaEditor 
      ref={ref}
      model={model}
      onModelChange={handleModelChange}
      tag="textarea"
      config={{
        attribution: false,
        placeholder: "Start typing...",
        toolbarButtons: {
          moreText: {
            buttons: [
              "bold",
              "italic",
              "underline",
              "strikeThrough",
              "subscript",
              "superscript",
              "fontFamily",
              "fontSize",
              "textColor",
              "backgroundColor",
              "inlineClass",
              "inlineStyle",
              "clearFormatting"
            ]
          },
          moreParagraph: {
            buttons: [
              "alignLeft",
              "alignCenter",
              "formatOLSimple",
              "alignRight",
              "alignJustify",
              "formatOL",
              "formatUL",
              "paragraphFormat",
              "paragraphStyle",
              "lineHeight",
              "outdent",
              "indent",
              "quote"
            ]
          },
          moreRich: {
            buttons: [
              "insertLink",
              "insertImage",
              "insertVideo",
              "insertTable",
              "emoticons",
              "fontAwesome",
              "specialCharacters",
              "embedly",
              "insertFile",
              "insertHR"
            ]
          },
          moreMisc: {
            buttons: [
              "undo",
              "redo",
              "fullscreen",
              "print",
              "getPDF",
              "spellChecker",
              "selectAll",
              "html",
              "help"
            ],
            align: "right",
            buttonsVisible: 2
          }
        },
        pluginsEnabled: [
          "table",
          "spell",
          "quote",
          "save",
          "quickInsert",
          "paragraphFormat",
          "paragraphStyle",
          "help",
          "draggable",
          "align",
          "link",
          "lists",
          "file",
          "image",
          "emoticons",
          "url",
          "video",
          "embedly",
          "colors",
          "entities",
          "inlineClass",
          "inlineStyle",
          // 'codeBeautif '
          // 'spellChecker',
          "imageTUI"
        ]
      }}
    />
    <FroalaEditorView model={model} />
    </>
   );
}
 
export default FroalaPage;