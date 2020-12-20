import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import { IActivity } from "../models/activity";
import axios from "axios";
import { NavBar } from "../../feature/nav/NavBar";
import { ActivityDashboard } from "../../feature/activities/dashboard/ActivityDashboard";

export const Reactivities = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then((res) => {
        setActivities(res.data);
      });
  }, []);

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard activities={activities} />
      </Container>
    </>
  );
};
