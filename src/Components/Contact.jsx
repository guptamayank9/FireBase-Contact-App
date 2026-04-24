import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { RiEditCircleLine } from 'react-icons/ri'
import { IoMdTrash } from 'react-icons/io'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../config/firebase.js'
import AddAndUpdate from './AddAndUpdate'
import { useState } from 'react'
import useDisclose from '../hooks/useDisclose.jsx'
import { toast } from 'react-toastify'

const Contact = ({ contact, getContacts }) => {
  const { isOpen, onClose, onOpen } = useDisclose()

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, 'contacts', id))
      getContacts()

      toast.success('Contact Deleted Successfully')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="flex items-center justify-between rounded-lg bg-yellow-200 p-3">
        <div className="flex items-center gap-2">
          <HiOutlineUserCircle className="text-4xl text-orange-400" />
          <div>
            <h2 className="font-medium text-black">{contact.name}</h2>
            <p className="text-sm text-gray-700">{contact.email}</p>
          </div>
        </div>

        <div className="flex gap-2 text-2xl">
          <RiEditCircleLine
            onClick={onOpen}
            className="cursor-pointer text-blue-500"
          />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="cursor-pointer text-red-500"
          />
        </div>
      </div>
      <AddAndUpdate
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}

export default Contact
