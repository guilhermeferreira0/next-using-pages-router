import { EventList } from "@/components/events/event-list";
import ResultsTitle from "@/components/results-title/results-title";
import { Button } from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert/error-alert";
import { getFilteredEvents } from "@/dummy-data";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) return <p className="center">Loading...</p>;
  const year = Number(filterData[0]);
  const month = Number(filterData[1]);
  const invalidData = filterData[2];

  if (
      invalidData ||
      isNaN(year) ||
      isNaN(month) ||
      year > 2030 ||
      year < 2021 ||
      month < 1 ||
      month > 12
    ) return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid Filter. Please adjust your value</p>
        </ErrorAlert>
        <div className="center">
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );

  const filteredEvents = getFilteredEvents({
    year: year,
    month: month
  });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const newMonth = month - 1;

  return (
    <Fragment>
      <ResultsTitle year={String(year)} month={String(newMonth)} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}
