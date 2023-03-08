import React from "react";
import styles from "./WeatherApiComponent.module.css"
// import humidityInnerImg from 
// import humidityOuterImg from
// // import windImg from "../../../public/Images/wind.png"
// import pressureImg from 

export default
    function WeatherApiComponent() {
    const API_ENDPOINT = 'http://api.weatherapi.com/v1/current.json?key=a31d9e2dc6a7438098114901230803&q=India&aqi=yes';

    // Doubt: If api gives error why component does not render?? ...follow up
    const [weather, setWeather] = React.useState({});
    const [dataFetched, setDataFetched] = React.useState(false);

    const [icon, setIcon] = React.useState('');
    const [text, setText] = React.useState('');
    const [temperature, setTemperature] = React.useState('');
    const [pressure, setPressure] = React.useState('');
    const [wind, setWind] = React.useState('');
    const [humidity, setHumidity] = React.useState('');

    const getData = async () => {
        try {
            const response = await fetch(API_ENDPOINT);

            setWeather(await response.json());
            await setDataFetched(true);
        }
        catch (error) {
            console.log('Error : ', error);
        }

    }

    React.useEffect(() => {
        getData();
    }, [])

    React.useEffect(() => {
        console.log('checking');
        if (dataFetched) {
            console.log('Data received', weather);
            setIcon(weather.current.condition.icon);
            setText(weather.current.condition.text);
            setTemperature(weather.current.temp_c);
            setPressure(weather.current.pressure_mb);
            setWind(weather.current.wind_kph);
            setHumidity(weather.current.humidity);
        }
    }, [weather])

    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    const minutes = date.getMinutes();
    let hours = date.getHours();
    var amOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12; 
    hours = hours ? hours : 12; 

    return (
        <div className={styles.main}>

            <div className={styles.top}>
                <div className={styles.date}>
                    <pre>{day < 10 && 0}{day}-{month < 10 && 0}{month}-{year}</pre>
                </div>
                <div className={styles.time}>
                    <pre>{hours < 10 && 0}{hours}:{minutes < 10 && 0}{minutes} {amOrPm}</pre>
                </div>
            </div>


            <div className={styles.bottom}>
                <div className={styles.box1}>
                    <div className={styles.box1Top}>
                        <img src={icon} className={styles.icon1}></img>
                    </div>
                    <div className={styles.box1Bottom}>
                        <div className={styles.text1}>{text}</div>
                    </div>


                </div>
                <div className={styles.vr}></div>
                <div className={styles.box2}>
                    <div className={styles.box2Top}>
                        <div className={styles.text2}>{temperature}°C</div>
                    </div>
                    <div className={styles.box2Bottom}>
                        <div className={styles.icon}>
                            <img src={"../../Images/pressure.png"}></img>
                        </div>
                        <div className={styles.text3}>
                            {pressure} mbar Pressure
                        </div>



                    </div>


                </div>
                <div className={styles.vr}></div>
                <div className={styles.box3}>
                    <div className={styles.box3Top}>
                        <div className={styles.icon}>
                            <img src={"../../Images/wind.png"}></img>
                        </div>
                        <div className={styles.text3}>
                            {wind} km/h Wind
                        </div>


                    </div>
                    <div className={styles.box3Bottom}>
                        <div className={styles.icon}>
                            <img src={"../../Images/humidityOuter.png"} ></img>
                            {/* <img src={"../../Images/humidityInner.png"} ></img> */}
                        </div>
                        <div className={styles.text3}>
                            {humidity}% Humidity</div>
                    </div>



                </div>



            </div>
        </div>
    )
}