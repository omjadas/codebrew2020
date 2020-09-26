import React, { useContext, useState, useEffect } from "react";
import CalendarHeatmap from 'react-calendar-heatmap';
import "../styles/calendar.css";
import { FirebaseContext } from "../utils/firebase";
import {Graphs} from "./graphs";

export const Calendar = (props) => {
    const firebase = useContext(FirebaseContext);
    const [days, setDays] = useState([]);
    const [minDay, setMinDay] = useState("2020-01-01");
    const [maxDay, setMaxDay] = useState("2020-01-01");

    useEffect( () => {
        firebase.user.then(user => {
            firebase.firestore.collection("entries").where("user", "==", user.email)
            .get()
            .then(querySnapshot => {
                let resultDays = [];
                let minDay = "9"
                let maxDay = "0"
    
                querySnapshot.forEach(doc => {
                    let dateString = new Date(doc.data().time.seconds * 1000).toISOString().substr(0,10);
    
                    resultDays.push({
                        data: doc.data(),
                        count: doc.data().attention + doc.data().communication + doc.data().difficultBehaviour + doc.data().overallMood + doc.data().sleepQuality + doc.data().socialInteraction,
                        date: dateString
                    })
    
                    minDay = dateString.localeCompare(minDay) == -1 ? dateString : minDay;
                    maxDay = dateString.localeCompare(maxDay) == 1 ? dateString : maxDay;
                })
    
                setDays(resultDays)
                setMinDay(minDay)
                setMaxDay(maxDay)
            })
        })
    }, [] )


    return (
    <>
    <div className="calendar-wrapper">
        <CalendarHeatmap
            startDate={minDay}
            endDate={maxDay}
            classForValue={value => {
                if (!value) {
                  return 'color-empty';
                }
                return `color-scale-${value.count}`;

                if (value >= 6 && value <= 14) {
                    return 'colour-scale-red';
                } else if (value >= 15 && value <= 23) {}
              }}
            values={days}
            horizontal={false}
        />
    </div>
    <Graphs data={days} />
    </>
    );
};

