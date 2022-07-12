import { useEffect, useRef, useState } from "react";
import * as React from 'react';

import "./styles.css";

// Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/third_party/embedly.min.js";
// import "froala-editor/js/plugins/fullscreen.min.js"

import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.css';
import 'froala-editor/js/plugins.pkgd.min.js';

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/third_party/embedly.min.css";
// import "froala-editor/css/plugins/fullscreen.min.css";

import Froala from "react-froala-wysiwyg";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import { options } from "./options";
import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';
import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';

export const FroalaEditor = () => {
  const ref = useRef({ editor: {data: {_init: null}} });
  const [isFroalaInitialized, setIsFroalaInitialized] = useState(false);
  const [editor, setEditor] = useState(undefined);
  const [model, setModel] = useState("");
  const [ variables, setVariables ] = useState({});
  const [variableButtons, setVariableButtons] = useState({
    name: 'Tyrion',
  });

  const buttonName = useRef();
  const buttonValue = useRef();

  const handleModelChange = (model) => {
    setModel(model);
  };


  // Editor initialization
  useEffect(() => {
    // if(!ref && !ref.current && ref.current.editor === null) return;
    ref.current.editor.data._init = null;
    setEditor(ref.current.editor);
    editor && setIsFroalaInitialized(true);
    console.log("tes", <Froala />);
  }, [ref.current]);

  // Do after initialization
  useEffect(() => {
    if (isFroalaInitialized) {
      editor.html.set(model);
    }
  }, [isFroalaInitialized]);


  const createVariableButton = () => {
      const {value: buttonNameValue} = buttonName.current;
      const {value: buttonValueValue} = buttonValue.current;

      setVariableButtons({
        ...variableButtons,
        [buttonNameValue]: buttonValueValue
      })
    setVariables({});
  }

  return (
    <>
      <div className="App">
        <Froala
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
        <br />
        <strong>Read only editor:</strong>
        <FroalaEditorView model={model} />
        <div>
          <label htmlFor="name">Variable Name</label>
          <input type="text" id="variables" name="name" ref={buttonName}/>
        </div>
        <div>
        <label htmlFor="value">Variable Value</label>
          <input type="text" id="variables" name="value" ref={buttonValue}/>
        </div>
        <button onClick={createVariableButton}>New Variable</button>
      </div>
      {Object.keys(variableButtons).map((btn, i) => (
          <button key={i} value={variableButtons[btn]}>{btn}</button>
      ))}
    </>
  );
};
