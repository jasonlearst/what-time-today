import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { getAvailabilities } from "../../redux/selectors";
import {
  onSelectEvent,
  onSelectAvailableSlot,
  eventStyleGetter,
} from "./MyCalendarHelpers.js";
import "./MyCalendar.scss";
import "./MyCalendar.css";

const localizer = momentLocalizer(moment);

export default function MyCalendar() {
  const dispatch = useDispatch();
  const { availabilities } = useSelector(getAvailabilities);

  const minTime = new Date();
  minTime.setHours(8, 0, 0);
  const maxTime = new Date();
  maxTime.setHours(23, 59, 59);

  var width = window.innerWidth;
  const availableCalendarViews =
    width > 600 ? ["work_week", "week", "day"] : ["day"];
  const defaultCalendarView = width > 600 ? "work_week" : "day";

  var height = 500;

  return (
    <div className="MyCalendar">
      <Calendar
        className="big-calendar"
        localizer={localizer}
        events={availabilities}
        selectable={true}
        onSelectSlot={(info) => onSelectAvailableSlot(dispatch, info)}
        startAccessor="start"
        endAccessor="end"
        style={{ height: height, flexGrow: 1, cursor: "pointer" }}
        defaultView={defaultCalendarView}
        views={availableCalendarViews}
        onSelectEvent={(event, e) => onSelectEvent(event, dispatch)}
        eventPropGetter={eventStyleGetter}
        scrollToTime={minTime}
        // min={minTime}
        // max={maxTime}
      />
    </div>
  );
}
