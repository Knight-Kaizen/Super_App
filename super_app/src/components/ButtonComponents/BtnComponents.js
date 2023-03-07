import React from "react"
import styles from "./BtnComponents.module.css"
export default
function ButtonComponents(props){
    return (
        <div className={styles.main} onClick = {()=>props.customClick(props.id)}>
            <div className={styles.content}>
                <div className={styles.text}>{props.title}</div>
                <div className={styles.close}>X</div>
            </div>
        </div>
    );
        
}