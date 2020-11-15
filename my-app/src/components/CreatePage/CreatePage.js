import React from "react";
import TextGrid from "./TextGrid";
import Settings from "./Settings";
import TextField from "./TextField";
import "./CreatePage.css";
// import { MyPageContainer, MyIngredentContainer } from './styles'

export const CreatePage = () => (
  // <MyPageContainer>
  <div className="create-container">
    <div className="textfield">
      <TextField />
    </div>
    <div className="settings">
      <Settings />
    </div>
    <div className="textgrid">
      <TextGrid />
    </div>
  </div>
);

export default CreatePage;
