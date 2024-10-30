import styles from "./BottomModal.module.css"

function BottomModal(){

    return(
        <div className={styles.bottomModalContainer}>
            <div className={styles.confirmationQuestionContainer}>
                <div className={styles.questionText}>
                    <h3>Are you absolutely sure?</h3>
                </div>

                <div className={styles.confirmationBodyText}>
                    <p>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>
                </div>
            </div>

            <div className={styles.bottomButtonContainer}>
                <div className={styles.cancelButton}>
                    <button>Cancel</button>
                </div>

                <div className={styles.continueButton}>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default BottomModal