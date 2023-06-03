import loopSvg from '../../../../../assets/loop.svg'
import { User } from '../../uiComponents/User';

export const Users = (props) => {

    let UserElements = props.data.map(d => <User data={d} key={d.id}/>);
    return (
        <div className="users_users">
            <div className="admin_users">
                <div className="users_tittle">
                    <div className="tittle_p">Пользователи</div>
                    <div className="users_search">
                        <div className="search_input"><input type="text" /></div>
                        <div className="img_search"><button><img src={loopSvg} alt="" /></button>
                        </div>
                    </div>
                </div>
                {UserElements}
            </div>
        </div>
    );
}