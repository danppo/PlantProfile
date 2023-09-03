import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';

const PlantPage = () => {
  return (
    <>
    <div className="grid grid-nogutter surface-0 text-800">
    <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
            <span className="block text-6xl font-bold mb-1">Create the screens</span>
            <div className="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
            <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <Button label="Learn More" type="button" className="mr-3 p-button-raised" />
            <Button label="Live Demo" type="button" className="p-button-outlined" />
        </section>
    </div>
    <div className="col-12 md:col-6 overflow-hidden">
        <img src="/monstera.jpg" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
    </div>
</div>
    <div className='surface-0'>
      <div className='font-medium text-3xl text-900 mb-3'>Movie Information</div>
      <div className='text-500 mb-5'>
        Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.
      </div>
      <ul className='list-none p-0 m-0'>
        <li className='flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap'>
          <div className='text-500 w-6 md:w-2 font-medium'>Title</div>
          <div className='text-900 w-full md:w-8 md:flex-order-0 flex-order-1'>Heat</div>
          <div className='w-6 md:w-2 flex justify-content-end'>
            <Button label='Edit' icon='pi pi-pencil' className='p-button-text' />
          </div>
        </li>
        <li className='flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap'>
          <div className='text-500 w-6 md:w-2 font-medium'>Genre</div>
          <div className='text-900 w-full md:w-8 md:flex-order-0 flex-order-1'>
            <Chip label='Crime' className='mr-2' />
            <Chip label='Drama' className='mr-2' />
            <Chip label='Thriller' />
          </div>
          <div className='w-6 md:w-2 flex justify-content-end'>
            <Button label='Edit' icon='pi pi-pencil' className='p-button-text' />
          </div>
        </li>
        <li className='flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap'>
          <div className='text-500 w-6 md:w-2 font-medium'>Director</div>
          <div className='text-900 w-full md:w-8 md:flex-order-0 flex-order-1'>Michael Mann</div>
          <div className='w-6 md:w-2 flex justify-content-end'>
            <Button label='Edit' icon='pi pi-pencil' className='p-button-text' />
          </div>
        </li>
        <li className='flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap'>
          <div className='text-500 w-6 md:w-2 font-medium'>Actors</div>
          <div className='text-900 w-full md:w-8 md:flex-order-0 flex-order-1'>
            Robert De Niro, Al Pacino
          </div>
          <div className='w-6 md:w-2 flex justify-content-end'>
            <Button label='Edit' icon='pi pi-pencil' className='p-button-text' />
          </div>
        </li>
        <li className='flex align-items-center py-3 px-2 border-top-1 border-bottom-1 border-300 flex-wrap'>
          <div className='text-500 w-6 md:w-2 font-medium'>Plot</div>
          <div className='text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3'>
            A group of professional bank robbers start to feel the heat from police when they
            unknowingly leave a clue at their latest heist.
          </div>
          <div className='w-6 md:w-2 flex justify-content-end'>
            <Button label='Edit' icon='pi pi-pencil' className='p-button-text' />
          </div>
        </li>
      </ul>
    </div>
    </>
  );
};

export default PlantPage;
