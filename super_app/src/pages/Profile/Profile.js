import React from "react";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";
import WeatherApiComponent from "../../components/WeatherApiComponent/WeatherApiComponent";
import NewsApiComponent from "../../components/NewsApiComponent/NewsApiComponent";
import TimerComponent from "../../components/TimerComponent/TimerComponent";
import styles from "./Profile.module.css"
export default
    function ProfilePage() {
    return (

        <div className={styles.main}>
            <div className={styles.top}>
                <div className={styles.left}>
                    <div className={styles.leftTop}>
                        <div className={styles.others}>
                            <div className={styles.profile}>
                                {<ProfileComponent/>}
                            </div>
                            <div className={styles.weather}>
                                {<WeatherApiComponent/>}
                            </div>
                        </div>
                        <div className={styles.notes}>
                            <h2>
                            Underdevelopment !!!...
                            </h2>
                            
                        </div>
                    </div>
                    <div className={styles.leftBottom}>
                        {<TimerComponent/>}
                    </div>
                </div>
                <div className={styles.right}>
                    {<NewsApiComponent/>}
                </div>
            </div>
            <div className={styles.bottom}>
                <button className={styles.button}>Next Page</button>
            </div>
        </div>
    )
}