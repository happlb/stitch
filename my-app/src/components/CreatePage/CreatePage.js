import React from 'react'
import TextGrid from "./TextGrid"
import Settings from "./Settings"
import "./CreatePage.css"
// import { MyPageContainer, MyIngredentContainer } from './styles'

export const CreatePage = () => (
  // <MyPageContainer>
  <div className="create-container">
    <div className="textfield">
    <textarea 
         placeholder="Type something here!">
    </textarea>
    </div>
    <div className="settings">
      <Settings/>
    </div>
    <div className="textgrid">
    <TextGrid/>
  </div>
  </div>
)

export default CreatePage
