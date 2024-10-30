import BottomModal from "./BottomModal.jsx"
import TopModal from "./TopModal.jsx"
import styles from "./Modal.module.css"

function Modal(){

    return(
        <div className={styles.modalContainer}>
            <TopModal />
            <BottomModal />
        </div>
    )
}

export default Modal