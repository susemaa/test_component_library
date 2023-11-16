import React from 'react';

interface NoteProps {
  title: string,
  body: string,
  date: Date,
}

function formatDate(initialDate: Date): string {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  const formattedDate = initialDate.toLocaleDateString('ru-RU');
  return formattedDate;
};

const Note = ({ title, body, date }: NoteProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">
        {body}
      </p>
      <div className="pt-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{formatDate(date)}</span>
      </div>
    </div>
  );
}

export default Note;
