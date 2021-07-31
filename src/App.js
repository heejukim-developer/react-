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
       <div> 희주의 맛집 Blog </div>
      </div>
      <Modal />

    <div className ="list">
    <div className="one">
    <h2>{ 글제목[0] }<span onClick = { () => { 명문만두좋아요변경 (명문만두좋아요 +1) }}> 👍 </span> {명문만두좋아요} 
   <a href = "https://map.naver.com/v5/entry/place/18013468?c=14163392.6361061,4494019.4011922,13,0,0,0,dh&placePath=%2Fhome%3Fentry=plt">
   <img src = {n} className = "n" alt ="네이버"></img>
   </a>
   </h2>
    
   <p className="addr"> 경기 광주시 고불로 55 </p>
   <p> 만두집이지만 비빔냉면이 맛있는집 <br/> 세숫대야만한 그릇에 푸짐하게 주는게 특징이다 </p>
    <img src={mandu} className ="mandu" alt="만두집"/>
    </div>
    
    <div className="two">
    <h2> { 글제목[1] } <span onClick = { () => { 그집좋아요변경 (그집좋아요 +1) }}> 👍 </span> {그집좋아요} 
    <a href = "https://map.naver.com/v5/search/%EA%B7%B8%EC%A7%91/place/1714322616?c=14159491.3130306,4494263.1747692,13,0,0,0,dh&placePath=%2Fphoto%3Fentry%253Dpll">
   <img src = {n} className = "n" alt ="네이버"></img>
   </a>
    </h2>
   <p className="addr">경기 광주시 태봉로 10</p>
    <p> 만두를 싫어하는 사람도 빠지게 되는 맛 <br/>장사가 잘되어서 조만간 확장 이사를 하는데 넘 기쁘다</p>
    <img src={mandukuk} className ="mandukuk" alt="만두국집"/>
  </div>

  <div className="three">  
    <h2>{ 글제목[2] }<span onClick = { () => { 막국수좋아요변경 (막국수좋아요 +1) }}> 👍 </span> {막국수좋아요}
    <a href = "https://map.naver.com/v5/search/%EC%9E%A5%EC%A7%80%EB%A6%AC%EB%A7%89%EA%B5%AD%EC%88%98/place/37625123?c=14159491.3130306,4494263.1747692,13,0,0,0,dh">
   <img src = {n} className = "n" alt ="네이버"></img>
   </a>
    </h2>
   <p className="addr">경기 광주시 고불로 7</p>
    <p> 국수를 시키면 산더미 불고기 전골을 준다 <br/> 점심에는 줄서서 먹어야 한다 </p>
    <img src={mak} className ="mak" alt="막국수집"/>
</div>
    
<div className="four">
    <h2>{ 글제목[3] }<span onClick = { () => { 쉐프리좋아요변경 (쉐프리좋아요 +1) }}> 👍 </span> {쉐프리좋아요}
    <a href = "https://map.naver.com/v5/search/%EC%89%90%ED%94%84%EB%A6%AC/place/1419734430?c=14162668.2270187,4493258.7444444,15,0,0,0,dh&placePath=%3Fentry%253Dpll">
   <img src = {n} className = "n" alt ="네이버"></img>
   </a></h2>
    <p className="addr">경기 광주시 태전동로 21</p>
    <p>토마토 해산물 파스타가 맛있는집 <br/> 데이트 장소로도 좋다 </p>
    <img src={chef} className ="chef" alt="파스타집"/>
    </div>
    
    </div>
    
    <button className="pushbutton" onClick ={ () => {button변경(!button)} }>1</button>
    <button className="pushbutton" onClick ={ () => {button변경(!button)} }>2</button>
    <button className="pushbutton" onClick ={ () => {button변경(!button)} }>3</button>
    <button className="pushbutton" onClick ={ () => {button변경(!button)} }>4</button>
    
{/* 
 <div className="publish">

  <input onChange= {(e)=>{ 입력값변경 (e.target.value)}}/>
  <button onClick= {()=> {
    var arrayCopy=[...글제목]; 
    arrayCopy.unshift(입력값); 
    글제목변경(arrayCopy);
  }}>저장</button>
  </div> */}


  
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
    <h2>내가 뽑은 경기광주 맛집 </h2>
    <h4>2021.4.30 </h4>
    <h4 className="info"> 좋아요를 눌러주세요 <br/>네이버 버튼을 누르시면 지도로 이동합니다</h4>
    </div>
  </>
  )
}

function Button(props){
  return(
    <div className ="button">
    
    <h2> 더 많은 리스트를 준비중입니다 (꾸벅) { props. 글제목[ props. 누른제목 [props.저장 ]]}</h2>
    </div>
  )
}



export default App;
