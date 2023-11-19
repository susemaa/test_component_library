import { ContentBlock } from "draft-js";

function formatDate(initialDate: Date): string {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  } as const;
  const formattedDate = initialDate.toLocaleDateString('ru-RU', options);
  return formattedDate;
}

export { formatDate };
