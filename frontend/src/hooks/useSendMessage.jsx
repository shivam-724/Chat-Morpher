import React, { useState } from 'react'
import useConversation from '../zustand/useConversation';

const useSendMessage = () => {
  const {loading, setLoading} = useState(false);
  const {messages, setMessages, selectedConversation} = useConversation();
}

export default useSendMessage