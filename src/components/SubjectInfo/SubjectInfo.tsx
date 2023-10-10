import { useState } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';
import { Title } from '../Title';
import classNames from 'classnames';
// import styles from './PlantInfo.module.scss';

const SubjectInfo = () => {
  const [date, setDate] = useState<string | Date | Date[]>(new Date());

  return (
    <Card className='m-5'>
      <Calendar value={date} onChange={(e) => e.value && setDate(e.value)} inline showWeek />
    </Card>
  );
};

export default SubjectInfo;
