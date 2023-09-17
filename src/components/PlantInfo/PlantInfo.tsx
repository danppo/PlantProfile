import { useState } from 'react';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Title } from '../Title';
import classNames from 'classnames';
// import styles from './PlantInfo.module.scss';

const PlantInfo = () => {
  const [date, setDate] = useState<string | Date | Date[]>(new Date());

  return (
    <>
      <Calendar value={date} onChange={(e) => e.value && setDate(e.value)} inline showWeek />
      <Title>Swiss Cheese Plant</Title>
      {/* <span className='block text-6xl font-bold mb-1'>Swiss Cheese Plant</span> */}
      <Title subTitle>Monstera Deliciosa</Title>
      {/* <div className='text-6xl text-primary font-bold mb-3'>Monstera Deliciosa</div> */}
      {/* <p className='mt-0 mb-4 text-700 line-height-3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p> */}
    </>
  );
};

export default PlantInfo;
