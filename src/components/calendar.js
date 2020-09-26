import React, { useContext, useState, useEffect } from "react";
import CalendarHeatmap from 'react-calendar-heatmap';
import "../styles/calendar.css";
import { FirebaseContext } from "../utils/firebase";
import { useHistory } from "react-router-dom";
import { Graphs } from "./graphs";

export const Calendar = () => {
  const firebase = useContext(FirebaseContext);
  const [days, setDays] = useState([]);
  const [minDay, setMinDay] = useState("2020-01-01");
  const [maxDay, setMaxDay] = useState("2020-01-01");
  const history = useHistory();

  useEffect(() => {
    firebase.user
      .then(user => {
        return firebase.firestore.collection("entries").where("user", "==", user.email).get();
      })
      .then(querySnapshot => {
        let resultDays = [];
        let minDay = "9";
        let maxDay = "0";

        querySnapshot.forEach(doc => {
          let dateString = new Date(doc.data().time.seconds * 1000).toISOString().substr(0, 10);

          resultDays.push({
            data: doc.data(),
            count: doc.data().attention + doc.data().communication + doc.data().difficultBehaviour + doc.data().overallMood + doc.data().sleepQuality + doc.data().socialInteraction,
            date: dateString,
          })

          minDay = dateString.localeCompare(minDay) === -1 ? dateString : minDay;
          maxDay = dateString.localeCompare(maxDay) === 1 ? dateString : maxDay;
        });

        setDays(resultDays);
        setMinDay(minDay);
        setMaxDay(maxDay);
      })
  }, [firebase.firestore, firebase.user]);

  return (
    <>
      <div className="ml-3 mr-0 mt-3 mb-3">
        <CalendarHeatmap
          startDate={minDay}
          endDate={maxDay}
          classForValue={value => {
            if (!value) {
              return 'color-empty';
            }

            if (value.count >= 6 && value.count <= 16) {
              return 'color-scale-red';
            } else if (value.count >= 17 && value.count <= 18) {
              return 'color-scale-amber';
            } else if (value.count >= 19 && value.count <= 32) {
              return 'color-scale-green';
            }
          }}
          values={days}
          horizontal={false}
          onClick={value => history.push(`/entry#${value.date}`)}
        />
      </div>
      <Graphs data={days} />
    </>
  );
};
