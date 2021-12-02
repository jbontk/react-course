import Card from '../ui/Card';
import Control from '../ui/Control';
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = () => (
  <Card>
    <form className={classes.form}>
      <Control id='title' label='Meetup Title' type='text' />
      <Control id='image' label='Image' type='url' />
      <Control id='address' label='Address' type='text' />
      <Control id='description' label='Description' type='textarea' />
      <div className={classes.actions}>
        <button>Add Meetup</button>
      </div>
    </form>
  </Card>
);

export default NewMeetupForm;
