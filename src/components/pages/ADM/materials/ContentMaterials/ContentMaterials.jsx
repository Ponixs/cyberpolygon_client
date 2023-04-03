import { ContentBlock } from "../../uiComponents/ContentBlock";

export const ContentMaterials = () => {

    const materials = 
        [{articleTitle: "Title1", articleDescript: "Description1"},
        {articleTitle: "Title2", articleDescript: "Description2"}];

    return (
        <div className="content__materials">
            <div className="content__first-block">
                <div className="content__title">
                    Материалы
                </div>

            <input type="text" className="content__search" />

            </div>
            <div className="content__second_block">
                {materials.map(material => (<ContentBlock data={material} />))}
            </div>
        </div>
    );
}
