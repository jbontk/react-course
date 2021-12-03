import MeetupList from '../components/meetups/MeetupList';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { dbMeetupsUrl } from '../shared/constants';

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(dbMeetupsUrl)
      .then(({ data }) => {
        setLoadedMeetups(Object.keys(data).map(id => ({id, ...data[id]})));
      })
      .finally(() => setIsLoading(false));
  }, []);

  return isLoading ? (
    <section>Loading...</section>
  ) : (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetupsPage;
