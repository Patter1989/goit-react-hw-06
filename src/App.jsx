import { useState, useEffect } from "react";
import Section from "./components/Section/Section.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx"
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import contacts from "./Contacts.json"
import { nanoid } from "nanoid";
import Modal from "./components/Modal/Modal.jsx"



const App = () => {
	const [modal, setModal] = useState(false)
	const onOpenModal = () => {
		setModal(true)
	}
	const onCloseModal = () => {
		setModal(false);
	};
	const [users, setUsers] = useState(() => {
		const contactData = localStorage.getItem("contactsData");
		return JSON.parse(contactData) ?? contacts;
		
		
	})
	const [searchedContact, setSearchedContact] = useState("")
	const onAddContact = (contact) => {
		const finalContact = {
			...contact,
			id: nanoid(),
		}

		setUsers((prevContacts)=> [finalContact, ...prevContacts,]);
		// console.log(finalContact, contact);
	}


	const onDeleteContact = (contactId) => {
		setUsers((prevContacts) => prevContacts.filter((item) => item.id !== contactId));
		
	}

	useEffect(() => {
		localStorage.setItem("contactsData", JSON.stringify(users))
	},[users])
	const handleSearch = (event) => {
		const value = event.target.value;
		setSearchedContact(value)
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



