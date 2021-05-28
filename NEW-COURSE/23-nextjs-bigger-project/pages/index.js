import React from 'react';
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'first meetup',
        image: 'https://lp-cms-production.imgix.net/2019-06/65830387.jpg',
        address: 'Sydney',
        description: "This is the first meetup"
    },
    {
        id: 'm2',
        title: 'A second meetup',
        image: 'https://i.pinimg.com/originals/b2/8e/8b/b28e8b6ce64a1c0a34b8c914b8243e83.jpg',
        address: 'Gold Coast',
        description: "This is the second meetup"
    }
]

const HomePage = (props) => {

    return (
        <MeetupList meetups={props.meetups}/>
    );

}

export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;
    console.log(req, res);

    // fetch data from an api
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}

// export async function getStaticProps() {
//     // fetch data from an api
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//         revalidate: 10
//     }
// }

export default HomePage;
