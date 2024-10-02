import * as React from 'react';
import { CoursesList } from './CoursesList/coursesList';

const CoursesPage: React.FC = () => {
  return (
    <div>
      <h2>Kurzy</h2>
      <p>
        Nabízím kurzy japonštiny přizpůsobené na míru studentům. Ať už se
        chystáte na cestu po Japonsku, či chcete rozumět oblíbenému anime, ať
        jste začátečníci, či pokročilí, ať preferujete hodiny osobně, nebo
        online.
      </p>

      <p>
        Lekce obsahují konverzaci, psaní hiragany, katakany i kandži, čtení
        textu a gramatická cvičení, ale také hry, videa a spoustu informací o
        japonských reálií. Protože máme všichni rozdílné motivace, proč
        japonštinu studujeme, vždy se snažím kurzy co nejlépe uzpůsobit na míru
        studentům.
      </p>

      <p>Kurzy pro začátečníky zahrnují….</p>

      <p>Kurzy pro středně pokročilé zahrnují</p>

      <p>Kurzy pro pokročilé zahrnují…</p>

      <p>Asynchronní kurzy zahrnují…</p>

      <h3>Na zimní semestr jsou otevřeny tyto kurzy:</h3>

      <CoursesList />
    </div>
  );
};

export default CoursesPage;
