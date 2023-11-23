## @susemaa/test_component_library

Test npm package with React reusable components.

## Comopnents

### EditableTextInput

The text input in which user can set his text Bold

Props:
  - label 
Label for your EditableTextInput. Type string. Has to be simple string (e.g. 'Edit your text easily').
  - value
Value of EditableTextInput. Type string, but has to be JSONed raw EditorState (explore [draft-js](https://draftjs.org/) for more info).
Library also provides EmptyTextInputValue for setting it as default value of form or something.
  - onChange
Contains function to change your state. (e.g. onChange={(newValue) => setValue(newValue)}).

### Note

Simple note.

Props:
  - title
Title for your Note. Type string. Has to be simple string (e.g. 'Note 1').
  - body
Same as EditableTextInput.value
  - date
Date of note creation. Type Date. (e.g. new Date())