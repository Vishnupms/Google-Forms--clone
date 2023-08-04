import React, { useState } from "react";
import {
  AddCircleOutline,
  CheckBox,
  Close,
  CropOriginal,
  FilterNone,
  MoreVert,
  OndemandVideo,
  ShortText,
  Subject,
  TextFields,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControlLabel,
  IconButton,
  MenuItem,
  Radio,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { BsFile, BsTrash } from "react-icons/bs";
import { FcRightUp } from "react-icons/fc";
import "./questionform.css";

function QuestionForm() {
    const [questions, setQuestions] = useState([
      {
        questionText: "which is capital of India ?",
        questionType: "radio",
        options: [
          { optionText: "Bengaluru" },
          { optionText: "Bhutan" },
          { optionText: "Hubbli" },
          { optionText: "Malesia" },
        ],
        open: true,
        required: false,
      },
    ]);

    function changeQuestion(text,i){
      var newQuestion =[...questions];
      newQuestion[i].questionText = text
      setQuestions(newQuestion)
      console.log(newQuestion)
    }
    function changeOptionValue(text,i,j){
      var optionsQuestion = [...questions]
      optionsQuestion[i].options[j].optionText = text
      setQuestions(optionsQuestion)
      console.log(optionsQuestion)
    }

    function addQuestionType(i,type){
      let qs =[...questions];
      console.log(type)
      qs[i].questionType = type
      setQuestions(qs)
    }

    function removeOption(i,j){
      var removeOptionQuestion = [...questions]
      if(removeOptionQuestion[i].options.length >1){
        removeOptionQuestion[i].options.splice(j,1)

        setQuestions(removeOptionQuestion)
        console.log(i+'___' +j)
      }
    }
  
    function questionsUI() {
      return questions.map((ques, i) => (
        <Accordion
          key={i}
          expanded={ques.open}
          className={ques.open ? "add_border" : ""}
        >
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            elevation={1}
            style={{ width: "100%" }}
          >
            {questions.open ? (
                <div className="saved_questions">

                <Typography style={{fontSize:"15px",fontWeight:"400",letterSpacing:'.1px',lineHeight:'24px',paddingBottom:"8px"}} >
                   {i+1}.  {questions[i].questionText}
                    </Typography>   

                    {ques.options.map((op,j)=>(
                      <div key={j}>
                        <div style={{display:"flex"}}>
                          <FormControlLabel style={{marginLeft:"5px",marginBottom:"5px"}} disabled control={<input type={ques.questionType}
                          color="primary" style={{marginRight:"3px"}} required={ques.type} />} label={
                            <Typography style={{fontFamily:'Roboto,Arial,Sans-serif',
                          fontSize:'13px',
                          fontWeight:'400',
                          letterSpacing:'.2px',
                          lineHeight:'20px',
                          color:'#202124'}}>
                            {ques.options[j].optionText}
                          </Typography>
                          } />
                        </div>

                      </div>
                    ))}

                </div>
            ):""}
          </AccordionSummary>
          <div className="question_boxes">
           <AccordionDetails className="add_question">
            <div className="add_question_top">
              <input type="text" className="question" placeholder="Question" value={ques.questionText} onChange={(e)=>{changeQuestion(e.target.value, i)}}/>
              <CropOriginal style={{color:"#5f6368"}} />
              <Select className="select" style={{color:"#5f6368",fontSize:"13px"}}>
                <MenuItem id="text" value="Text" onClick={()=>{addQuestionType(i,"text")}}><Subject style={{marginRight:"10px"}}  />Paragrapg</MenuItem>
                <MenuItem id="checkbox" value="Checkbox" onClick={()=>{addQuestionType(i,"checkbox")}} ><CheckBox style={{marginRight:"10px",color:"#70757a"}} checked />Checked</MenuItem>
                <MenuItem id="radio" value="Radio" onClick={()=>{addQuestionType(i,"radio")}}><Radio style={{marginRight:"10px",color:"#70757a"}} checked />Multiple Choice</MenuItem>


              </Select>

            </div>
            {ques.options.map((op,j)=>(
                      <div className="add_question_body" key={j}>
                        {
                          (ques.questionType!=="text") ?
                          <input type={ques.questionType} style={{marginRight:"10px"}} /> :
                          <ShortText style={{marginRight:"10px"}} />
                        }
                        <div>
                          <input type="text" className="text_input" placeholder="option" value={ques.options[j].optionText} onChange={(e)=>{changeOptionValue(e.target.value,i,j)}} />
                        </div>
                        <CropOriginal style={{color:"#5f6368"}} />
                        <IconButton aria-label="delete" >
                          <Close onClick={()=>{removeOption(i,j)}}/>
                        </IconButton>

                      </div>
                    ))}

                    {ques.options.length < 5 ? (
                      <div className="add_question_body">
                        <FormControlLabel disabled control={
                          (ques.questionType!== "text") ?
                          <input type={ques.questionType} color="primary" inputProps={{'aria-label':'secondary checkbox'}}
                          style={{marginLeft:"10px",marginRight:"10px"}} disabled />:
                          <ShortText style={{marginRight:"10px"}} />
                        } label={
                          <div>
                            <input type="text" className="text_input" style={{fontSize:"13px",width:"60px"}} placeholder="Add other"/>
                            <Button size="small" style={{fontSize:"13px",fontWeight:"600",textTransform:'none',color:"#4285f4"}}>Add Option</Button>
                          </div>
                        } />
                      </div>
                    ):""}


                    <div className="add_footer">
                      <div className="add_question_botton_left">
                        <Button size="small" style={{textTransform:"none",color:"#4285f4",fontSize:"13px",fontWeight:"600"}}>
                          <FcRightUp style={{border:"2px solid #4285f4",padding:"2px",marginRight:"8px"}}/>Answer key
                        </Button>

                      </div>
                      <div className="add_question_bottom">
                        <IconButton aria-label="Copy">
                          <FilterNone />
                        </IconButton>
                        <IconButton aria-label="delete">
                          <BsTrash />
                        </IconButton>
                        <span style={{color:"#5f6368",fontSize:"13px"}}>Required</span><Switch name="checkedA" color="primary" checked />
                        <IconButton >
                          <MoreVert />
                        </IconButton>

                      </div>

                    </div>
           </AccordionDetails>
          <div className="question_edit">
           <AddCircleOutline className="edit" />
           <OndemandVideo className="edit" />
           <CropOriginal className="edit" />
           <TextFields className="edit" />
          </div>

          </div>
        </Accordion>
      ));
    }
  
    return (
      <div className="question_form">
        <br></br>
        <div className="section">
          <div className="question_title_section">
            <div className="question_form_top">
              <input
                type="text"
                className="question_form_top_name"
                style={{ color: "black" }}
                placeholder="Untitled document"
              />
              <input
                type="text"
                className="question_form_top_desc"
                placeholder="Form description"
              />
            </div>
            {questionsUI()}
          </div>
        </div>
      </div>
    );
  }
  

export default QuestionForm;
