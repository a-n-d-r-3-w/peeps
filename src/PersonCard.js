// @flow
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = {
  card: {
    maxWidth: 480
  }
};

type Props = {};

type State = {
  textFieldValue: string
};

class PersonCard extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      textFieldValue: ''
    };
    (this: any).updateTextValue = this.updateTextValue.bind(this);
  }

  updateTextValue(event) {
    this.setState({ textFieldValue: event.target.value });
  }

  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Sherlock H.
            </Typography>
            <TextField
              label="Notes"
              value={this.state.textFieldValue}
              onChange={this.updateTextValue}
              multiline={true}
            />
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
}

export default withStyles(styles)(PersonCard);
