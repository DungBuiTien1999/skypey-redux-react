import React from "react";
import _ from 'lodash';

import Chats from "../../components/Chats";
import Header from "../../components/Header";
import './ChatWindow.css'
import store from '../../store';
import MessageInput from "../MessageInput";


const ChatWindow = ({ activeUserId }) => {
    const { contacts, messages, typing } = store.getState();
    const activeUser = contacts[activeUserId];
    const activeMsgs = messages[activeUserId];

  return (
    <div className="ChatWindow">
        <Header user={activeUser} />
        <Chats messages={_.values(activeMsgs)} />
        <MessageInput value={typing} />
    </div>
  );
};

export default ChatWindow;