import { Link } from "react-router-dom"
import { PATHS } from '../../utils/urls'
import brandSvg from '../../assets/brand.svg'
import underlineSvg from '../../assets/underline.svg'
import { useUser } from '../../store/userStore'
import { useMode } from "../../customHooks/useTheme"
import './header.css'


export const Header = () => {
    const userId = useUser.getState().id;
    const userRole = useUser.getState().role;
    const toggleMode = useMode('dark')


    return (
        <header>
            <div className="menu">
                <div className="menu_image"><img src={brandSvg} alt="logoStolen(" /></div>
                <div className="menu_items">
                    <div className="menu_button">
                        <div id="main"><Link to={PATHS.home} className="menu_item">Главная</Link></div>
                        <div id="main_1"><img src={underlineSvg} alt="" /></div>
                    </div>
                    <div className="menu_button" >
                        <div id="profile"><Link to={PATHS.tasks} className="menu_item">Задания</Link></div>
                        <div id="profile_1"><img src={underlineSvg} alt="" /></div>
                    </div>
                    <div className="menu_button">
                        <div id="materials"><Link to={PATHS.materials} className="menu_item">Материалы</Link></div>
                        <div id="materials_1"><img src={underlineSvg} alt="" /></div>
                    </div>
                    <div className="menu_button">
                        <div id="exersise"><Link to={userId ? (userRole === 'admin' ? PATHS.admin : PATHS.profile) : PATHS.login} className="menu_item">Профиль</Link></div>
                        <div id="exersise_1"><img src={underlineSvg} alt="" /></div>
                    </div>
                    <div className="menu__togle-square" onClick={toggleMode}>
                        <div id='change' className="menu__togle" ></div>
                    </div>
                </div>
            </div>
            <nav>
                <div className="navbar">
                    <div className="container nav-container">
                        <input className="checkbox" type="checkbox" name="" id="" />
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>
                        <div className="menu-items">
                            <div className="menu-items-item"><li><Link to={PATHS.home}>Главная</Link></li></div>
                            <div className="menu-items-item"><li><Link to={PATHS.tasks}>Задания</Link></li></div>
                            <div className="menu-items-item"><li><Link to={PATHS.materials}>Материалы</Link></li></div>
                            <div className="menu-items-item"><li><Link to={userId ? (userRole === 'admin' ? PATHS.admin : PATHS.profile) : PATHS.login}>Профиль</Link></li></div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}