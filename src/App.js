import React,{useState} from 'react';
import './App.css';
import mandu from './명문만두.jpeg';
import mandukuk from './그집.jpeg';
import mak from './장지리막국수.jpg';
import chef from './쉐프리.jpeg';
import n from './n.png';



function App() {
let[글제목,글제목변경] = useState(['명문만두','그집','장지리막국수','쉐프리']);
let [명문만두좋아요,명문만두좋아요변경]= useState(3);
let [그집좋아요,그집좋아요변경]= useState(7);
let [막국수좋아요,막국수좋아요변경]= useState(6);
let [쉐프리좋아요,쉐프리좋아요변경]= useState(3);
let [button,button변경]=useState(true);
let [누른제목,누른제목변경] = useState(0);
let [입력값, 입력값변경]=useState('');



  return (
    <div className="App">
      <div className="black-nav">
       <div> 희주의 개발 Blog </div>
      </div>
      <Modal />

    <div className ="list">
    
    <h3>{ 글제목[0] }<span onClick = { () => { 명문만두좋아요변경 (명문만두좋아요 +1) }}> 👍 </span> {명문만두좋아요} 
   <a href = "https://map.naver.com/v5/entry/place/18013468?c=14163392.6361061,4494019.4011922,13,0,0,0,dh&placePath=%2Fhome%3Fentry=plt">
   <img src = {n} className = "n" alt ="네이버"></img>
   </a>
   </h3>
    
   <p>경기 광주시 고불로 55 </p>
   <p>비빔냉면이 맛있는집</p>
   
   
    <img src={mandu} className ="mandu" alt="만두집"/>
    <hr/>
    
    <h3> { 글제목[1] } <span onClick = { () => { 그집좋아요변경 (그집좋아요 +1) }}> 👍 </span> {그집좋아요} 
    <a href = "https://map.naver.com/v5/search/%EA%B7%B8%EC%A7%91/place/1714322616?c=14159491.3130306,4494263.1747692,13,0,0,0,dh&placePath=%2Fphoto%3Fentry%253Dpll">
   <img src = {n} className = "n" alt ="네이버"></img>
   </a>
    </h3>
   <p>경기 광주시 태봉로 10</p>
    <p>만둣국집</p>
    <img src={mandukuk} className ="mandukuk" alt="만두국집"/>

    <hr/>

    <h3>{ 글제목[2] }<span onClick = { () => { 막국수좋아요변경 (막국수좋아요 +1) }}> 👍 </span> {막국수좋아요}
    <a href = "https://map.naver.com/v5/search/%EC%9E%A5%EC%A7%80%EB%A6%AC%EB%A7%89%EA%B5%AD%EC%88%98/place/37625123?c=14159491.3130306,4494263.1747692,13,0,0,0,dh">
   <img src = {n} className = "n" alt ="네이버"></img>
   </a>
    </h3>
   <p>경기 광주시 고불로 7</p>
    <p>고기주는 막국수집</p>
    <img src={mak} className ="mak" alt="막국수집"/>

    <hr/>

    <h3>{ 글제목[3] }<span onClick = { () => { 쉐프리좋아요변경 (쉐프리좋아요 +1) }}> 👍 </span> {쉐프리좋아요}
    <a href = "https://map.naver.com/v5/search/%EC%89%90%ED%94%84%EB%A6%AC/place/1419734430?c=14162668.2270187,4493258.7444444,15,0,0,0,dh&placePath=%3Fentry%253Dpll">
   <img src = {n} className = "n" alt ="네이버"></img>
   </a></h3>
    <p>경기 광주시 태전동로 21</p>
    <p>토마토 해산물 파스타가 맛있는집</p>
    <img src={chef} className ="chef" alt="파스타집"/>
    
    <hr/>
    </div>
    
    <button onClick ={ () => {누른제목변경(0)} }>1</button>
    <button onClick ={ () => {누른제목변경(1)} }>2</button>
    <button onClick ={ () => {누른제목변경(2)} }>3</button>
    <button onClick ={ () => {누른제목변경(3)} }>4</button>

 <div className="publish">

  <input onChange= {(e)=>{ 입력값변경 (e.target.value)}}/>
  <button onClick= {()=> {
    var arrayCopy=[...글제목]; 
    arrayCopy.unshift(입력값); 
    글제목변경(arrayCopy);
  }}>저장</button>
  </div>


    <button onClick = { ()=> { button변경(!button) }}>더보기</button>
  
    <input onChange={ (e)=>{ 입력값변경 (e.target.value)} }/>

   {
     button === true
     ? <Button 글제목 ={글제목} 누른제목={누른제목} ></Button>
     : null
   }

    </div>
    
  )
}

function Modal(){
  return(
  <>
    <div className = "Modal">
    <h2>경기광주맛집  </h2>
    <p>2021년 4월 30일</p>
    <p> 내가 뽑은 베스트 맛집 ! </p>
    </div>
  </>
  )
}

function Button(props){
  return(
    <div className ="button">
    
    <h2> hi{ props. 글제목[ props. 누른제목 [props.저장 ]]}</h2>
    </div>
  )
}



export default App;
