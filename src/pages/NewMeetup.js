import NewMeetupForm from '../components/meetups/NewMeetupForm';
import axios from 'axios';

const dbUrl =
  'https://react-getting-started-8e716-default-rtdb.europe-west1.firebasedatabase.app/';

const NewMeetupPage = () => {
  const addMeetupHandler = (meeetupData) => {
    axios.post(`${dbUrl}/meetups.json`, meeetupData);
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
