import { Link } from 'react-router-dom'
import { PATHS } from '../../../../utils/urls'

export const ADMSideBar = () => {
    let userIsAdmin = true;

    return (
        <div className="menu_admin">
            <Link to={PATHS.home} className="home">
                <div className="menu_ad_item">Главная</div>
            </Link>
            <Link to={PATHS.tasks} className="quest">
                <div className="menu_ad_item">Задания</div>
            </Link>
            <Link to={PATHS.profile} className="profile">
                <div className="menu_ad_item">Профиль</div>
            </Link>

            {userIsAdmin &&
                <Link to={PATHS.adminTasks} className="admTasks">
                    <div className="menu_ad_item">Администрация заданий</div>
                </Link>
            }

            {userIsAdmin &&
                <Link to={PATHS.adminRequests} className="admRequests">
                    <div className="menu_ad_item">Заявки на категории</div>
                </Link>
            }

            {userIsAdmin &&
                <Link to={PATHS.adminUsers} className="admUsers">
                    <div className="menu_ad_item">Список пользователей</div>
                </Link>
            }

            {userIsAdmin &&
                <Link to={PATHS.adminUnusers} className="admUnusers">
                    <div className="menu_ad_item">Новые пользователи</div>
                </Link>
            }

        </div>
    )
}