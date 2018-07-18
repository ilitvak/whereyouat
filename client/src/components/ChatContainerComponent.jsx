import React from 'react';
import FriendsListComponent from '../components/FriendsListComponent.jsx';
import ChatClientComponent from '../components/ChatClientComponent.jsx';
import GoogleMapsComponent from '../components/GoogleMapsComponent.jsx';

class ChatContainerComponent extends React.Component {
  constructor(props){
    super(props);

    // bind methods here
  }

  // use methods here

  render(){
    return(
      <div className='chat-container-component'>
        <FriendsListComponent friends={this.props.friends}/>
        <ChatClientComponent username={this.props.username}/>
        <GoogleMapsComponent
          long={this.props.long}
          lat={this.props.lat}/>
      </div>
    )
  }
}

export default ChatContainerComponent;
