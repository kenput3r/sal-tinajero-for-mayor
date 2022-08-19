import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import endorsementsImage from '@images/endorsements.jpg';

const electedOfficials = [
  'Sharon Quirk-Silva, CA State Assemblymember',
  'Johnathan Ryan Hernandez, Santa Ana Councilmember',
  'Jessie Lopez, Santa Ana Councilmember',
  'Vicente Sarmiento, Santa Ana Mayor',
  'Dr. Rigoberto Rodriguez, SAUSD President',
  'Carolyn Torres, SAUSD Vice President',
  'Dr. Jose Moreno, Anaheim City Councilman',
  'Jesus Silva, Fullerton City Council',
  'Al Jabbar, AESD Trustee',
  'David Crockett, RSCCD Vice President',
  'Zeke Hernandez, RSCCD Trustee',
  'Dr. Alfonso Alvarez, SAUSD School Board',
  'Walter Muneton, GGUSD Trustee',
];

const organizations = [
  'Unite Here Local 11',
  'Southwest Carpenters',
  'Cooperative Campaigns',
  'Ruben Smith, Legal counsel at College',
];

const Endorsements = () => (
  <>
    <Head>
      <title>Endorsements | Sal Tinajero For Mayor | Santa Ana, CA</title>
      <meta
        name="description"
        content="Elected officals, Unions, Organizations, and Leaders that endorse Sal Tinajero for Mayor of Santa Ana in 2022"
      />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <div
      className="grid place-content-center place-items-center phones:block"
      style={{ gridTemplate: 'container' }}
    >
      <div className="opacity-40 phones:opacity-100" style={{ gridArea: 'container' }}>
        <Image
          src={endorsementsImage}
          alt="Sal Tinajero, Vicente Sarmiento, Jessie Lopez, and Jonathan"
        />
      </div>
      <div
        className="w-[480px] max-w-full mx-auto z-10 phones:px-2.5"
        style={{ gridArea: 'container' }}
      >
        <h1 className="text-white text-7xl phones:text-5xl">Endorsements</h1>

        <section className="p-4 mb-8">
          <h2 className="text-white text-3xl mb-2">Elected Officials</h2>
          <ul className="text-white list-disc pl-5">
            {electedOfficials.map((official) => (
              <li>{official}</li>
            ))}
          </ul>
        </section>

        <section className="p-4 mb-8">
          <h2 className="text-white text-3xl mb-2">
            Unions, Community Organizations, Community Leaders
          </h2>
          <ul className="text-white list-disc pl-5">
            {organizations.map((org) => (
              <li>{org}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  </>
);

export default Endorsements;
