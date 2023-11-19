import React from 'react';
import { formatDate } from '../../utils';

interface NoteProps {
  title: string,
  body: string,
  date: Date,
}

const Note: React.FC<NoteProps> = ({ title, body, date }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4 rounded">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base max-h-96 overflow-y-auto bg-red">
        {body}
      </p>
      <div className="pt-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{formatDate(date)}</span>
      </div>
    </div>
  );
};

export default Note;
