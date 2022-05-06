import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: "this is Feedback Item 1", rating: 10 },
    { id: 2, text: "this is Feedback Item 2", rating: 3 },
    { id: 3, text: "this is Feedback Item 3", rating: 7 },
  ]);
  const [feedBackEdit, setFeedBackEdit] = useState({
    item: {},
    edit: false,
  });
  const addingFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      setFeedback(feedback.filter((f) => f.id !== id));
    }
  };
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );

    // setFeedBack(feedback.map(item)=>{
    //   item.id ===id ?{...item,...updItem}:item
    // })
  };

  const editFeedback = (item) => {
    setFeedBackEdit({
      item,
      edit: true,
    });
  };
  // const editFeedback = (item) => {
  //   setFeedbackEdit({
  //     item,
  //     edit: true,
  //   });
  // };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedBackEdit,
        deleteFeedback,
        addingFeedback,
        editFeedback,
        updateFeedback,
      }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
