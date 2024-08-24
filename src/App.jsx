import { useState, useEffect } from "react";
import Section from "./components/Section/Section.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx"
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
// import contactsData from "./Contacts.json"
import Modal from "./components/Modal/Modal.jsx"
import {  useSelector } from "react-redux";
// import { setFilterValue } from "./redux/filter/filterReducer.js";



const App = () => {
	const [modal, setModal] = useState(false)
	const onOpenModal = () => {
		setModal(true)
	}
	const onCloseModal = () => {
		setModal(false);
	};

	const users = useSelector(
		(state) => state.contacts.contacts
	);

	useEffect(() => {
		localStorage.setItem("contactsData", JSON.stringify(users))
	}, [users]);

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
				<ContactForm/>
			</Section>
			<Section>
				<SearchBox/>
			</Section>
			<Section>
				<ContactList/>
			</Section>
		</div>
	);
};

export default App;



