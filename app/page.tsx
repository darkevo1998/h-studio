import Image from 'next/image';
import logo from '../public/logo.png';

export default function Home() {
  return (
    <div className='bg-gray-50'>
      <div className='flex items-center justify-between p-6'>
        <div className='flex space-x-4 w-full'>
          <div className='flex space-x-2 bg-white rounded-full'>
            <div className='bg-black text-white rounded-full w-24 px-4 py-2 text-center'>
              clients
            </div>
            <div className='rounded-full bg-white  w-24 px-4 py-2 text-center'>
              about us
            </div>
            <div className='rounded-full bg-white  w-24 px-4 py-2 text-center'>
              contacts
            </div>
          </div>
        </div>
        <div className='flex items-center w-full'>
          <Image src={logo} alt='Company Logo' width={120} height={60} />
        </div>
      </div>
    </div>
  );
}
