import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Divider, Icon, Segment } from 'semantic-ui-react';
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
        <Header as="h2">Amazon KDP Book Description Editor</Header>
        <p>
          Amazon has strict rules about writing your book description and even
          if you know HTML you may be in for a surprise because Amazon only
          allows a restricted set of HTML tags.
        </p>
        <p>
          While there are some book description tools that may just do the job
          for you - we guarantee that we generate the most optimal minified
          version of HTML output. Our HTML generator uses 30% less characters
          than most editors, thereby giving you most of the 4000 characters to
          write your book description.
        </p>
        <Segment raised>
          <p>
            Don't believe us? Just start writing your book description content
            and see the optimized Amazon compliant code in realtime below.
          </p>
        </Segment>
      </Container>
      <Divider horizontal>
        <Header as="h4">
          <Icon name="edit" />
          Editor
        </Header>
      </Divider>
      <Editor
        apiKey={process.env.REACT_APP_MINI_PROD_API_KEY}
        init={{
          menubar: 'edit',
          height: 500,
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
