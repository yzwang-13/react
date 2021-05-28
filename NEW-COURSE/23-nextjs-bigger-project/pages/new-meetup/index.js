import React from 'react';
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {

    const meetUpAddHandler = (meetupData) => {
        console.log(meetupData);
    }
    return <NewMeetupForm onAddMeetup={meetUpAddHandler}/>
}

export default NewMeetupPage;
