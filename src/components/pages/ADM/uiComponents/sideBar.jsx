import './SideBar.css'
import homeIco from '../../../../assets/main.svg'
import ratingIco from '../../../../assets/rating.svg'
import tasksIco from '../../../../assets/tasks.svg'
import profileIco from '../../../../assets/profile.svg'
import admTasksIco from '../../../../assets/admTasks.svg'
import admReqIco from '../../../../assets/request.svg'
import admUsersIco from '../../../../assets/users.svg'
import admUnusersIco from '../../../../assets/Unusers.svg'
import { Link } from 'react-router-dom'
import { PATHS } from '../../../../utils/urls'

export const ADMSideBar = () => {
    let userIsAdmin = true;

    return (
        <nav className="menu_admin">
            <ul className='menu_admin_nav'>
                <li>
                    <Link to={PATHS.home} >
                        <i className='fas fa-home'>
                            <img src={homeIco} alt="" />
                        </i>
                        <span className='nav-item'>Главная</span>
                    </Link>
                </li>
                <li>
                    <Link to={PATHS.rating}>
                        <i className='fas fa-rating'>
                            <img src={ratingIco} alt="" />
                        </i>
                        <div className='nav-item'>Рейтинг</div>
                    </Link>
                </li>
                <li>
                    <Link to={PATHS.tasks}>
                        <i className='fas fa-home'>
                            <img src={tasksIco} alt="" />
                        </i>
                        <span className='nav-item'>Задания</span>
                    </Link>
                </li>
                <li>
                    <Link to={PATHS.profile}>
                        <i className='fas fa-home'>
                            <img src={profileIco} alt="" />
                        </i>
                        <span className='nav-item'>Профиль</span>
                    </Link>
                </li>
                {userIsAdmin &&
                    <div>
                        <li>
                            <Link to={PATHS.adminTasks}>
                                <i className='fas fa-home'>
                                    <img src={admTasksIco} alt="" />
                                </i>
                                <span className='nav-item'>Администрация заданий</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={PATHS.adminRequests}>
                                <i className='fas fa-home'>
                                    <img src={admReqIco} alt="" />
                                </i>
                                <span className='nav-item'>Заявки на категории</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={PATHS.adminUsers}>
                                <i className='fas fa-home'>
                                    <img src={admUsersIco} alt="" />
                                </i>
                                <span className='nav-item'>Список пользователей</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={PATHS.adminUnusers}>
                                <i className='fas fa-home'>
                                    <img src={admUnusersIco} alt="" />
                                </i>
                                <span className='nav-item'>Новые пользователи</span>
                            </Link>
                        </li>
                    </div>


                }
            </ul>
        </nav>
    )
}