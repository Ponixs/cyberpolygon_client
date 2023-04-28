import delSvg from '../../../../assets/delete.svg'
import { ADMUsers } from '../../../../services/ADMService/ADMUsers';

export const User = (props) => {
    return (
        <div className="users_user">
            <div className="user_name">{props.data.name}</div>
            <div className="user_delite" onClick={() => ADMUsers.delUser(props.data.id)}><button>
                <img src={delSvg} alt="" className="L_Trash" />
            </button></div>
        </div>
    );
}