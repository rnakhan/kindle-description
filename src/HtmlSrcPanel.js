import React, { useState, useEffect } from 'react';
import {
  Grid,
  Divider,
  Icon,
  Header,
  Statistic,
  Label,
  Card,
  Button,
  Modal,
} from 'semantic-ui-react';

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
    .replace(/<\/ol>/g, '</ol><br />')
    .replace(/<br \/>$/g, '');
  return scrubbed;
};

const statColor = (count) => (count <= 4000 ? 'green' : 'red');

const HtmlSrcPanel = ({ html }) => {
  // copied has three states DEFAULT, YES, NO
  const [copied, setCopied] = useState('DEFAULT');
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (copied == 'YES' || copied == 'NO') {
      setShowModal(true);
    }
  }, [copied]);
  const minifiedHtml = htmlMinifier(html);
  const length = minifiedHtml.length > 0 ? minifiedHtml.length + 1 : 0;
  const closeModal = () => {
    setCopied('DEFAULT');
    setShowModal(false);
  };
  return (
    <>
      <Grid container rows={3}>
        <Grid.Row textAlign="right">
          <Grid.Column floated="right" style={{ marginTop: 5, marginRight: 0 }}>
            <Label>
              <Statistic horizontal size="mini" color={statColor(length)}>
                <Statistic.Label>
                  Characters&nbsp;&nbsp;&nbsp;&nbsp;
                </Statistic.Label>
                <Statistic.Value>{length}</Statistic.Value>
                <Statistic.Label> / 4000 </Statistic.Label>
              </Statistic>
            </Label>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row textAlign="center">
          <Grid.Column>
            <Button
              primary
              disabled={length == 0}
              animated="fade"
              onClick={() => {
                navigator.clipboard.writeText(minifiedHtml).then(
                  () => {
                    setCopied('YES');
                  },
                  () => {
                    setCopied('NO');
                  }
                );
              }}
            >
              <Button.Content visible>
                <Icon name="copy" /> Copy output
              </Button.Content>
              <Button.Content hidden>Click to copy code</Button.Content>
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Divider horizontal>
          <Header as="h4">
            <Icon name="file code outline" />
            Output
          </Header>
        </Divider>
        <Grid.Row>
          <Card fluid>
            <Card.Content>{minifiedHtml}</Card.Content>
          </Card>
        </Grid.Row>
      </Grid>
      <Modal size="mini" open={showModal} onClose={closeModal}>
        <Modal.Header>
          {copied == 'YES' ? 'Code Copied' : 'Unable to copy'}
        </Modal.Header>
        <Modal.Content>
          {copied == 'YES' ? (
            <p>
              You may now paste this code in the Amazon book description form
              without any alteration
            </p>
          ) : (
            <p>
              Please try copying by selecting the code below and using Ctrl-C or
              Cmd-C, then paste this code in the Amazon book description form
              without any alteration{' '}
            </p>
          )}
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={closeModal}>OK</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default HtmlSrcPanel;
