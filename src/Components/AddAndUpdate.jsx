import { db } from '../config/firebase.js'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import Modal from './Modal'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required('Name is Required'),
  email: Yup.string().email('Invalid Email').required('Email is Required'),
})

const AddAndUpdate = ({ isOpen, onClose, isUpdate, contact, getContacts }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, 'contacts')
      await addDoc(contactRef, contact)
      await getContacts()
      onClose()
      toast.success('Contact Added SuccessFully')
    } catch (error) {
      console.log(error)
    }
  }

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, 'contacts', id)
      await updateDoc(contactRef, contact)
      await getContacts()
      onClose()
      toast.success('Contact Updated Successfull')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate && contact
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: '',
                  email: '',
                }
          }
          onSubmit={(values) => {
            console.log(values)
            isUpdate ? updateContact(values, contact.id) : addContact(values)
          }}
        >
          <Form className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 rounded-md border px-2" />
              <div className="text-xs text-red-500">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" className="h-10 rounded-md border px-2" />
              <div className="text-xs text-red-500">
                <ErrorMessage name="email" />
              </div>
            </div>
            <button className="self-end rounded-md bg-orange-400 px-3 py-1.5 text-white">
              {isUpdate ? 'update' : 'add'} contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  )
}

export default AddAndUpdate
