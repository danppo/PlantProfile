import { Button } from 'primereact/button';
import { Title } from '../Title';
import SubjectInfo from '../SubjectInfo';
import classNames from 'classnames';
import styles from './SubjectPage.module.scss';

const SubjectPage = () => {
  return (
    <>
      <div className={classNames('grid grid-nogutter surface-0 text-800', styles.HeroBanner)}>
        <div className='col-12 lg:col-6 lg:text-left flex'>
          <div className='col-12  flex flex-column align-items-center justify-content-center'>
            <Title>Swiss Cheese Plant</Title>

            <Title subTitle>Monstera Deliciosa</Title>

            <Button label='Learn More' type='button' className='mr-3 p-button-raised' />
          </div>
        </div>
        <div
          className={classNames(
            'col-12 lg:col-6 overflow-hidden z-0 absolute lg:relative',
            styles.HeroImage
          )}
        >
          <img src='/monstera.jpg' alt='hero-1' />
        </div>
      </div>

      <SubjectInfo />
    </>
  );
};

export default SubjectPage;
