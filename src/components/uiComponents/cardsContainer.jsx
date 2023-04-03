import { Card } from "./card"

export const CardsContainer = ({ data, fullInfoPath }) => {
    return (
        <div className="btl__cards">
            {data.map(item => (
                <Card id={item.id} title={item.title} description={item.description} points={item.points} fullInfoPath={fullInfoPath} key={item.id} />
            ))}
        </div>
    )
}