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

const rawStringToFormattedText = (rawString: string): string => {
  const rawJson = JSON.parse(rawString);
  let parsedText = '';

  rawJson.blocks.forEach((block: ContentBlock) => {
    let blockText = block.getText();
    let modifiedText = '';
  
    for (let i = 0; i < blockText.length; i += 1) {
      const style = block.getInlineStyleAt(i);
      if (style.has('BOLD')) {
        modifiedText += '^' + blockText[i];
      } else {
        modifiedText += blockText[i];
      }
    }
  
    parsedText += modifiedText;
  });

  return parsedText;
};

export { formatDate, rawStringToFormattedText };
