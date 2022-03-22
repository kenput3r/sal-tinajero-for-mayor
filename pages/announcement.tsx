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
          <YoutubeVideo url="https://www.youtube.com/embed/HFArPUPMYLw" />
        ) : (
          <YoutubeVideo url="https://www.youtube.com/embed/HMpQXv1RcwA" />
        )}
      </section>
    </div>
  );
};

export default Announcement;
