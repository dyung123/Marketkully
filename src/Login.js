import React, { Component } from 'react';
import './css/Login.css'

class Login extends Component {
    state = {
        id:"",
        pw:""
    }
    login = () => {
        let id = document.getElementById('login_id').value
        let pw = document.getElementById('login_pw').value
        
        if(id===""){
            if(pw===""){
                alert('내용을 입력하지 않았습니다. 다시확인해주세요')
            }else{
                alert('아이디를 작성하지 않았습니다. 다시 확인해 주세요')
            }
        }else{
            if(pw===""){
                alert('비밀번호를 작성하지 않았습니다. 다시확인해주세요')
            }else{
                if(id==='master'){
                    if(pw==="1234"){
                        alert('로그인 성공')
                    }else{
                        alert('아이디혹은 비밀번호가 틀렸습니다.')
                    }
                }else{
                    alert('아이디혹은 비밀번호가 틀렸습니다.')
                }
            }
        }
    }
    render() {
        return (
            <div>
                <p className='login_title'>로그인</p>   
                <div className='input'><input name="id" type="text" placeholder='아이디를 입력해주세요' id='login_id' onChange={this.typeLogin}></input></div>
                <div className='input'><input name="pw" type="password" placeholder='비밀번호를 입력해주세요' id='login_pw' onChange={this.typeLogin}></input></div>
                <div className='find'><p>아이디 찾기 | 비밀번호 찾기</p></div>
                <button onClick={this.login} className="login_btn">로그인</button>
                <div className='signin_btn'>회원가입</div>

                {/* <div className='typebox'>
                    <p>아이디 : {this.state.id}</p>
                    <p>비밀번호 : {this.state.pw}</p>
                </div> */}
            </div>
        );
    }
}

export default Login;