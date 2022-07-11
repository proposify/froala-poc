import React, { Component } from 'react';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
// import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';


const FroalaPage = () => {
  return ( 
    <FroalaEditor tag='textarea'/>
   );
}
 
export default FroalaPage;