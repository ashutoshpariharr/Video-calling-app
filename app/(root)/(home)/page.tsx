"use client"

import React, { useState } from 'react';
import Banner from '@/components/Banner';
import CardMeeting from '@/components/CardMeeting';
import MeetingDialog from '@/components/dialog/MeetingDialog';
import { useRouter } from 'next/navigation';

function HomePage() {
  const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>(undefined);

  const router = useRouter();

  const meetingpopDialog = () => {
    console.log('Clicked meeting');
  }

  return (
    <div>
      <Banner />
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        <CardMeeting
          ImgURL="/svg/add-meeting.svg"
          title="New Meeting"
          subTitle="SetUp a new Recording"
          bgColors='#DD680C'
          onClicked={() => setMeetingState('isInstantMeeting')}
        />

        <CardMeeting
          ImgURL="/svg/join-meeting.svg"
          title="Join Meeting"
          subTitle="Via Invitation Links"
          bgColors='#2191DF'
          onClicked={() => setMeetingState('isJoiningMeeting')}
        />
        <CardMeeting
          ImgURL="/svg/schedule.svg"
          title="Schedule Meeting"
          subTitle="Plane Your Meetings"
          bgColors='#3D3162'
          onClicked={() => setMeetingState('isScheduleMeeting')}
        />

        <CardMeeting
          ImgURL="/svg/recording.svg"
          title="View Recordings"
          subTitle="Meetings Recordings"
          bgColors='#969B21'
          onClicked={() => router.push('/recording')}
        />
      </section>

      <MeetingDialog
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Join New Meetings"
        handleClick={() => meetingpopDialog}
        buttonTitle="Click For New Meetings"
      />
    </div>
  );
}

export default HomePage;
