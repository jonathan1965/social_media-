import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui';
import {List} from 'material-ui';
import UsersFollow from './UsersFollow';

class HomeFollow extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log("props__: ", this.props.users)
  const users = this.props.users;

      return (
        <Card className="sidebar-component" initiallyExpanded={true} >
         <CardHeader
            className="card-header"
            title={<h2>Follow now</h2>}
            actAsExpander={true}
            showExpandableButton={true}
           />
      <CardText expandable={true} className="card-text">
        <List>{
          users.map((user)=>{
            return <UsersFollow user={user}/>
          })
        }
        </List>
        </CardText>
         </Card>
      );
    }
  }
  export default HomeFollow;
