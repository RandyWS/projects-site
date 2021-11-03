import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import PreviewModal from "./PreviewModal";

const getHtml = (editorState) =>
  draftToHtml(convertToRaw(editorState.getCurrentContent()));

const TextEditor = (props) => {
  const [editorState, setEditorState] = useState(() => {
    let content = window.localStorage.getItem("content");

    if (content) {
      return EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
    } else {
      return EditorState.createEmpty();
    }
  });

  useEffect(() => {
    props.setContent(
      JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    );
    window.localStorage.setItem(
      "content",
      JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    );
  }, [editorState, props.setContent]);

  return (
    <div>
      <div className="html-view">{getHtml(editorState)}</div>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      <button
        className="btn btn-success"
        data-toggle="modal"
        data-target="#previewModal"
      >
        Preview post
      </button>

      <PreviewModal output={getHtml(editorState)} />
    </div>
  );
};
export default TextEditor;
