import React from 'react';
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
    console.log('aaa')
    return (
        <MeetupDetail {...props.meetup}/>
    )
}

export async function getStaticPaths() {
    // fallback set to false when paths define all preloaded pages
    return {
        fallback: true,
        paths: [
            {
                params: {meetupId: 'm1'}
            },
            {
                params: {meetupId: 'm2'}
            }
        ]
    }
}

export async function getStaticProps(context) {
    console.log(context.params);
    // fetch data for a single meetup
    return {
        props: {
            meetup: {
                image: 'https://lp-cms-production.imgix.net/2019-06/65830387.jpg',
                title: 'First Meetup',
                description: 'This is the first meetup',
                address: 'Sydney'
            }
        },
        revalidate: 10
    }
}

export default MeetupDetails;
