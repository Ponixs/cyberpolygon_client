import editSvg from '../../../../assets/edit.svg'
import delSvg from '../../../../assets/delete.svg'

export const Task = (props) => {
    return (
        <>
            {/* класс TASK нужен для работы приложения. с ним не эксперементируем. но в целом можно задавать ему стили если сильно хочется (но я не советую) */}
            <div id="bottom-container-body" className='TASK' taskid={props.data.id}>
                <p id="bottom-container-body-nazv">{props.data.name} </p>
                <p>{props.data.count} баллов</p>
                <div id="bottom-container-body-icons">
                    {/* класс EDITBTN нужен для работы приложения. с ним не эксперементируем. но в целом можно задавать ему стили если сильно хочется (но я не советую) */}
                    <img className='EDITBTN' taskid={props.data.id} id="edit-icon" src={editSvg} alt="изменить" />
                    {/* класс DELETEBTN нужен для работы приложения. с ним не эксперементируем. но в целом можно задавать ему стили если сильно хочется (но я не советую) */}
                    <img className='DELETEBTN' taskid={props.data.id} id="delete-icon2" src={delSvg} alt="удалить" />
                </div>
            </div>
        </>
    );
}