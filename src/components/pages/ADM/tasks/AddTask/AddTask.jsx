import delSvg from '../../../../../assets/delete.svg'
import addSvg from '../../../../../assets/add.svg'
import { useRef } from 'react';
import { TaskService } from '../../../../../services/taskService';

export const AddTask = ({ taskData }) => {
    const ansRef = useRef(null);
    const diffRef = useRef(null);
    const catRef = useRef(null);
    const titleRef = useRef(null);
    const ptsRef = useRef(null);
    const descRef = useRef(null);
    const fileRef = useRef(null);
    const solRef = useRef(null);

    setTimeout(() => {
        if (catRef.current && taskData && Object.keys(taskData).length !== 0) {
            catRef.current.value = taskData.category;
            diffRef.current.value = taskData.difficulty;
            ptsRef.current.value = taskData.points;
            titleRef.current.value = taskData.title;
            descRef.current.value = taskData.description;
            ansRef.current.value = taskData.answer;
            solRef.current.value = taskData.solution;
            fileRef.current.files = taskData.file;
        }
    }, 0)

    const onFormSubmit = (e) => {
        e.preventDefault();

        let postData = {
            category: catRef.current.value,
            difficulty: diffRef.current.value,
            points: ptsRef.current.value,
            title: titleRef.current.value,
            description: descRef.current.value,
            answer: ansRef.current.value,
            solution: solRef.current.value,
            task: fileRef.current.files
        }

        TaskService.addTask(postData);
    }
    return (
        <div>
            <form id="forma" action="" method="post" name="forma" onSubmit={onFormSubmit}>
                <div id="central-top-container">
                    <div id="central-top-container-header">Добавить задание</div>
                    <div id="central-top-container-body">
                        <div id="task-left-container">
                            <div id="task-left-container-top">
                                <div id="task-left-container-top-name">
                                    <input type="text" name='' ref={titleRef} />
                                </div>
                                <div id="task-left-container-top-count">
                                    <input type="text" name='' ref={ptsRef} />
                                </div>
                            </div>
                            <div id="task-left-container-text">
                                <textarea ref={descRef} ></textarea>
                            </div>
                            <textarea ref={ansRef} id="left-container-text-input" placeholder="Поле для ответа"></textarea>
                            <select ref={diffRef} id="selectID">
                                <option id="zero">Выбор сложности</option>
                                <option id="one">1</option>
                                <option id="two">2</option>
                            </select>
                            <select ref={catRef} id="selectID2">
                                <option id="zero">Выбор категории</option>
                                <option id="one">1</option>
                                <option id="two">2</option>
                            </select>
                        </div>
                        <div id="task-right-container">
                            <div id="task-right-container-header">
                                <div id="task-right-container-header-cont">.256sha</div>
                                <div id="task-right-container-header-icon">
                                    <img id="delete-icon" src={delSvg} alt="удалить" />
                                </div>
                            </div>
                            <div id="task-right-container-body">
                                <textarea ref={solRef} id="task-right-container-body-text" placeholder="Решение"></textarea>
                                <div id="task-right-container-body-inputs">
                                    <div id="task-right-container-body-fileInput">
                                        <input ref={fileRef} id="file-input" type="file" name="file" accept="image/*" />
                                        <label className="form-label-file" htmlFor="file-input" id="reg-file-input">
                                            <span>Файл</span>
                                            <div id="stud-logo-container">
                                                <img id="stud-bilet-logo" src={addSvg} alt="добавить" />
                                            </div>
                                        </label>
                                    </div>
                                    <div id="task-right-container-body-add">
                                        <button id="button" type="submit">Добавить</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}