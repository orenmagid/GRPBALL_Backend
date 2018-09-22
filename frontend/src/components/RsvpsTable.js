import React, { Component } from "react";
import { Table, List, Segment, Popup } from "semantic-ui-react";

export default class RsvpsTable extends Component {
  userRsvpd = user => {
    return this.props.rsvps.find(rsvp => rsvp.user_id === user.id);
  };

  render() {
    const { statusToDisplay, rsvps, users } = this.props;

    let noRsvpUsers = users.filter(user => {
      return !this.userRsvpd(user);
    });

    if (
      statusToDisplay === "accepted" ||
      statusToDisplay === "declined" ||
      statusToDisplay === "delayed"
    ) {
      return (
        <Table compact fixed striped size="small">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Other Response</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {rsvps.map(rsvp => {
              let user = users.find(user => user.id === rsvp.user_id);
              return (
                <Table.Row key={rsvp.id}>
                  <Table.Cell>
                    {user ? user.first_name + " " + user.last_name : null}
                  </Table.Cell>
                  <Table.Cell>
                    {rsvp.status === "Accepted" ? "Attending" : null}
                    {rsvp.status === "Declined" ? "Not Attending" : null}
                    {rsvp.status === "Delayed" ? "Not Sure" : null}
                  </Table.Cell>

                  <Table.Cell>{rsvp.other_text} </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      );
    }
    if (statusToDisplay === "none") {
      return (
        <Segment>
          <List horizontal>
            {users
              .filter(user => {
                return !rsvps.find(rsvp => rsvp.user_id === user.id);
              })
              .map(user => {
                return (
                  <List.Item key={user.id}>
                    <List.Content>
                      {user.first_name + " " + user.last_name}
                    </List.Content>
                  </List.Item>
                );
              })}
          </List>
        </Segment>
      );
    }
    return null;
  }
}
