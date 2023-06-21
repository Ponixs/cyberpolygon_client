import delSvg from '../../../../assets/delete.svg'
import { UserService } from '../../../../services/userService';

export const User = (props) => {
    return (
        <div className="users_user">
            <div className="user_name">{props.data.name}</div>
            <div className="user_delite" onClick={() => UserService.delUser(props.data.id)}><button>
                <img src={delSvg} alt="" className="L_Trash" />
            </button></div>
        </div>
    );
}