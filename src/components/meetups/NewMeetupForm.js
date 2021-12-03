import { useRef } from 'react';

import Card from '../ui/Card';
import Control from '../ui/Control';
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <Control
          id='title'
          label='Meetup Title'
          type='text'
          ref={titleInputRef}
        />
        <Control id='image' label='Image' type='url' ref={imageInputRef} />
        <Control
          id='address'
          label='Address'
          type='text'
          ref={addressInputRef}
        />
        <Control
          id='description'
          label='Description'
          type='textarea'
          ref={descriptionInputRef}
        />
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
