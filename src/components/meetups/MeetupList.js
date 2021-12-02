import classes from './MeetupList.module.css';
import MeetupItem from './MeetupItem';

const MeetupList = (props) => (
  <ul className={classes.list}>
    {props.meetups.map((meetup) => (
      <MeetupItem
        key={meetup.id}
        id={meetup.id}
        image={meetup.image}
        title={meetup.title}
        description={meetup.description}
        address={meetup.address}
      />
    ))}
  </ul>
);

export default MeetupList;
