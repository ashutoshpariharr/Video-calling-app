import React from 'react';

interface MeetingProps {
  params: {
    id: string;
  };
}

function Meeting({ params }: MeetingProps) {
  return (
    <div>
      <h1>Meeting working with id: {params.id}</h1>
    </div>
  );
}

export default Meeting;
