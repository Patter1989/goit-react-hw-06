import { BsFillPersonFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css"

const Contact = ({ name, number, id, onDeleteContact }) => {
	return (
		<li className={css.contactWrapper}>
			<ul className={css.contactList}>
				<li className={css.contactItem}>
					<BsFillPersonFill />
					{name}
				</li>
				<li className={css.contactItem}>
					<BsTelephoneFill />
					{number}
				</li>
			</ul>
			<button onClick={()=> onDeleteContact(id) }
				type='button'
				className={css.contactBtn}
			>
				delete
			</button>
		</li>
	);
};

export default Contact;
