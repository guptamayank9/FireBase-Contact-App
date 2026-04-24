import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import { FiSearch } from 'react-icons/fi'
import { AiFillPlusCircle } from 'react-icons/ai'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from './config/firebase.js'
import Contact from './Components/Contact.jsx'
import AddAndUpdate from './Components/AddAndUpdate.jsx'
import useDisclose from './hooks/useDisclose.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NotFoundContact from './Components/NotFoundContact.jsx'

const App = () => {
  const [contacts, setContacts] = useState([])
  const { isOpen, setOpen, onOpen, onClose } = useDisclose()

  const getContacts = async () => {
    try {
      const contactsRef = collection(db, 'contacts')

      onSnapshot(contactsRef, (snapshot) => {
        const contactsLists = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        })
        setContacts(contactsLists)
        return contactsLists
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getContacts()
  }, [])

  const filterContact = (e) => {
    const value = e.target.value
    const contactsRef = collection(db, 'contacts')

    onSnapshot(contactsRef, (snapshot) => {
      const contactsLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      })
      const filteredContacts = contactsLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase()),
      )
      setContacts(filteredContacts)

      return filteredContacts
    })
  }
  return (
    <>
      <div className="mx-auto max-w-[370px]">
        <Navbar />
        <div className="flex gap-2">
          <div className="relative flex flex-grow items-center">
            <FiSearch className="absolute ml-1 text-3xl text-white" />
            <input
              onChange={filterContact}
              type="text"
              className="h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white"
            />
          </div>
          <AiFillPlusCircle
            onClick={onOpen}
            className="cursor-pointer text-5xl text-white"
          />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contacts.length <= 0 ? (
            <NotFoundContact />
          ) : (
            contacts.map((contact) => (
              <Contact
                key={contact.id}
                contact={contact}
                getContacts={getContacts}
              />
            ))
          )}
        </div>
      </div>
      <AddAndUpdate
        onClose={onClose}
        isOpen={isOpen}
        getContacts={getContacts}
      />
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  )
}

export default App
