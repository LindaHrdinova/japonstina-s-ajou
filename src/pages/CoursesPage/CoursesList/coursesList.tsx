import './styleCourses.css';

const rewiewsList: CoursesListType[] = [
  {
    courseName: 'Skupinový kurz pro úplné začátečníky',
    price: 3500,
    lessons: 10,
  },
  {
    courseName: 'Skupinový kurz pro středně pokročilé',
    price: 3500,
    lessons: 10,
  },
  {
    courseName: 'Skupinový kurz pro pokročilé',
    price: 3500,
    lessons: 10,
  },
  {
    courseName: 'Individuální kurz pro úplné začátečníky',
    price: 6300,
    lessons: 10,
  },
  {
    courseName: 'Individuální kurz pro středně pokročilé',
    price: 6300,
    lessons: 10,
  },
  {
    courseName: 'Individuální kurz pro pokročilé',
    price: 6300,
    lessons: 10,
  },
  {
    courseName: 'První poznávací lekce',
    price: 300,
    lessons: 1,
  },
  {
    courseName: 'Měsíční asynchronní kurzy',
    price: 1500,
    lessons: 4,
  },
];

type CoursesListType = {
  courseName: string;
  price: number;
  lessons: number;
};

export const CoursesList: React.FC = () => {
  return (
    <div className="coursesList textBox">
      {rewiewsList.map((courses) => {
        console.log(courses.price);
        return (
          <div className="courses" key={courses.courseName}>
            <span className="coursesLeft">{courses.courseName}</span>
            <span className="coursesRight">
              <span>{courses.price} Kč /&nbsp;</span>
              <span>
                {courses.lessons}&nbsp;
                {courses.lessons <= 4 ? 'lekce' : 'lekcí'}
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};
