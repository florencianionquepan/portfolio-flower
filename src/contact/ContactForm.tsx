import { useForm } from "../hooks/useForm"
import { InputField } from "../formFields/InputField"
import { ContactFormData } from "./ContactData"
import { formValidations } from "./formValidations"
import { useState } from "react"
import { TextAreaField } from "../formFields/TextAreaField"
import { AppDispatch } from "../store/store"
import { useDispatch } from "react-redux"
import { startSendingContactForm } from "../store/contactForm/thunk"

export const ContactForm= () => {

  const dispatch: AppDispatch = useDispatch();

  const initialFormState: ContactFormData = {
    email: "",
    subject: "",
    description: "",
}

  const [formSubmitted, setFormSubmitted] = useState(false)

  const {email, subject, description, onInputChange, formState, 
      emailValid, subjectValid, descriptionValid, isFormValid} 
  = useForm<ContactFormData>(initialFormState, formValidations)

  const onSubmit = (event: React.SyntheticEvent) =>{
      event.preventDefault();
      setFormSubmitted(true);
      if(!isFormValid) return;
      dispatch(startSendingContactForm(formState));
  }

  return (
    <form autoComplete="off" onSubmit={onSubmit} id="contact">
      <div className="space-y-12 w-full max-w-4xl mx-auto">
        <div className="border rounded border-purple-600 p-5 shadow-lg shadow-purple-400 mt-5">

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-3 ml-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="col-span-1">
                <InputField
                    name="email"
                    label="Email"
                    value={email}
                    onChange={onInputChange} 
                    hasError={!!emailValid && formSubmitted}
                    errorMessage={emailValid}
                    />
                </div>

                <div className="col-span-1">
                <InputField
                    name="subject"
                    label="Subject"
                    value={subject}
                    onChange={onInputChange} 
                    hasError={!!subjectValid && formSubmitted}
                    errorMessage={subjectValid}
                    />
                </div>

                <div className="col-span-1 md:col-span-2">
                  <TextAreaField
                    label="Description"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                    hasError={!!descriptionValid && formSubmitted}
                    errorMessage={descriptionValid}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
                <button type="submit" className="border rounded border-2 border-purple-600 p-1 px-2">
                    Send Message
                </button>
           </div>

        </div>

      </div>
    </form>
  )
}
