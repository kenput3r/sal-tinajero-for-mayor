import React from 'react';
import { NextPage } from 'next';
import YoutubeVideo from '@components/Video/YoutubeVideo';
import { useAppContext } from '@components/Context/AppContext';

const Announcement: NextPage = () => {
  const { language } = useAppContext();
  return (
    <div>
      <section>
        {language === 'english' ? (
          <YoutubeVideo url="https://www.youtube.com/embed/c-cDtN79e5c" />
        ) : (
          <YoutubeVideo url="https://www.youtube.com/embed/hNUL3mjijbU" />
        )}
      </section>
    </div>
  );
};

export default Announcement;
