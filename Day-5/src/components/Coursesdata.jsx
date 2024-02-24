import Courses from '../components/Courses';

function Coursesdata() {
  // Sample course data
  const courses = [
    {
      image: '../../src/assets/images/cs.jpg',
      name: 'Computer Science',
      fee: 1000,
      seats: 50,
      duration: '4 years',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        image: '../../src/assets/images/ee.jpg',
      name: 'Electrical Engineering',
      fee: 1200,
      seats: 40,
      duration: '4 years',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // {
    //     image: '../../src/assets/images/ba.jpg',
    //   name: 'Business Administration',
    //   fee: 800,
    //   seats: 60,
    //   duration: '4 years',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    // },
  ];

  return (
    <div className="App">
      {/* <h1>Courses</h1> */}
      <Courses courses={courses} />
    </div>
  );
}

export default Coursesdata;
