import React, { useState } from 'react';
import { Editor, EditorState, RichUtils, convertFromRaw, convertToRaw, ContentBlock } from 'draft-js';
import 'draft-js/dist/Draft.css';

interface EditableTextInputProps {
  value: string;
  onChange: (value: string) => void;
}

const EditableTextInput: React.FC<EditableTextInputProps> = ({ value, onChange }) => {
  const [editorState, setEditorState] = useState(
    value ? EditorState.createWithContent(convertFromRaw(JSON.parse(value))) : EditorState.createEmpty()
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
    <div className="editor-container p-4 bg-white shadow-lg rounded">
      <div className="toolbar mb-2">
        <button
          type="button"
          className={`px-2 py-1 m-1 text-dark text-bold rounded ${isStyleActive('BOLD') ? 'bg-blue-500' : 'bg-blue-300'}`}
          onMouseDown={(e) => {
            e.preventDefault();
            applyStyle('BOLD');
          }}>
          B
        </button>
      </div>
      <div className="border border-gray-300 rounded p-2 max-h-96 overflow-y-auto">
        <Editor editorState={editorState} onChange={handleChange} />
      </div>
    </div>
  );
};

export default EditableTextInput;
