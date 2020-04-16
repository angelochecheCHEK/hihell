import React from "react";

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.output = this.output.bind(this)
         this.state = {
             count: 0,
             count2: 0
         }
  
      this.output2 = this.output2.bind(this)
    }
  
    output(evt) {
      this.setState({count: this.state.count + evt})
      let proverka1 = this.state.count;
  
      if (proverka1 > 0) {
        let mai = document.getElementById("main2"); 
        let up = document.getElementById("signUpForm");
        let style = mai.style; 
        let upStyle = up.style;
  
        style.animationName = "showSignUp";
        style.transform = "translate(-50%,-50%) rotateY(180deg)";
  
        upStyle.animationName = "hideSignIn";
        upStyle.transform = "translate(-50%,-50%) rotateY(0deg)";
      }
  }
  
  output2(evt2) {
    this.setState({count2: this.state.count2 + evt2})
    let proverka2 = this.state.count2;
  
    if (proverka2 > 0) {
      let mai = document.getElementById("main2"); 
      let up = document.getElementById("signUpForm");
      let style = mai.style; 
      let upStyle = up.style;
  
      style.animationName = "hideSignUp";
      style.transform = "translate(-50%,-50%) rotateY(0deg)";
      upStyle.animationName = "showSignIn";
      upStyle.transform = "translate(-50%,-50%) rotateY(180deg)";
    }
  }
  
    render() {
      return (
            <div>
                <form onSubmit={this.props.loginMethod} id="messForm">

                    <div id="main2">
                        <label>Вход</label>
                            <input type="text" name="login" placeholder="Введите ваш логин" />
                            <input type="password" name="password" placeholder="Введите ваш пароль" />
                                <button id="signInBtn">Войти</button>
                        
                        <div id="frt">
                            <a href="#">Забыли пароль?</a>
                        </div>

                        <div id="signUpMsg">
                            Нет аккаунта? &#8201;
                            <a href="#" id="flipToSignUp" onClick={(evt) => this.output(1)}>
                                Зарегистрируйтесь
                            </a>
                        </div>

                    </div>

                    <div id="signUpForm">
                        <label>Регистрация</label>
                            <input type="text" name="loginReg" placeholder="Придумайте логин" />
                            <input type="password" name="passwordReg" placeholder="Теперь пароль" />
                            <input type="password" name="rePasswordReg" placeholder="Повторите пароль" />
                                <button id="signUpBtn">Начать!</button>
                        
                        <div id="signInMsg">
                            Есть аккаунт? &#8201;
                            <a href="#" id="flipToSignIn" onClick={(evt2) => this.output2(2)}>
                                Войдите
                            </a>
                        </div>                    
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;