import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg",
    address: "10, a street address, some city",
    description: "The first meetup description",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz0gAKs9OKkPZr3w2pJlhMvbVbw0MZ1QK3RMwRWGOOnoRK2pxLzA0y_4jWaui4MsbIKXE&usqp=CAU",
    address: "5, a close address, the town",
    description: "The Second meetup description",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://www.meetup.com/blog/wp-content/uploads/2022/01/pexels-matheus-bertelli-3856033-945x630.jpg",
    address: "1, the avenue street, up city",
    description: "The Third meetup description",
  },
];
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse and attend react meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
export async function getStaticProps() {
  // fetch data from api
  const client = await MongoClient.connect(
    "mongodb+srv://rb_isiaq:Mu8PoXVfta6kddaF@cluster0.wm9kaax.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default HomePage;
