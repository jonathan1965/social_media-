
import React, { Component } from 'react';
import {RaisedButton } from 'material-ui';
import {ListItem, Divider, Avatar} from 'material-ui';
import Group from 'material-ui/svg-icons/social/person-add';

export default class UsersFollow extends Component {
    constructor(props) {
        super(props);
        this.state = {
          suggestions: window.data.auth.suggestions,
          disabled: true,
          label : "follow",
          primary:true,
          fill:'white'
        }
        this.enableEdit = this.enableEdit.bind(this)
      }
    
      enableEdit() {
          if(this.state.label === "follow"){
            this.setState({
                disabled: !this.state.disabled,
                label:"unfollow",
                primary:false,
                fill:'black'
                })
          }else{
            this.setState({
                disabled: this.state.disabled,
                label:"follow",
                primary:true,
                fill:'white'
                })
          }
        
      }
  render() {
      const {profilePicture,biography, username, name} = this.props.user;
    return (
        <div key={name} className="">
      <ListItem
        leftAvatar={<Avatar src={profilePicture} />}
        rightIconButton={<RaisedButton onClick={this.enableEdit} 
        label={this.state.label} 
        icon={<Group style={{fill:this.state.fill , size:'67'}}/>} 
        variant={"outlined"} style={{margin:'23px'}} 
        primary={this.state.primary}/>}
        primaryText={
          <div className="list-primary-text">
            <span>@{name}</span>
          </div>
        }
        secondaryText={
          <small>{biography
          
          }</small>
        }
        secondaryTextLines={2}
      />
      <Divider/>
    </div>
    )
  }
}
