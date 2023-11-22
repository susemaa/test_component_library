import React, { useState } from 'react';
import {
  Editor, EditorState, RichUtils, convertFromRaw, convertToRaw,
} from 'draft-js';
import 'draft-js/dist/Draft.css';

interface EditableTextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const EditableTextInput: React.FC<EditableTextInputProps> = ({ label, value, onChange }) => {
  const [editorState, setEditorState] = useState(
    value
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(value)))
      : EditorState.createEmpty(),
  );

  const applyStyle = (style: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const isStyleActive = (style: string) => {
    const currentStyle = editorState.getCurrentInlineStyle();
    return currentStyle.has(style);
  };

  const handleChange = (state: EditorState) => {
    setEditorState(state);
    onChange(JSON.stringify(convertToRaw(editorState.getCurrentContent())));
  };

  return (
    <div className="editor-container p-4 bg-white border border-gray-300 rounded">
      <div className="toolbar flex items-center justify-between mb-2">
        <span className="text-lg font-semibold">{label}</span>
        <button
          type="button"
          className={`
            px-3 py-1 text-sm font-medium rounded
            ${isStyleActive('BOLD') ? 'bg-blue-500 text-black' : 'bg-blue-300 text-white'}
          `}
          onMouseDown={(e) => {
            e.preventDefault();
            applyStyle('BOLD');
          }}
        >
          B
        </button>
      </div>
      <div className="border border-gray-300 rounded-lg p-2 max-h-96 overflow-y-auto">
        <Editor editorState={editorState} onChange={handleChange} />
      </div>
    </div>
  );
};

export default EditableTextInput;

const emptyTextInputValue = JSON.stringify(
  convertToRaw(
    EditorState.createEmpty()
      .getCurrentContent(),
  ),
);

export { emptyTextInputValue };
