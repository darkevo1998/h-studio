import Image from 'next/image';
import logo from '../public/logo.png';
import p1 from '../public/p1.png';
import p2 from '../public/p2.png';
import p3 from '../public/p3.png';
import p4 from '../public/p4.png';
import p5 from '../public/p5.png';
import twitter from '../public/twitter.png';
import instagram from '../public/instagram.png';

export default function Home() {
  const images = [p1, p2, p3, p4, p5];
  const tags = [
    'Java/Kotlin',
    'Go',
    'Rust',
    'Docker',
    'Kubernetes',
    'ClickHouse',
  ];
  const tags2 = ['React', 'Next.js', 'vue', 'typeScript'];
  const tags3 = ['Jenkins', 'Kubernetes', 'Docker', 'Github Actions'];
  const tags4 = ['Kotlin', 'Blockchain', 'TON', 'Web3'];
  return (
    <div className='bg-gray-100'>
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
        <div className='flex items-center w-full justify-between z-50'>
          <Image
            src={logo}
            alt='Company Logo'
            width={120}
            height={60}
            className='ml-28'
          />
          <div className='bg-white flex space-x-2 rounded-full'>
            <div className='bg-gray-200 rounded-full px-4 py-2 flex justify-center items-center'>
              eng
            </div>
            <div className='rounded-full px-4 py-2 flex justify-center items-center'>
              deu
            </div>
          </div>
        </div>
      </div>
      <div className='rounded-full border-4 border-white w-[700px] h-[700px] absolute -top-14 left-60'></div>
      <div className='my-10'></div>
      <div className='w-full flex justify-center items-center'>
        <div className='bg-[#FF6E00] w-20 p-2 rounded-l-xl rounded-br-xl font-bold absolute left-96 mt-16 flex justify-center items-center'>
          Apps
        </div>
      </div>
      <div className='w-full flex justify-center items-center'>
        <div className='bg-[#E6D2FF] w-40 p-2 rounded-r-xl rounded-bl-xl font-bold absolute left-[820px] mt-16 flex justify-center items-center'>
          Frontend
        </div>
      </div>
      <div className='w-full flex justify-center items-center'>
        <div className='bg-[#96C8FF] w-40 p-2 rounded-r-xl rounded-bl-xl font-bold absolute left-[1000px] mt-52 flex justify-center items-center'>
          Backend
        </div>
      </div>
      <div className='relative z-20 mt-20 ml-10'>
        <p className='text-6xl w-[600px] font-bold'>
          We build scalable backend systems
        </p>
      </div>
      <div className='w-full flex justify-center items-center'>
        <div className='bg-[#DCFF1E] w-40 p-2 rounded-l-xl rounded-br-xl font-bold absolute left-[500px] mt-52 flex justify-center items-center'>
          Design
        </div>
      </div>
      <div className='absolute mt-40 left-[800px] w-[400px]'>
        <p>
          {' '}
          designed to handle millions of messages per second, while ensuring
          seamless real-time data processing for high-demand industries
        </p>
        <button className='bg-black mt-4 flex justify-center items-center text-center px-16 py-4 text-white rounded-full'>
          contact us
        </button>
      </div>
      <div className='flex gap-10 mt-[420px] relative w-full'>
        {images.map((item, index) => {
          return (
            <div
              key={index}
              className='w-full flex justify-center items-center'
            >
              <Image src={item}></Image>
            </div>
          );
        })}
      </div>

      <div className='flex justify-center items-center w-full mt-20'>
        <div className='w-11/12 bg-one bg-[#E6D2FF] rounded-[62px]'>
          <div className='flex justify-end w-full rounded-[62px]'>
            <div
              style={{
                border: '1px solid rgba(255, 255, 255, 0.60)',
                background: 'rgba(255, 255, 255, 0.20)',
                backdropFilter: 'blur(75px)',
                WebkitBackdropFilter: 'blur(75px)', // For Safari compatibility
              }}
              className='rounded-xl rounded-tr-[62px] border border-white p-4'
            >
              <p className='w-[400px] text-[24px]'>
                We specialize in building high-performance, scalable backend
                systems designed to handle heavy workloads and large-scale
                traffic.
              </p>
              <p className='text-[18px] font-bold mt-3'>Key Benefits</p>
              <p className='w-[400px] text-[14px]'>
                Capacity: Processes up to 5 million messages per second,
                ensuring smooth operation during peak loads. Big Data Handling:
                Efficiently manages billions of records.
              </p>
              <p className='text-[18px] font-bold mt-3'>Technology Stack</p>

              <div className='flex gap-x-2 gap-y-1 w-[400px] text-[12px]'>
                {tags.map((item, index) => {
                  const isLast = index === tags.length - 1; // Check if it's the last item
                  return (
                    !isLast && (
                      <div
                        key={index}
                        className='bg-white px-3 py-2 rounded-lg'
                      >
                        {/* Default styling */}
                        <p>{item}</p>
                      </div>
                    )
                  );
                })}
              </div>

              <div className='flex gap-x-2 gap-y-1 w-[400px] text-[12px] mt-1'>
                {tags.map((item, index) => {
                  const isLast = index === tags.length - 1; // Check if it's the last item
                  return (
                    isLast && (
                      <div
                        key={index}
                        className='bg-white px-3 py-2 rounded-lg'
                      >
                        {/* Default styling */}
                        <p>{item}</p>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          </div>
          <div className='flex w-full justify-between items-end mt-20'>
            <p className='text-[64px] w-[700px] leading-[60px] m-10'>
              Backend Solutions Development
            </p>
            <button className='bg-black m-10 flex justify-center items-center text-center w-80 h-12 text-white rounded-full'>
              explore the case study
            </button>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center w-full mt-10'>
        <div className='w-11/12 bg-two bg-orange-500 rounded-[62px]'>
          <div className='flex justify-end w-full rounded-[62px]'>
            <div
              style={{
                border: '1px solid rgba(255, 255, 255, 0.60)',
                background: 'rgba(255, 255, 255, 0.20)',
                backdropFilter: 'blur(75px)',
                WebkitBackdropFilter: 'blur(75px)', // For Safari compatibility
              }}
              className='rounded-xl rounded-tr-[62px] border border-white p-4'
            >
              <p className='w-[400px] text-[24px]'>
                Designed for optimal user experience, modern web and mobile
                applications combine intuitive interfaces with high performance
              </p>
              <p className='text-[18px] font-bold mt-3'>Key Benefits</p>
              <p className='w-[400px] text-[14px]'>
                PWA & Responsive Design: App-like performance on all devices SSR
                with Next.js: Faster loads and better SEO API-first Development:
                Seamless system integration Real-time Features: Live chats,
                notifications, and updates via WebSockets and GraphQL. Big Data
                Handling: Efficiently manages billions of records.
              </p>
              <p className='text-[18px] font-bold mt-3'>Technology Stack</p>

              <div className='flex gap-x-2 gap-y-1 w-[400px] text-[12px]'>
                {tags2.map((item, index) => {
                  return (
                    <div key={index} className='bg-white px-3 py-2 rounded-lg'>
                      {/* Default styling */}
                      <p>{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='flex w-full justify-between items-end mt-20'>
            <p className='text-[64px] w-[800px] leading-[60px] m-10'>
              Web & Mobile Application Development
            </p>
            <button className='bg-black m-10 flex justify-center items-center text-center w-80 h-12 text-white rounded-full'>
              explore the case study
            </button>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center w-full mt-10'>
        <div className='w-11/12 bg-three bg-[#ECEBF1] rounded-[62px]'>
          <div className='flex justify-end w-full rounded-[62px]'>
            <div
              style={{
                border: '1px solid rgba(255, 255, 255, 0.60)',
                background: 'rgba(255, 255, 255, 0.20)',
                backdropFilter: 'blur(75px)',
                WebkitBackdropFilter: 'blur(75px)', // For Safari compatibility
              }}
              className='rounded-xl rounded-tr-[62px] border border-white p-4'
            >
              <p className='w-[400px] text-[24px]'>
                We create clean, intuitive designs that enhance user experience.
                From websites to apps, we focus on aesthetics, functionality,
                and accessibility for a seamless user journey.
              </p>
            </div>
          </div>
          <div className='flex w-full justify-between items-end mt-40'>
            <p className='text-[64px] w-[600px] leading-[60px] m-10'>
              Design & User Experience
            </p>
            <button className='bg-black m-10 flex justify-center items-center text-center w-80 h-12 text-white rounded-full'>
              explore the case study
            </button>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center w-full mt-10'>
        <div className='w-11/12 bg-four bg-blue-300 rounded-[62px]'>
          <div className='flex justify-end w-full rounded-[62px]'>
            <div
              style={{
                border: '1px solid rgba(255, 255, 255, 0.60)',
                background: 'rgba(255, 255, 255, 0.20)',
                backdropFilter: 'blur(75px)',
                WebkitBackdropFilter: 'blur(75px)', // For Safari compatibility
              }}
              className='rounded-xl rounded-tr-[62px] border border-white p-4'
            >
              <p className='w-[400px] text-[24px]'>
                Full-cycle DevOps services ensure automated deployment and
                streamlined development processes.
              </p>
              <p className='text-[18px] font-bold mt-3'>Key Benefits</p>
              <p className='w-[400px] text-[14px]'>
                Automation & CI/CD: Streamlined deployment with continuous
                integration and delivery. Scalability & Security: Efficiently
                managing high-load systems with robust security practices
                throughout the deployment pipeline. Reliability: Continuous
                monitoring and quick recovery to minimize downtime
              </p>
              <p className='text-[18px] font-bold mt-3'>Technology Stack</p>

              <div className='flex gap-x-2 gap-y-1 w-[400px] text-[12px]'>
                {tags3.map((item, index) => {
                  return (
                    <div key={index} className='bg-white px-3 py-2 rounded-lg'>
                      {/* Default styling */}
                      <p>{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='flex w-full justify-between items-end mt-20'>
            <p className='text-[64px] w-[300px] leading-[60px] m-10'>
              DevOps & Automation
            </p>
            <button className='bg-black m-10 flex justify-center items-center text-center w-80 h-12 text-white rounded-full'>
              explore the case study
            </button>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center w-full mt-10'>
        <div className='w-11/12 bg-five bg-[#dcfc1c] rounded-[62px]'>
          <div className='flex justify-end w-full rounded-[62px]'>
            <div
              style={{
                border: '1px solid rgba(255, 255, 255, 0.60)',
                background: 'rgba(255, 255, 255, 0.20)',
                backdropFilter: 'blur(75px)',
                WebkitBackdropFilter: 'blur(75px)', // For Safari compatibility
              }}
              className='rounded-xl rounded-tr-[62px] border border-white p-4'
            >
              <p className='w-[400px] text-[24px]'>
                Solutions for blockchain platforms and the gaming industry
                provide Web3 integration and real-time transactions, ensuring a
                decentralized experience
              </p>
              <p className='text-[18px] font-bold mt-3'>Key Benefits</p>
              <p className='w-[400px] text-[14px]'>
                Web3 & Smart Contracts: Decentralized gaming with secure,
                automated transactions. Real-time Transactions: Instant
                blockchain-powered payments. Scalability & Security: Built for
                growth with strong security.
              </p>
              <p className='text-[18px] font-bold mt-3'>Technology Stack</p>

              <div className='flex gap-x-2 gap-y-1 w-[400px] text-[12px]'>
                {tags4.map((item, index) => {
                  return (
                    <div key={index} className='bg-white px-3 py-2 rounded-lg'>
                      {/* Default styling */}
                      <p>{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='flex w-full justify-between items-end mt-20'>
            <p className='text-[64px] w-[800px] leading-[60px] m-10'>
              Game & Web3 Platform Development
            </p>
            <button className='bg-black m-10 flex justify-center items-center text-center w-80 h-12 text-white rounded-full'>
              explore the case study
            </button>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center w-full mt-10 text-white'>
        <div className='w-11/12 bg-six bg-[#222224] rounded-[62px]'>
          <div className='flex justify-end w-full rounded-[62px]'>
            <div
              style={{
                border: '1px solid rgba(255, 255, 255, 0.60)',
                background: 'rgba(255, 255, 255, 0.20)',
                backdropFilter: 'blur(75px)',
                WebkitBackdropFilter: 'blur(75px)', // For Safari compatibility
              }}
              className='rounded-xl rounded-tr-[62px] border border-white p-4'
            >
              <p className='w-[400px] text-[24px]'>
                Ensuring efficient integration across any platform, service, or
                technology stack. From legacy systems to modern APIs, cloud
                services, and third-party tools, we cover all your business
                needs
              </p>
            </div>
          </div>
          <div className='flex w-full justify-between items-end mt-40'>
            <p className='text-[64px] w-[800px] leading-[60px] m-10'>
              Seamless Integration Across All Systems
            </p>
            <button className='bg-black m-10 flex justify-center items-center text-center w-80 h-12 text-white rounded-full'>
              explore the case study
            </button>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center items-center h-[600px]'>
        <p className=' w-[800px] text-[48px] leading-10 text-center'>
          We are <span className='text-blue-300'>flexible and collaborate</span>{' '}
          with trusted partners to bring your{' '}
          <span className='text-[#dcfc1c]'>vision to life</span>. While we
          specialize in key areas, we’re open to exploring{' '}
          <span className='text-orange-500'>new challenges</span> and delivering
          tailored solutions to meet your{' '}
          <span className='text-[#E6D2FF]'>unique project needs</span>
        </p>
      </div>

      <div className='bg-white p-12 rounded-t-[50px]'>
        <div className='flex justify-between w-full'>
          <p className='text-[96px] leading-[90px] w-[900px]'>
            Bringing your digital vision to life
          </p>
          <div className='flex items-start'>
            <div className='bg-black rounded-lg'>
              <Image src={twitter} width={36} height={36}></Image>
            </div>
            <div className='bg-black rounded-lg ml-2'>
              <Image src={instagram} width={36} height={36}></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
