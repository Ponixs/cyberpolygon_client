import rejectSvg from '../../../../assets/reject.svg'
import addSvg from '../../../../assets/add.svg'
import { UserService } from '../../../../services/userService';

export const Request = (props) => {
    return (
        <div className="user" id="user1">
            <div className="user_items">
                <div className="name"> {props.data.name} </div>
                <div className="category"> {props.data.category} </div>
                <div className="request_button">
                    <div className="button_plus" onClick={() => UserService.updateUser(props.data)}><button>
                        <img src={addSvg} alt="" className="L_Plus" />
                    </button></div>
                    <div className="button_minus" onClick={() => UserService.delUser(props.data.id)}><button>
                        <img src={rejectSvg} alt="" className="L_Minus" />
                    </button></div>
                </div>
            </div>
        </div>
    );
}