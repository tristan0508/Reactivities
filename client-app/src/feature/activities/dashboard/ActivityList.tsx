import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
}

export const ActivityList: React.FC<IProps> = ({
  activities,
  selectActivity,
  deleteActivity
}) => {
  return (
    <Segment clearing>
      <Item.Group divided>
        {activities.map((act) => {
          return (
            <Item>
              <Item.Content>
                <Item.Header as='a'>{act.title}</Item.Header>
                <Item.Meta>{act.date}</Item.Meta>
                <Item.Description>
                  <div>{act.description}</div>
                  <div>
                    {act.city}, {act.venue}
                  </div>
                </Item.Description>
                <Item.Extra>
                  <Button onClick={() => selectActivity(act.id)}
                    floated='right'
                    content='View'
                    color='blue' />
                  <Button onClick={() => deleteActivity(act.id)}
                    floated='right'
                    content='Delete'
                    color='red'
                  />
                  <Label basic content='Category' />
                </Item.Extra>
              </Item.Content>
            </Item>
          );
        })}
      </Item.Group>
    </Segment>
  );
};
