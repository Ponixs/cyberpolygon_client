import delSvg from '../../../../../assets/delete.svg'
import addSvg from '../../../../../assets/add.svg'

import { useRef } from 'react';
import { TaskService } from '../../../../../services/taskService';

export const AddTask = ({ taskData }) => {
    const spanRef = useRef(null);   
    console.log(10);
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

    let fileChange = () => {
        if (document.getElementById('file-input').files[0]){
            spanRef.current.innerHTML = document.getElementById('file-input').files[0].name;
            spanRef.current.style.fontSize = '14px';
            spanRef.current.style.marginRight = '10px';
            spanRef.current.style.color = '#0f963c';
        } else {
            spanRef.current.innerHTML = "Файл";
            spanRef.current.style.fontSize = '24px';
            spanRef.current.style.marginRight = '10px';
            spanRef.current.style.color = 'black';
        }
    }

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
                                <input id="task-left-container-top-name" type="text" name='' ref={titleRef} />
                                <input id="task-left-container-top-count" type="text" name='' ref={ptsRef} />
                            </div>
                            <textarea id='task-left-container-textarea' ref={descRef} ></textarea>
                            <textarea ref={ansRef} id="left-container-text-input" placeholder="Поле для ответа"></textarea>
                            <select ref={diffRef} id="selectID">
                                <option id="zero">Выбор сложности</option>
                                <option id="easy">Лёгкая</option>
                                <option id="normal">Нормальная</option>
                                <option id="hard">Сложная</option>
                            </select>
                            <select ref={catRef} id="selectID2">
                                <option id="zero">Выбор категории</option>
                                <option id="admin">Admin</option>
                                <option id="reverse">Reverse/PWN, Binary, Vuln</option>
                                <option id="stegano">Stegano</option>
                                <option id="ppc">Ppc</option>
                                <option id="forensic">Forensic</option>
                                <option id="crypto">Crypto</option>
                                <option id="web">Web</option>
                                <option id="network">Network</option>
                                <option id="osint">Osint</option>
                            </select>
                        </div>
                        <div id="task-right-container">
                            {/*<div id="task-right-container-header">
                                <div id="task-right-container-header-cont">.256sha</div>
                                <div id="task-right-container-header-icon">
                                    <img id="delete-icon" src={delSvg} alt="удалить" />
                                </div>
                            </div>*/}
                            <div id="task-right-container-body">
                                <textarea ref={solRef} id="task-right-container-body-text" placeholder="Решение"></textarea>
                                <div id="task-right-container-body-inputs">
                                    <div id="task-right-container-body-fileInput">
                                        <input ref={fileRef} id="file-input" type="file" name="file" accept="image/*" data-multiple-caption="{count} файлов выбрано" onChange={fileChange} multiple />
                                        <label className="form-label-file" htmlFor="file-input" id="reg-file-input">
                                            <span className='form-label-file-span' ref={spanRef}>Файл</span>
                                            <div id="stud-logo-container">
                                                <img id="stud-bilet-logo" src={addSvg} alt="добавить" />
                                            </div>
                                        </label>
                                    </div>

                                </div>

                            </div>
                            <div id="task-right-container-body-add">
                                <button id="button" type="submit">Добавить</button>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
}