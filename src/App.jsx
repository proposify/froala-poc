import * as React from "react";

import { FroalaEditor } from "./FroalaEditor";
import Froalaeditor from 'froala-editor';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.css';
import 'file-loader?name=[name].[ext]!./custombutton.html';

Froalaeditor.DefineIcon('insert', {NAME: 'plus', SVG_KEY: 'add'});
Froalaeditor.RegisterCommand('insert', {
  title: 'Insert HTML',
  focus: true,
  undo: true,
  refreshAfterCallback: true,
  callback: function () {
    this.html.insert('My New HTML');
  }
});

const App = () => {
  return <FroalaEditor config={{
    pluginsEnabled:['align', 'link'], 
    toolbarButtons: [
      ['undo', 'redo' , 'bold'], 
      ['alert', 'clear', 'insert']
    ]}}/>;
};

export default App;
