import React, { Component } from 'react';
import {Card, CardHeader, CardText, RaisedButton } from 'material-ui';
import {List, ListItem, Divider, Avatar} from 'material-ui';
import Group from 'material-ui/svg-icons/social/person-add';


class HomeFollow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: window.data.auth.suggestions,
      disabled: true,
      label : "follow"
    }
    this.enableEdit = this.enableEdit.bind(this)
  }

  enableEdit() {
    this.setState({
    disabled: !this.state.disabled,
    label:"unfollow" 
    })
  }

  
  render() {
    
    const listSuggestions = this.state.suggestions.map((s) =>
    <div key={s.name} className="">
      <ListItem
        leftAvatar={<Avatar src={s.profilePicture} />}
        rightIconButton={<RaisedButton onClick={this.enableEdit} label={this.state.label} icon={<Group style={{fill:'white' , size:'67'}}/>} variant={"outlined"} style={{margin:'23px'}} primary={true} />}
        primaryText={
          <div className="list-primary-text">
            <span>@{s.name}</span>
          </div>
        }
        secondaryText={
          <small>{s.biography
          
          }</small>
        }
        secondaryTextLines={2}
      />
      <Divider/>
    </div>);

      return (
        <Card className="sidebar-component" initiallyExpanded={true} >
          <CardHeader
            className="card-header"
            title={<h2>Follow now</h2>}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true} className="card-text">
            <List>
              {listSuggestions}
            </List>
          </CardText>
        </Card>
      );
    }
  }

  export default HomeFollow;
