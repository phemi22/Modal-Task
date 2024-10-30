import styles from "./TopModal.module.css"

function TopModal(){

    const handleViewDocsClick = (e)=>{
        window.open("https://ui.shadcn.com/docs/components/alert-dialog", "_blank")
    }

    return(

        <div className={styles.topModalContainer}>
            <div className={styles.alertDialogContainer}>
                <div className={styles.alertDialog}>
                    <h1>Alert Dialog</h1>
                </div>

                <div className={styles.alertDialogBodyText}>
                    <p>A modal dialog that interrupts the user with important content and expects a response.</p>
                </div>
            </div>

            <div className={styles.topButtonContainer}>
                <button onClick={handleViewDocsClick}>View docs</button>
            </div>
        </div>
    )
}

export default TopModal