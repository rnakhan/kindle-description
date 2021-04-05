import React from 'react';
import {
  Grid,
  Divider,
  Icon,
  Header,
  Statistic,
  Label,
  Card,
  Segment,
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
  const minifiedHtml = htmlMinifier(html);
  const length = minifiedHtml.length > 0 ? minifiedHtml.length + 1 : 0;
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

        <Divider horizontal>
          <Header as="h4">
            <Icon name="file code outline" />
            Output
          </Header>
        </Divider>
        <Grid.Row>
          <Grid.Column>
            <Segment raised>
              {length > 0 && (
                <Label as="a" color="blue" ribbon>
                  Copy this code
                </Label>
              )}
              <Card.Content>{minifiedHtml}</Card.Content>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default HtmlSrcPanel;
