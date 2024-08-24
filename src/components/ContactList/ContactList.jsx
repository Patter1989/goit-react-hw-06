import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";



const ContactList = () => {
	const users = useSelector((state) => state.contacts.contacts);
	const searchedContact = useSelector((state) => state.filter.filterValue);
	const filteredContacts = users.filter((contact) =>
		contact.name.toLowerCase().includes(searchedContact.toLowerCase())
	);
	
	
	return (
		<ul  className={css.list}>
			{filteredContacts.map((contact) => (
				<Contact
					key={nanoid()}
					id={contact.id}
					name={contact.name}
					number={contact.number}
					/>
			))}
		</ul>
	);
};
export default ContactList;

