import Colleges from '../components/Colleges';

function Collegesdata() {
  // Sample course data
  const courses = [
    {
      image: '../../src/assets/images/c1.jpg',
      name: 'College 1',
      fee: 1000,
      seats: 50,
      duration: '4 years',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        image: '../../src/assets/images/c1.jpg',
      name: 'College 2',
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
      <Colleges courses={courses} />
    </div>
  );
}

export default Collegesdata;
