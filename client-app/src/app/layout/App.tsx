import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { IActivity } from '../models/activity';
import axios from 'axios';
import { NavBar } from '../../feature/nav/NavBar';
import { ActivityDashboard } from '../../feature/activities/dashboard/ActivityDashboard';

export const Reactivities = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);
  const [editMode, setEditMode] = useState(false);

  const handleSelectAcitivty = (id: string) => {
    setSelectedActivity(activities.filter(a => a.id === id)[0])
  };

  const handleOpenCreateForm = () => {
    setSelectedActivity(null);
    setEditMode(true);
  };

  useEffect(() => {
    axios
      .get<IActivity[]>('http://localhost:5000/api/activities')
      .then((res) => {
        setActivities(res.data);
      });
  }, []);

  return (
    <>
      <NavBar openCreateForm={handleOpenCreateForm} />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard activities={activities}
          selectActivity={handleSelectAcitivty}
          selectedActivity={selectedActivity}
          editMode={editMode}
          setEditMode={setEditMode}
          setSelectedActivity={setSelectedActivity}
        />
      </Container>
    </>
  );
};
