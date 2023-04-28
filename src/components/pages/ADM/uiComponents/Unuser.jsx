import delSvg from '../../../../assets/delete.svg'
import { ADMUsers } from '../../../../services/ADMService/ADMUsers';

export const Unuser = (props) => {
    return (
        <div className="user_reg">
            <div className="user_data">
                <div className="stud_ticket">
                    <input type="file" />
                    <p>Студенческий билет</p>
                </div>
                <div className="user_reg_data">
                    <div className="name_surname">
                        <div className="name_surname_p">Имя Фамилия:</div>
                        <div className="name_input">{props.data.name}</div>
                    </div>
                    <div className="email">
                        <div className="email_p">Email:</div>
                        <div className="email_input">{props.data.mail}</div>
                    </div>
                    <div className="categoria">
                        <div className="categoria_p">Категория:</div>
                        <div className="categoria_input">{props.data.category}</div>
                    </div>
                </div>
            </div>
            <div className="reg_buttons">
                <div className="reg_delite"><button>
                    <img src={delSvg} alt="" className="L_Trash" />
                </button></div>
                <div className="reg_aply" onClick={() => ADMUsers.verifyUser(props.data)}><button>Добавить</button></div>
            </div>
        </div>
    );
}