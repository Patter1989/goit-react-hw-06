import { useState, useEffect } from "react";
import Section from "./components/Section/Section.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx"
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
// import contactsData from "./Contacts.json"
import { nanoid } from "nanoid";
import Modal from "./components/Modal/Modal.jsx"
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "./redux/contacts/contactsReducer.js";
import { setFilterValue } from "./redux/filter/filterReducer.js";



const App = () => {
	const [modal, setModal] = useState(false)
	const onOpenModal = () => {
		setModal(true)
	}
	const onCloseModal = () => {
		setModal(false);
	};
	const dispatch = useDispatch()

	const users = useSelector(
		(state) => state.contacts.contacts
		// const [users, setUsers] = useState(() => {
		// 	const contactData = localStorage.getItem("contactsData");
		// 	return JSON.parse(contactData) ?? contacts;
		// })
	);

	const searchedContact = useSelector(
		(state) => state.filter.filterValue
	);


	
	
	const onAddContact = (contact) => {
		const finalContact = {
			...contact,
			id: nanoid(),
		}
		dispatch(addContact(finalContact))
		// setUsers((prevContacts)=> [finalContact, ...prevContacts,]);
		
	}


	const onDeleteContact = (contactId) => {
		dispatch(deleteContact(contactId));
	}

	useEffect(() => {
		localStorage.setItem("contactsData", JSON.stringify(users))
	},[users])
	const handleSearch = (event) => {
		const value = event.target.value;
		dispatch(setFilterValue(value))
		// setSearchedContact(value)
	}
	const filteredContacts = users.filter((contact)=> contact.name.toLowerCase().includes(searchedContact.toLowerCase()))
	return (
		<div>
			{modal && <Modal onCloseModal={onCloseModal} />}
			<h1>Phonebook</h1>
			<button
				type='button'
				onClick={onOpenModal}
			>
				Modal
			</button>
			<Section>
				<ContactForm onAddContact={onAddContact} />
			</Section>
			<Section>
				<SearchBox
					handleSearch={handleSearch}
					searchedContact={searchedContact}
				/>
			</Section>
			<Section>
				<ContactList
					onDeleteContact={onDeleteContact}
					filteredContacts={filteredContacts}
				/>
			</Section>
		</div>
	);
};

export default App;



