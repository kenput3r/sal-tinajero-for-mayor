import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { useAppContext } from '@components/Context/AppContext';
import profilePhoto from '@images/st-profile-photo.png';
import logo from '@images/sal-tinajero-for-mayor.png';

const AboutSal: NextPage = () => {
  const { language } = useAppContext();
  return (
    <div>
      <h1 className="text-center">
        <div className="max-w-xs rounded-full overflow-hidden mx-auto leading-[0]">
          <Image src={profilePhoto} alt="Sal Tinajero" />
        </div>
        <div>
          <Image src={logo} alt="Sal Tinajero For Mayor" />
        </div>
      </h1>
      <section className="text-white max-w-3xl mx-auto px-1.5">
        {language === 'english' ? (
          <>
            <p className="mb-3">
              My name is Salvador “Sal” Tinajero and I am running to be the next Mayor in Santa Ana.
              I am a son of immigrants and was born and raised in Santa Ana. I went to our local
              schools and after attending college at Bradley University in Peoria, IL, earning a
              Bachelor of Arts in Speech Communication, and then a Master of Arts in Cross Cultural
              Education from National University in San Diego, California, I came back to the city I
              love to start a family with my wife Jennifer and raise my three beautiful children who
              also attended our public schools.
            </p>

            <p className="mb-3">
              I currently serve as Trustee of the Rancho Santiago Community College District, but
              for twelve years, I served as a Santa Ana city council member and two of those years
              as Mayor Pro Tem. I am proud of the work I did alongside our current Mayor Vicente
              Sarmiento. I was elected as part of a wave of new leadership in our city called the
              “Santa Ana Spring” that brought a seismic change to business as usual at city hall. My
              newly elected colleagues and I were successful in breaking the stranglehold that
              special interests had in our city and helped promote government transparency and
              openness through the passing of the Sunshine Ordinance, our inclusionary housing
              policy called the Housing Opportunity Ordinance, and we supported the implementation
              of district elections and revised term limits that allowed for new leadership after 26
              years under the same mayor.
            </p>

            <p className="mb-3">
              I also voted in support of efforts to fly the pride flag at city hall and create
              “Harvey Milk Day”, voted to pass a resolution declaring us a sanctuary city for
              immigrants, and supported the legalization of cannabis that has generated millions in
              tax revenue.
            </p>

            <p className="mb-3">
              Mayor Vicente Sarmiento did an amazing job leading our city during the pandemic and
              leaves us with a current budget surplus while other cities are facing bankruptcy and
              tough decisions. I am sure he will do great things for us as our next County
              Supervisor. But I promise you that as your next Mayor, I plan to support the
              common-sense solutions that he and his council allies brought since their election in
              2020. We will invest in youth, invest in healthcare, support progressive principles,
              rethink public safety, and increase prosperity in our city.
            </p>
          </>
        ) : (
          <>
            <p className="mb-3">
              My name is Salvador “Sal” Tinajero and I am running to be the next Mayor in Santa Ana.
              I am a son of immigrants and was born and raised in Santa Ana. I went to our local
              schools and after attending college at Bradley University in Peoria, IL, earning a
              Bachelor of Arts in Speech Communication, and then a Master of Arts in Cross Cultural
              Education from National University in San Diego, California, I came back to the city I
              love to start a family with my wife Jennifer and raise my three beautiful children who
              also attended our public schools.
            </p>

            <p className="mb-3">
              I currently serve as Trustee of the Rancho Santiago Community College District, but
              for twelve years, I served as a Santa Ana city council member and two of those years
              as Mayor Pro Tem. I am proud of the work I did alongside our current Mayor Vicente
              Sarmiento. I was elected as part of a wave of new leadership in our city called the
              “Santa Ana Spring” that brought a seismic change to business as usual at city hall. My
              newly elected colleagues and I were successful in breaking the stranglehold that
              special interests had in our city and helped promote government transparency and
              openness through the passing of the Sunshine Ordinance, our inclusionary housing
              policy called the Housing Opportunity Ordinance, and we supported the implementation
              of district elections and revised term limits that allowed for new leadership after 26
              years under the same mayor.
            </p>

            <p className="mb-3">
              I also voted in support of efforts to fly the pride flag at city hall and create
              “Harvey Milk Day”, voted to pass a resolution declaring us a sanctuary city for
              immigrants, and supported the legalization of cannabis that has generated millions in
              tax revenue.
            </p>

            <p className="mb-3">
              Mayor Vicente Sarmiento did an amazing job leading our city during the pandemic and
              leaves us with a current budget surplus while other cities are facing bankruptcy and
              tough decisions. I am sure he will do great things for us as our next County
              Supervisor. But I promise you that as your next Mayor, I plan to support the
              common-sense solutions that he and his council allies brought since their election in
              2020. We will invest in youth, invest in healthcare, support progressive principles,
              rethink public safety, and increase prosperity in our city.
            </p>
          </>
        )}
      </section>
    </div>
  );
};

export default AboutSal;
