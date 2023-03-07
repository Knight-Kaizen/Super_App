import React from "react"
import CategoryChip from "../../components/CategoryChip/CategoryChip"
import ButtonComponents from "../../components/ButtonComponents/BtnComponents"
import styles from "./Onboarding.module.css"

import OnboardingStates from "./OnboardingStates"


export default 
function OnboardingPage(){
    
    const [selected, setSelected] = React.useState(OnboardingStates);
    const [categorySelected, setCategorySelected] = React.useState(false);

    const Cards = selected.map((card)=>{
        return (<CategoryChip 
            key = {card.id}
            id = {card.id} 
            title = {card.title}
            img = {card.img}
            color = {card.color}
            on = {card.on}
            customClick = {handleClick}
        />)
    })
   
    const Buttons = selected.filter((card)=>{
        if(card.on == true){
            return card;
        }
    })

    const displayButtons = Buttons.map((card)=>{
        return(
            <ButtonComponents 
                key={card.id}
                id = {card.id}
                title = {card.title}
                customClick = {handleClick}
            />
        )
    })

    React.useEffect(()=>{
        if(displayButtons.length > 0){
            console.log("success");
            setCategorySelected(false);
        }
        else{
            console.log("Select atleast 1");
            setCategorySelected(true);
        }
    }, [displayButtons])

    function handleClick(id){
        console.log("clicked" , id);
        
        setSelected((prevSelected)=>{
            return (
                prevSelected.map((card)=>{
                    return card.id === id ? {...card, on : !card.on} : card
                })
            )
        })
        
    }

    return(
        <div className={styles.main}>
            <div className={styles.top}>
                <div className={styles.left}>
                    <div className={styles.leftTop}>
                        <h1><span className={styles.text1}>Super App</span></h1>
                        <h2 className={styles.text2}>Choose your entertainment category</h2>
                        {categorySelected && <p className={styles.text3}>Select atleast one category</p>}
                    </div>
                    <div className = {styles.leftBottom}>
                        {/* Component buttons here*/}
                       
                        {displayButtons}
                        
                    </div>
                </div>
                <div className={styles.right}>
                        {/* Components chips here */}
                       {Cards}
                </div>
            </div>
            <div className={styles.bottom}>
                    <button className={styles.BtnNextPage}
                        onClick = {()=>{
                            if(displayButtons.length > 0){

                                console.log("success");
                                setCategorySelected(false);
                            }
                            else{
                                console.log("Select atleast 1");
                                setCategorySelected(true);
                            }
                        }}
                    >Next Page</button>
            </div>
        </div>
    )
}