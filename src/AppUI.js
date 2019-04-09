import React, { Component ,Fragment} from 'react';
// 下面两个组件都可以使用 前者是无状态组建 后者是UI组件

// 1.开始无状态组件
const AppUI =(props)=>{
    const {value,onchange,onsubclick,list,ondelclick}=props;
    return (
      <Fragment>
        <div>
          <input value={value} onChange={onchange}/>
          <button onClick={onsubclick}>提交</button>
        </div>
        <ul>
            {
              list.map((item,index)=>{
                return <li key={index} onClick={()=>{ondelclick(index)}}>{item}</li>
              })
            }
        </ul>
      </Fragment>
    );
}
// 2.开始UI组件  如果一个UI组件只有一个render生命周期，他就可以变成无状态组件
// class AppUI extends Component {
//   constructor(props){
//     super(props);
    
//   }
//   render() {
//     const {value,onchange,onsubclick,list,ondelclick}=this.props;
//     return (
//       <Fragment>
//         <div>
//           <input value={value} onChange={onchange}/>
//           <button onClick={onsubclick}>提交</button>
//         </div>
//         <ul>
//             {
//               list.map((item,index)=>{
//                 return <li key={index} onClick={()=>{ondelclick(index)}}>{item}</li>
//               })
//             }
//         </ul>
//       </Fragment>
//     );
//   }
// }

export default AppUI;
