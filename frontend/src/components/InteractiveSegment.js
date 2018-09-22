import React from "react";
import { Segment } from "semantic-ui-react";
import EditRsvpForm from "./EditRsvpForm";
import NewRsvpForm from "./NewRsvpForm";

const InteractiveSegment = ({
  group,
  session,
  rsvp,
  formToShow,
  handleCloseClick,
  handleEditRsvp,
  handleNewRsvp
}) => (
  <Segment>
    {formToShow === "editRsvp" ? (
      <EditRsvpForm
        rsvp={rsvp}
        handleCloseClick={handleCloseClick}
        formToShow={formToShow}
        session={session}
        handleRsvp={handleEditRsvp}
      />
    ) : null}

    {formToShow === "newRsvp" ? (
      <NewRsvpForm
        handleCloseClick={handleCloseClick}
        formToShow={formToShow}
        session={session}
        handleRsvp={handleNewRsvp}
      />
    ) : null}
  </Segment>
);

export default InteractiveSegment;
