import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const App = () => {
  const [html, setHtml] = useState('');

  const handleEditorChange = (content, editor) => {
    //console.log(content);
    setHtml(editor.getContent({ format: 'html' }));
  };

  const htmlMinifier = (inp) => {
    const scrubbed = inp
      .replace('<p>&nbsp;</p>', '<br />')
      .replace(/<p>/g, '')
      .replace(/<\/p>/g, '<br />')
      .replace(/>&nbsp;</g, '><')
      .replace(/&nbsp;/g, ' ')
      .replace(/>\s</g, '><')
      .replace(/<strong>/g, '<b>')
      .replace(/<\/strong>/g, '</b>')
      .replace(/<em>/g, '<i>')
      .replace(/<\/em>/g, '</i>')
      .replace(/&ldquo;/g, '"')
      .replace(/&rdquo;/g, '"')
      .replace(/<\/ul>/g, '</ul><br />')
      .replace(/<\/ol>/g, '</ol><br />');
    return scrubbed;
  };

  return (
    <>
      <Editor
        apiKey="zdnxg7ujvq650ulbo75wod1y4gs68hb84tzg3z8bn3pzol06"
        init={{
          menubar: 'edit',
          height: 400,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help',
          ],
          toolbar:
            'undo redo | h4 h5 h6 | bold italic underline | \
            bullist numlist | removeformat ',
        }}
        onEditorChange={handleEditorChange}
      />
      <div>{html}</div>
      <div>****************</div>
      <div>{htmlMinifier(html)}</div>
      <div>------------------ characters </div>
    </>
  );
};

export default App;
