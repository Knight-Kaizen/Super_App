import React from "react";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";
import WeatherApiComponent from "../../components/WeatherApiComponent/WeatherApiComponent";
import NewsApiComponent from "../../components/NewsApiComponent/NewsApiComponent";
import styles from "./Profile.module.css"
export default
    function ProfilePage() {
    return (

        <div className={styles.main}>
            <div className={styles.minor1}>
                <div className={styles.left}>
                    <div className={styles.top}>
                        {<ProfileComponent />}
                    </div>
                    <div className={styles.bottom}>
                        {/* {<WeatherApiComponent />} */}
                    </div>
                </div>
                <div className={styles.right}>
                    {/* {<NewsApiComponent />} */}
                </div>
            </div>
            <div className={styles.minor2}>
                <button className={styles.button}>Next Page</button>
            </div>
        </div>
    )
}