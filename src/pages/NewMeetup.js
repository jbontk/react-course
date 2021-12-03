import NewMeetupForm from '../components/meetups/NewMeetupForm';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { dbUrl } from '../shared/constants';

const NewMeetupPage = () => {
  const history = useHistory();

  const addMeetupHandler = (meeetupData) => {
    axios
      .post(`${dbUrl}/meetups.json`, meeetupData)
      .then(() => history.replace('/'));
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
