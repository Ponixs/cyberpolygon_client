import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import taskDataManager from '../../../../../dataManagers/tasks/taskDataManager';
import { PATHS } from '../../../../../utils/urls';
import { Task } from '../../uiComponents/Task';
import { AddTask } from '../AddTask/AddTask';
import { useSnackbar } from '../../../../../customHooks/useSnackbar';
import { useModal } from '../../../../../customHooks/useModal';
import loopSvg from '../../../../../assets/loop.svg'


export const MyTasks = (props) => {
    const [task, setTask] = useState({});
    const navigate = useNavigate()
    const delFieldRef = useRef(null)
    const [EditForm, showEditForm] = useModal();
    const [DeleteModal, showDeleteModal] = useModal();
    const [ErrorSnackbar, showErrorSnackbar] = useSnackbar();

    const clickHandler = (e) => {
        const taskId = e.target.getAttribute("taskid");
        if (taskId === null) return;

        if (e.target.className.includes("EDITBTN")) {
            /* тут логика где мы показываем модалочку с формой для изменения */
            taskDataManager.getById(taskId)
                .then(taskData => {
                    setTask(taskData);
                    showEditForm();
                })
                .catch((err) => showErrorSnackbar(err.message))
        }
        else if (e.target.className.includes("DELETEBTN")) {
            /* тут логика где мы показываем модалочку для удаления */
            taskDataManager.getById(taskId)
                .then(taskData => {
                    setTask(taskData);
                    showDeleteModal();
                })
                .catch((err) => showErrorSnackbar(err.message))
        }
        else if (e.target.className.includes("TASK")) {
            /* тут логика где мы показываем пользователю страничку с задачей */
            navigate(`${PATHS.tasks}/${taskId}`);
        }
    }

    const handleDeleteConfirmBtnClick = () => {
        if (task.title === delFieldRef.current.value) {
            /** delete task */
            taskDataManager.delete(task.id)
                .then(() => setTask({}))
                .catch((err) => showErrorSnackbar(err.message))

        } else {
            /* make input border red/orange/any color */
        }
    }

    const tasksData = props.data
        .map(t => <Task data={t} key={t.id} />);

    return (
        <div id="bottom-container">
            <div id="bottom-container-header">
                <p>Задания</p>
                <div id="bottom-container-header-search">
                    <input type="text" id="bottom-container-header-search-input" />
                    <img id="loop-logo" src={loopSvg} alt="поиск" />
                </div>
            </div>
            <div className="listener" onClick={clickHandler}>
                {tasksData}
            </div>
            <EditForm>
                <AddTask taskData={task} />
            </EditForm>
            <DeleteModal title={"Вы пытаетесь удалить задачу"}>
                <p>Введите <b>{task.title}</b> в поле ниже для подтверждения удаления</p>
                <p>Обратите внимание, удаление невозможно отменить</p>
                <input ref={delFieldRef} type="text"></input>
                <button onClick={handleDeleteConfirmBtnClick}>Подтвердить</button>
            </DeleteModal>
            <ErrorSnackbar>
                Произошла ошибка. Пожалуйста попробуйте позже.
            </ErrorSnackbar>
        </div>
    );
}