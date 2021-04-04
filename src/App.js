import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Divider } from 'semantic-ui-react';
import { Editor } from '@tinymce/tinymce-react';

import HtmlSrcPanel from './HtmlSrcPanel';

const App = () => {
  const [html, setHtml] = useState('');

  const handleEditorChange = (content, editor) => {
    //console.log(content);
    setHtml(editor.getContent({ format: 'html' }));
  };

  return (
    <Container>
      <Container fluid>
        <Header as="h2">Header</Header>
        <p>
          This is the best form of Amazon bah blah and you van get the exact
          mechanism in place for this when you need it.
        </p>
      </Container>
      <Divider />
      <Editor
        apiKey="zdnxg7ujvq650ulbo75wod1y4gs68hb84tzg3z8bn3pzol06"
        init={{
          menubar: 'edit',
          height: 600,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help',
          ],
          toolbar:
            'undo redo | h4 h5 h6 | bold italic underline | \
            bullist numlist outdent indent | removeformat ',
        }}
        onEditorChange={handleEditorChange}
      />
      <HtmlSrcPanel html={html} />
    </Container>
  );
};

export default App;
