// @flow
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 480
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
};

function PersonCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Sherlock H.
          </Typography>
          <Typography component="p">Text editor goes here.</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary">
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(PersonCard);
