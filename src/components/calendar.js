import React, { useContext, useState, useEffect } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "../styles/calendar.css";
import { FirebaseContext } from "../utils/firebase";
import { useHistory, Link } from "react-router-dom";
import { Graphs } from "./graphs";
import { Button } from "react-bootstrap";

export const Calendar = () => {
  const firebase = useContext(FirebaseContext);
  const [loaded, setLoaded] = useState(false);
  const [todaysHistoryIncluded, setTodaysHistoryIncluded] = useState(false);
  const [days, setDays] = useState([]);
  const [minDay, setMinDay] = useState("2020-01-01");
  const [maxDay, setMaxDay] = useState("2020-01-01");
  const [name, setName] = useState("");
  const history = useHistory();

  useEffect(() => {
    let localStorageResult = localStorage.getItem("userEmail");

    firebase.user
      .then(user => {
        let email  = localStorageResult === null ? user.email : localStorageResult;

        return firebase.firestore.collection("users").where("email", "==", email).get();
      })
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          setName(doc.data().name)
        });
      })

    firebase.user
      .then(user => {
        let email  = localStorageResult === null ? user.email : localStorageResult;

        return firebase.firestore.collection("entries").where("user", "==", email).get();
      })
      .then(querySnapshot => {
        let resultDays = [];
        let minDay = "9";
        let maxDay = "0";

        querySnapshot.forEach(doc => {
          const dateString = doc.data().time;

          if (dateString === "") return;

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
        setLoaded(true);
        setTodaysHistoryIncluded(resultDays.filter(d => d.date === new Date().toISOString().substr(0,10) ).length > 0)
      })
  }, [firebase.firestore, firebase.user]);

  return (
    <>
      <h3 className="headings mt-3">History for {name}</h3>

      <div className="ml-3 mr-0 mt-3 mb-3">
        <CalendarHeatmap
          startDate={minDay}
          endDate={maxDay}
          classForValue={value => {
            if (!value) {
              return "color-empty";
            }

            if (value.count >= 6 && value.count <= 16) {
              return "color-scale-red";
            } else if (value.count >= 17 && value.count <= 18) {
              return "color-scale-amber";
            } else if (value.count >= 19 && value.count <= 32) {
              return "color-scale-green";
            }
          }}
          values={days}
          horizontal={false}
          onClick={value => {
            history.push(`/entry#${value.date}`);
          }}
        />
      </div>

      {loaded && !todaysHistoryIncluded && <Link to="/entry">
        <div className="text-center">
          <Button className="ml-auto mb-2 mr-2">
            Record Today's History
          </Button>
        </div>
      </Link>}

      <Graphs data={days} />
    </>
  );
};
