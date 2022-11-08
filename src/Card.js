import { useEffect, useState } from "react";

export default function Card({ title, description }) {
  const [editable, setEditable] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);

  // useEffect(() => {
  //   setEditTitle(title);
  //   setEditDescription(description);
  // }, [title, description]);

  const handleEdit = () => {
    setEditable(true);
    setEditTitle(editTitle);
    setEditDescription(editDescription);
  };

  const handleSave = () => {
    setEditTitle(editTitle);
    setEditDescription(editDescription);
    setEditable(false);
  };

  const handleDelete = () => {
    setEditTitle("");
    setEditDescription("");
  };

  const handleCancel = () => {
    console.log(editTitle, editDescription);
    // title = editTitle;
    // description = editDescription;
    console.log(title, description);
   
  };

  return (
    <>
      {editable ? (
        <div>
        <input
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}          
        />
        <input
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
        />
         <button onClick={handleSave}>save</button>
          <button onClick={handleCancel}>cancel</button>
        </div>
      ) : (
        <div>
        <h1>{editTitle}</h1>
        <h1>{editDescription}</h1>
        <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>delete</button>
        </div>
      )}

      
    </>
  );
}
