import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='relative border-t-2 bottom-0 left-0 right-0 pt-10 pr-44 bg-white -mb-4'>
      <div className='max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between items-start w-full bg-white'>
        <div className='flex flex-col justify-start items-start md:w-2/3 mb-8 md:mb-0'>
          <h2 className='text-lg font-semibold mb-2'>Get to know more about us</h2>
          <p className='text-sm mb-4'>Reach out to us to know more about our services.</p>
          <img src='/logo.png' alt='Flib' className='h-12 mb-2 mt-8' />
          <p className='text-sm text-gray-600 mb-1'>hassle free swags</p>
          <p className='text-sm text-gray-600'>&copy; 2024 Unicus olympiads. All rights reserved</p>
        </div>

        <div className='flex flex-col items-center md:w-1/3 ml-24'>
          <form className='flex items-center space-x-2 mb-4 ml-auto'>
            <input type='email' placeholder='Email' className='w-96 h-14 border rounded-md border-gray-400 p-2' />
            <button type='submit' className='w-28 h-14 px-6 py-3 border border-green-500 text-green-600 rounded-md'>Submit</button>
          </form>
          <div className='flex justify-between w-full mt-12 mb-12'>
            <div className='flex flex-col space-y-2 ml-24'> 
              <Link href='#' className='text-gray-700'>About</Link>
              <Link href='#' className='text-gray-700'>Syllabus</Link>
              <Link href='#' className='text-gray-700'>Exam Dates</Link>
              <Link href='#' className='text-gray-700'>Blog</Link>
              <Link href='#' className='text-gray-700'>Privacy & Policy</Link>
            </div>
            <div className='flex flex-col items-end space-y-2'>
              <Link href='#' className='text-gray-700'>Get Help</Link>
              <Link href='#' className='text-gray-700'>FAQ</Link>
            </div>
            {/* <div className='flex flex-col space-y-5 '>
              
              <Link href='#' className='hover:text-gray-600'>
                <img src='/icons/email.svg' alt='Email' className='w-6 h-6' />
              </Link>
              <Link href='#' className='hover:text-gray-600'>
                <img src='/icons/linkedin.svg' alt='LinkedIn' className='w-6 h-6' />
              </Link>
              <Link href='#' className='hover:text-gray-600'>
                <img src='/icons/insta.svg' alt='Instagram' className='w-6 h-6' />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
