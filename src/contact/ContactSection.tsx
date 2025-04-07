import { Titles } from '../assets/Titles'
import { ContactForm } from './ContactForm'

export const ContactSection = () => {
  return (
    <div className="p-8 xl:px-16" id="contacts">
        <div className="flex items-center justify-between mb-4">
            <Titles title='Contact Me!'/>
        </div>
        <ContactForm/>
    </div>
  )
}
