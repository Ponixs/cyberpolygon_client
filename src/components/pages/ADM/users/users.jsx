import rejectSvg from '../../../../assets/reject.svg'
import addSvg from '../../../../assets/add.svg'
import loopSvg from '../../../../assets/loop.svg'
import delSvg from '../../../../assets/delete.svg'
import './users.css'
import { Requests } from './Requests/Requests'
import { Users } from './Users/Users'
import { Unusers } from './Unusers/Unusers'

export const ADMUsers = () => {

    let RequestsData = [
        { id: 1, name: "Стас Феоктистов", category: "Web" },
        { id: 2, name: "Стас Феоктистов", category: "Web" },
    ];

    let UsersData = [
        { id: 1, name: "Глеб", nickname: "Gleb", email: "gleb@gmail.com", password: "12345321", surname: "surname", categories: [], studentCard: "img" },
        { id: 2, name: "Стас", nickname: "Gleb", email: "gleb@gmail.com", password: "12345321", surname: "surname", categories: [], studentCard: "img" },
        { id: 3, name: "Другой Стас", nickname: "Gleb", email: "gleb@gmail.com", password: "12345321", surname: "surname", categories: [], studentCard: "img" }
    ];

    let UnusersData = [
        { id: 2, name: "Стас Феоктистов", email: "viln1337@mail.ru", category: "Web" },
    ];

    return (
        <>
            <div className="admin">
                <Requests data={RequestsData} />
                <Users data={UsersData} />
                <Unusers data={UnusersData} />
            </div>
        </>
    )
}