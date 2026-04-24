import React from 'react'
import { useState } from 'react';
const useDisclose = () => {
     const [isOpen , setOpen] = useState(false);
      
      const onOpen =() =>{
        setOpen(true);
      }
    //custom hook
      const onClose = () =>{
        setOpen(false);
      }
  return {isOpen,onClose,onOpen};
}

export default useDisclose
