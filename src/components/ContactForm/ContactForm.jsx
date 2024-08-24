import css from "./ContactForm.module.css"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/contactsReducer";
import { nanoid } from "nanoid";


const ContactValidationSchema = Yup.object().shape({
	contactName: Yup.string()
		.required("required")
		.min(2, "Too short")
		.max(50, "Too long"),
	contactNumber: Yup.string()
		.required("required")
		.min(2, "Too short")
		.max(50, "Too long"),
});
const INITIAL_VALUES = {
	contactName: "",
	contactNumber: "",
};
const ContactForm = () => {
	const dispatch = useDispatch();
	const handleSubmit = (values, actions) => {
		const contactObj = {
			name: values.contactName,
			number: values.contactNumber,
			id: nanoid(),
		}
		dispatch(addContact(contactObj));
		actions.resetForm();
	}
	
	return (
		<Formik
			initialValues={INITIAL_VALUES}
			onSubmit={handleSubmit}
			validationSchema={ContactValidationSchema}
		>
			
					<Form className={css.form}>
						<p>Name</p>
						<label className={css.label}>
							<Field
								type='text'
								name='contactName'
								
							/>
							<ErrorMessage className={css.errorText}
								name='contactName'
								component='span'
							/>
						</label>
						<p>Number</p>
						<label className={css.label}>
							<Field
								type='tel'
								name='contactNumber'
								
							/>
							<ErrorMessage className={css.errorText}
								name='contactNumber'
								component='span'
							/>
						</label>
						<button
							type='submit'
							className={css.addContactBtn}
						>
							✌️Add contact✌️
						</button>
					</Form>			
		</Formik>
	);
}

export default ContactForm
