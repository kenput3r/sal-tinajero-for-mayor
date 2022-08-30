import React from 'react';
import Head from 'next/head';
import YoutubeVideo from '@components/Video/YoutubeVideo';

const priorities = [
  {
    title: 'Public Health for Us',
    tagline: '“Fighting for equitable, affordable, and accessible health care”',
    bullets: [
      'Create our own Healthcare agency',
      'Continue working with local nonprofits to focus on preventative health services',
      'Promote health and wellness through city-funded healthy eating habits, exercise, and relevant health protocols initiatives',
    ],
  },
  {
    title: 'Housing for Us',
    tagline: '“Defending affordable housing, promoting future housing”',
    bullets: [
      'Support our tenant&quote;s ability to remain housed through the protection and implementation of our Rent stabilization and just-cause eviction ordinance',
      'Support the strengthening of our inclusionary policy, the Housing Opportunity Ordinance',
      'Support the development of affordable housing and increase funding for first-time home buyer programs to allow Santa Ana residents to stay in the community they grew up in',
    ],
  },
  {
    title: 'Pro-active Public Safety',
    tagline: '“Improving public safety by promoting good policing and preventative measures”',
    bullets: [
      'Focus on investing in crime prevention activities and programs i.e. youth sports, academic programming, drug rehabilitation, and other wrap-around services to prevent gang recruitment and criminality',
      'Redirect funds towards health and youth agencies that are better equipped at dealing with mental health emergencies of the houseless and mentally ill residents so our police force can improve response times to more serious crimes',
      'Support the implementation of a police oversight committee with the authority to ensure our officers are being properly trained and to prevent legal claims against the police that taxpayers pay for',
    ],
  },
  {
    title: 'In Youth We Trust',
    tagline: '“Investing In Youth means investing in our future”',
    bullets: [
      'Our youth is the future of our city and we should take pride in them and invest in their future, today',
      'Youth voices must be lifted up and youth should be consulted when decisions are being made about what impacts them and their future',
      'Support the creation of civic engagement and democracy-in-action clubs in schools and in community centers so that youth can empower themselves through the acquisition of public speaking skills, critical thinking practices, and decision-making exercises',
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

      {priorities.map(({ title, tagline, bullets }) => (
        <section key={title} className="mb-8 phones:px-2">
          <h2 className="text-3xl mb-2 underline">{title}</h2>
          <h3 className="text-xl italic">{tagline}</h3>
          <ul className="list-disc pl-8">
            {bullets.map((b, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`${title}-${i}`} className="mb-2">
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
