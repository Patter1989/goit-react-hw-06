import { useEffect, useState } from "react";
import css from "./Modal.module.css"


const Modal = ({ onCloseModal }) => {
  const [click, setClick] = useState(() => {
    return Number(localStorage.getItem("count"))?? 0;
  }
  );

  useEffect(() => {
    
      localStorage.setItem("count", click);
    
    
  }, [click]);
  
  useEffect(() => {
    console.log('modal');
    
    const handleKeydown = (event) => {
    if (event.code === "Escape") {
      onCloseModal()
    }
    }
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown)
    }
  }, [onCloseModal,])

  const onHandleBackDropClick = (event) => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  }
  const onResetBtn = () => {
    localStorage.removeItem("count");
    setClick(0)
  }
  
  
  
  
  
  return (
		<div className={css.backdrop} onClick={onHandleBackDropClick}>
			<div className={css.modal}>
				<button
					type='button'
					className={css.closeBtn}
          onClick={onCloseModal}
          aria-label="Close button"
				>
					X
				</button>
				<h3>Modal</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
					corporis cumque reprehenderit repudiandae blanditiis id, facere
					pariatur delectus ut fugiat minima explicabo sequi voluptatem nostrum
					perferendis labore tempora dolores nisi.
				</p>
        <button type='button' onClick={() => setClick((prevState) => prevState+1)
        }>counter: {click}</button>
        <button type="button" onClick={onResetBtn}>Reset</button>
			</div>
		</div>
	);
}

export default Modal
