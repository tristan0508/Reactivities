import React, { useState, useEffect } from 'react';
import { List } from 'semantic-ui-react'
import { IActivity } from '../models/activity';
import axios from 'axios';
import { NavBar } from '../../feature/nav/NavBar';

export const Reactivities = () => {
  const [activities, setActivities] = useState<IActivity[]>([])

  useEffect(() => {
    axios.get<IActivity[]>('http://localhost:5000/api/activities').then(res => {
      setActivities(res.data);
    })
  }, []);
 
  return (
  <div>
      <NavBar />
      <List>
        {activities.map(activity => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
  </div>
  )
};




