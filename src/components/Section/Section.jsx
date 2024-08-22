import css from "./section.module.css"

const Section = ({ children }) => {
  return (
		<section
			className={css.section}
		>
			{children}
		</section>
	);
}

export default Section;