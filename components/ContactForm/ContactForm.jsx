'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'


export default function ContactForm(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit=(event)=>{
    event.preventDefault()
    setIsSubmitted(true)
    setName("")
    setEmail("")
    setMessage("")
    
  }
const handleChange = (event, setValue) => {
  // Mettre à jour la valeur du champ
  setValue(event.target.value)
  // Masquer le message de confirmation
  setIsSubmitted(false)
}

  
  return(
    <form 
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <div className={styles.formGroup}>
            <label htmlFor="name">Nom</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={name}
              required 
              onChange={(event)=> {
                handleChange(event, setName)
                }
              }
            />
            
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value = {email} 
              required 
              onChange={(event) => {
                handleChange(event, setEmail)
                }
              }
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5"
              value = {message} 
              required
              onChange={(event)=> {
                handleChange(event, setMessage)
                }
              }
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Envoyer le message
          </button>
          {isSubmitted && <p>Votre message a bien été pris en compte !</p>}
        </form>
)}