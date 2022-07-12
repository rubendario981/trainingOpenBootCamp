import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/forms/contact'

const ContactListComponent =()=> {
  
  const infoContact = new Contact('Ruben Dario', 'Guzman Gonzalez', 'rubendario981@gmail.com', false)
  

  return (
    <div> 
        <ContactComponent contact={infoContact}></ContactComponent>
    </div>
  )
}

export default ContactListComponent