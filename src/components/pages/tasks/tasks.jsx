import { Categories } from "../../uiComponents/categories"
import { useTasks } from "../../../store/taskStore"
import { useUser } from "../../../store/userStore"
import { useEffect } from "react"
import { CardsContainer } from "../../uiComponents/cardsContainer"
import { PATHS } from "../../../utils/urls"
import "./tasks.css"


export const Tasks = () => {
    const [tasks, category] = useTasks(state => [state.tasks, state.category]);
    const { loadTasks, setCategory } = useTasks.getState();
    const userCategories = useUser(state => state.categories);

    function handleScroll() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        if (windowHeight + scrollTop >= documentHeight - 1 && tasks[category]?.nextPage !== null) {
            loadTasks();
        }
    }



    useEffect(() => {
        if (!tasks[category]?.data) loadTasks();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [category]);



    return (
        <>
            <div className="bodytasklist" >
                <div className="container">
                    <div className="btl__content">
                        <Categories categories={userCategories} setCategory={setCategory} />
                        <CardsContainer data={tasks[category]?.data || []} fullInfoPath={PATHS.aboutTask} />
                    </div>
                </div>
            </div>
        </>
    )
}