import { EventItem } from "./event-item";
import classes from './event-list.module.css';

export function EventList(props) {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map(event => <EventItem
        id={event.id}
        title={event.title}
        image={event.image}
        location={event.location}
        key={event.id}/>)}
    </ul>
  );
}
