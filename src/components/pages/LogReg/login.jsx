import { Link } from "react-router-dom";
import { useUser } from "../../../store/userStore";
import { AuthService } from "../../../services/authService";
import { useRef } from "react";
import { PATHS } from "../../../utils/urls";

export const Login = () => {
    const setUser = useUser.getState().setUser;
    const emailRef = useRef(null)
    const passRef = useRef(null)

    const handleSubmit = () => {
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        AuthService.login(email, pass)
            .then(userData => {
                setUser(userData)
                /* redirect logic */
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div id="fixed-container">
            <div id="form">
                <h1>Авторизация</h1>
                <label className="form-label">Email</label>
                <input ref={emailRef} className="normal-input" type="email" required size="40" placeholder="Введите Email..." />
                <label className="form-label">Пароль</label>
                <input ref={passRef} className="normal-input" type="password" required size="40" placeholder="Введите пароль..." />

                <button onClick={handleSubmit} className="reg-complete">Авторизоваться</button>
                <Link to={PATHS.register}>Еще не зарегестрирован? Зарегистрируйся!</Link>
            </div>
        </div>
    )
}
