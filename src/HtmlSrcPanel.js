import React from 'react';
import { Grid } from 'semantic-ui-react';

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

const HtmlSrcPanel = ({ html }) => {
  const minifiedHtml = htmlMinifier(html);
  const length = minifiedHtml.length;
  return (
    <Grid container rows={2} divided="vertically">
      <Grid.Row>
        <div>{minifiedHtml}</div>
      </Grid.Row>
      <Grid.Row>{length}</Grid.Row>
    </Grid>
  );
};

export default HtmlSrcPanel;
