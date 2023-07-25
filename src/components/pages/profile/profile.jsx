import delSvg from '../../../assets/delete.svg'
import addSvg from '../../../assets/add.svg'

import './profile.css';

export const Profile = (props) => {
    return (
        <div>
        	<div id="fixed-container">
		<div id="main-container">
			<form id="forma2">
				<div id="main-container-info">
					<h1 id="hh">Личная информация</h1>
					<div id="login">
						<label id="login-label">Логин</label>
						<input type="text" id="login-input"/>
					</div>
					<div id="email">
						<label id="email-label">Email</label>
						<input type="email" id="email-input"/>
					</div>
					<div id="password">
						<label id="password-label">Пароль</label>
						<input type="password" id="password-input" />
					</div>
				</div>
				<div id="main-container-button">
					<button type="submit" id="main-container-button-button">Сохранить</button>
				</div>
			</form>
		</div>
		<div id="right-container">
			<div id="right-container-top">
				<p id="right-container-top-p">Ваши категории</p>
				<div id="right-container-top1">
					Название категории
					<button>
						<img id="delete-icon" src={delSvg}/>
						{/*<img id="delete-icon-night" src="img/delete-icon-night1.svg"/>*/}
					</button>
					
				</div>
			</div>
			<div id="right-container-bottom">
				<p id="right-container-bottom-p">Все категории</p>
				<div id="right-container-bottom1">
					Название категории
					<button>
						<img id="stud-bilet-logo" src={addSvg} />
					</button>
				</div>
				<div id="right-container-bottom2">
					Название категории
					<button>
						<img id="stud-bilet-logo" src={addSvg} />
					</button>
				</div>
			</div>
		</div>
	</div>
        </div>
    );
}