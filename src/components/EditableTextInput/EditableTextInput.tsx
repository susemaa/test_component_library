import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

const EditableTextInput: React.FC = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const applyStyle = (style: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const isStyleActive = (style: string) => {
    const currentStyle = editorState.getCurrentInlineStyle();
    return currentStyle.has(style);
  };

  return (
    <div className="editor-container p-4 bg-white shadow-lg rounded">
      <div className="toolbar mb-2">
        <button 
          className={`px-2 py-1 m-1 text-dark text-bold rounded ${isStyleActive('BOLD') ? 'bg-blue-500' : 'bg-blue-300'}`}
          onMouseDown={(e) => {
            e.preventDefault();
            applyStyle('BOLD');
          }}>
          B
        </button>
      </div>
      <div className="border border-gray-300 rounded p-2 max-h-96 overflow-y-auto">
        <Editor editorState={editorState} onChange={setEditorState} />
      </div>
    </div>
  );
};

export default EditableTextInput;
