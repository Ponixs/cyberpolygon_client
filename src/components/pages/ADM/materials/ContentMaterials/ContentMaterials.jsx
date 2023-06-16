import { ContentBlock } from "../../uiComponents/ContentBlock";

export const ContentMaterials = () => {

    const materials = 
        [{id: 1, articleTitle: "Title1", articleDescript: "Description1"},
        {id: 2, articleTitle: "Title2", articleDescript: "Description2"}];

    const onEditButtonClick = () => {
        /**
         * нужно отобразить форму для изменения материала (модальное окно было бы удобно)
         * при отправке формы проверить ее и сделать пут запрос на сервер
         */
    }
    const onDeleteButtonClick = () => {
        /**
         * отображаем модальное окно с полем куда нужно вписать название задачи для ее удаления
         * (делаем так как сделано на гитхабе при удалении репозитория)
         * отправляем delete запрос на сервер
         */
    }
    const onGoToButtonClick = () => {
        /**
         * просто показываем страницу с задачей
         */
    }

    return (
        <div className="content__materials">
            <div className="content__first-block">
                <div className="content__title">
                    Материалы
                </div>

            <input type="text" className="content__search" />

            </div>
            <div className="content__second_block">
                {materials.map(material => (<ContentBlock data={material} key={material.id}/>))}
            </div>
        </div>
    );
}
