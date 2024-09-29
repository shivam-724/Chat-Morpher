import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

function SearchInput() {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3){
      return toast.error('Search query must be at least 3 characters');
    }
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error(`No conversation found with name ${search}`);
    }
    // const conversation = conversations.find((conversation) => conversation.name === search);
    // if (conversation) {
    //   setSelectedConversation(conversation);
    // }
  }
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full'
        value={search} onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            <FaSearch className='w-5 h-5 outline-none' />
        </button>
    </form>
  )
}

export default SearchInput