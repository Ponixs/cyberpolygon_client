import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loopSvg from '../../../../../assets/loop.svg'
import { useModal } from '../../../../../customHooks/useModal';
import { useSnackbar } from '../../../../../customHooks/useSnackbar';
import { TasksService } from '../../../../../services/tasksService';
import { Task } from '../../uiComponents/Task';
import { AddTask } from '../AddTask/AddTask';

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
            TasksService.getTask(taskId)
                .then(taskData => {
                    setTask(taskData);
                    showEditForm();
                })
                .catch((err) => showErrorSnackbar(err.message))
        }
        else if (e.target.className.includes("DELETEBTN")) {
            /* тут логика где мы показываем модалочку для удаления */
            TasksService.getTask(taskId)
                .then(taskData => {
                    setTask(taskData);
                    showDeleteModal();
                })
                .catch((err) => showErrorSnackbar(err.message))
        }
        else if (e.target.className.includes("TASK")) {
            /* тут логика где мы показываем пользователю страничку с задачей */
            navigate(`/tasks/${taskId}`);
        }
    }

    const handleDeleteConfirmBtnClick = () => {
        if (task.title === delFieldRef.current.value) {
            /** delete task */
            setTask({})
        } else {
            delFieldRef.current.style.borderColor="#FF0000";
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