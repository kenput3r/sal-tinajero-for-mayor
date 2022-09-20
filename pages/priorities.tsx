import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import YoutubeVideo from '@components/Video/YoutubeVideo';
import housing from '@images/housing.jpg';
import neighborhoods from '@images/neighborhoods.jpg';
import youth from '@images/youth.jpg';
import health from '@images/health.jpg';

const priorities = [
  {
    image: health,
    title: 'Equity in Public Health',
    tagline: '“Fighting for healthier neighborhoods and access to quality healthcare”',
    description:
      'Santa Ana was one of the hardest hit cities in Orange County by the coronavirus pandemic, and it further worsened health disparities in our city, particularly devastating the Latino community. Orange County officials failed to take this health crisis seriously and did not take the necessary steps to quickly and effectively mobilize the county’s health resources to keep our families safe and healthy. At the same time, central Santa Ana, with heavily dense working-class neighborhoods, does not have much access to parks which has led to many other health issues for our residents. I believe that in order to have a safe and vibrant city, we must address health access and inequality.',
    bullets: [
      'Advocate for the creation of our own Public Health Department that can better address health disparities impacting our residents.',
      'Promote health and wellness through city-funded preventative programs and strategies in partnership with our local nonprofits to keep our neighborhoods safe and healthy.',
      'Fight for more green and public open space. Santa Ana is a park-poor city, and we must look for opportunities to change, like ensuring the Willowick Golf Course, with its 104 acres of land, becomes a green space with affordable housing. Our young people and families deserve to have access to a better quality of life.',
    ],
  },
  {
    image: housing,
    title: 'Housing for All',
    tagline:
      '“Expanding affordable housing for working families and promoting humane solutions to address the houseless crisis”',
    description:
      'I will fight for all Santa Ana residents to be able to afford to live and remain in the city. The global pandemic not only had public health implications, it further worsened economic inequality and the housing crisis for working families and our unhoused neighbors. In a city where the majority of residents are renters and one missed paycheck away from being houseless, we must do everything we can to fight for the right of housing for all.',
    bullets: [
      'Protect tenants and families by defending the Rent Stabilization and Just-Cause Eviction ordinance that prohibits landlords from increasing rent by more than 3% per year and provides stronger protections against getting unjustly evicted.',
      'Support the creation of a Rent Board and Registry to make sure our Rent Stabilization and Just-Cause Eviction ordinance is implemented and enforced. ',
      'Strengthen the 2021 Affordable Housing Opportunity and Creation Ordinance, which encourages the development of mixed-income housing development projects. This includes more affordable housing units for low-income families. This ordinance was previously known as the Housing Opportunity Ordinance (HOO), which I championed during my time as a Council Member.',
      'Increase funding for the “My First Home Program” which provides first-time homebuyers with down payment assistance so more Santa Ana residents can achieve their dream of owning a home in the community they grew up in.',
      'Invest in programs that transition unhoused people from the streets to housing and services. Currently, the city is doing what it can to address the regional houseless crisis that has only worsened due to the lack of leadership from the County Board of Supervisors. I will fight to ensure our county government takes responsibility for addressing this issue while at the same time investing in solutions that address the immediate needs of our unhoused neighbors and residents.',
    ],
  },
  {
    image: neighborhoods,
    title: 'Safe and Vibrant Neighborhoods',
    tagline:
      '“Improving public safety and community trust with comprehensive preventative solutions and police accountability that promote safer neighborhoods”',
    description:
      'Our residents deserve to live in safe and vibrant neighborhoods and we can achieve that when we improve our community safety programs and policies. My approach to public safety is comprehensive: invest in crime prevention, build trust with residents and strengthen police accountability.',
    bullets: [
      'Tackle the root causes of crime to be effective in improving public safety. I will advocate increasing funding for community programs and services that promote healthy youth development, academic success, gang prevention, and job opportunities',
      'Increase police effectiveness by redirecting funds to pilot programs with mental health and community-based specialists that can quickly respond to non-violent emergencies such as mental health, juvenile incidents, and substance abuse. This will allow our city and the police department to use resources more effectively to respond to more serious crimes while improving trust with residents in the city.',
      'Support the establishment and implementation of a civilian police oversight commission with the authority to ensure our officers are accountable, increase the quality of life for all Santa Ana neighborhoods and maintain fiscal responsibility. Over the last decade, the city of Santa Ana has paid more than $24 million in lawsuit settlements for police misconduct, this is unacceptable.',
    ],
  },
  {
    image: youth,
    title: 'Investing in Our Future, Investing in Our Youth',
    tagline:
      '“Ensuring our young people live in healthy neighborhoods and have opportunities for success”',
    description:
      'I believe our young people are not just the leaders of the future but also today. Young people make up nearly 31% of the population in Santa Ana, which makes us one of the youngest cities in the nation. It is important for our city government, service organizations, and community stakeholders to work closely together to ensure our young people are thriving and have access to a good quality of life. My commitment in my professional and personal life has been to building young leaders and uplifting their voices, so they are taken into account when government leaders make decisions about their community and future',
    bullets: [
      "Champion more investments in our city's youth services and programs to better serve young people in our city. We are one of the youngest cities in the nation; we must increase our investment and commitment to youth because our future depends on it.",
      'Support the creation of youth civic engagement programs, like democracy-in-action clubs in community centers and schools, to empower and support the leadership development of young people.',
      'Increase collaboration with Santa Ana Unified School District and Garden Grove Unified School District to strengthen our partnerships and coordination to better support our youth with after-school programs and access to open space.',
    ],
  },
];

const Priorities = () => (
  <>
    <Head>
      <title>Priorities | Sal Tinajero For Mayor | Santa Ana, CA</title>
      <meta
        name="description"
        content="Sal speaks out about what issues will be priorities to him once in office as Mayor of Santa Ana."
      />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <div className="text-white w-[768px] max-w-full mx-auto">
      <YoutubeVideo url="https://www.youtube.com/embed/8LTai0jQoSE" />

      <h1 className="inline-block bg-white text-black text-7xl font-bold mb-8 mt-4 uppercase phones:text-5xl px-2 phones:mx-2">
        Priorities
      </h1>

      {priorities.map(({ image, title, tagline, description, bullets }, i) => (
        <section
          key={title}
          className={`mb-8 pb-4 phones:px-2 ${
            i === priorities.length - 1 ? 'border-b-0' : 'border-b'
          }`}
        >
          <div className="flex flex-row flex-wrap gap-4 mb-4">
            <div className="d:max-w-[300px]">
              <Image src={image} alt={title} width={400} height={400} />
            </div>
            <div className="flex flex-col flex-1">
              <h2 className="text-5xl mb-3 uppercase phones:text-3xl">{title}</h2>
              <h3 className="text-2xl italic mb-4 phones:text-xl phones:mb-2">{tagline}</h3>
            </div>
          </div>
          <p className="mb-4">{description}</p>
          <p className="mb-2">As Mayor of Santa Ana, I will:</p>
          <ul className="list-disc pl-8">
            {bullets.map((b, x) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`${title}-${x}`} className="mb-2">
                {b}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  </>
);

export default Priorities;
