/* eslint-disable @next/next/no-img-element */

import classes from './event-item.module.css';
import { Button } from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

export function EventItem(items) {
  const {title, image, date, location, id} = items;
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    dateStyle: 'long',
  });
  const formattedAddress = location.replace(',', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>
              Explore Event
            </span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
