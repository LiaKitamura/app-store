import React from 'react';
import { connect } from 'react-redux';
import { getApps } from '../actions/apps';
import {
  Container,
  Grid,
  Header,
  Card,
  Image,
} from 'semantic-ui-react';

class Apps extends React.Component {
  componentDidMount() {
    this.props.dispatch(getApps())
  }

  render() {
    return (
      <Container>
        <Header as='h3' textAlign='center'>Apps</Header>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { apps: state.apps }
}

export default connect(mapStateToProps)(Apps);