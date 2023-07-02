import { Requests } from './Requests/Requests'
import { Users } from './Users/Users'
import { Unusers } from './Unusers/Unusers'
import './users.css'
import { useEffect, useState } from 'react'
import api from '../../../../http/api'

export const ADMUsers = () => {
    /*const [requestsData, setRequestsData] = useState([
        { id: 1, name: "Стас Феоктистов", category: "Web" },
        { id: 2, name: "Стас Феоктистов", category: "Web" },
    ]);
    const [usersData, setUsersData] = useState([
        { id: 1, name: "Глеб", nickname: "Gleb", email: "gleb@gmail.com", password: "12345321", surname: "surname", categories: [], studentCard: "img" },
        { id: 2, name: "Стас", nickname: "Gleb", email: "gleb@gmail.com", password: "12345321", surname: "surname", categories: [], studentCard: "img" },
        { id: 3, name: "Другой Стас", nickname: "Gleb", email: "gleb@gmail.com", password: "12345321", surname: "surname", categories: [], studentCard: "img" }
    ]);
    const [unusersData, setUnusersData] = useState([
        { id: 2, name: "Стас Феоктистов", email: "viln1337@mail.ru", category: "Web" },
    ]);

    useEffect(() => {
        const fetchData = async () => {
            // const newUsers = api.get('new-users');
            // const users = api.get('users');
            // const unusersData = api.get('not-users');

            const newUsers = new Promise((res, rej) => {
                setTimeout(res, 1000, [
                    { id: 1, name: "Стас Феоктистов", category: "Web" },
                    { id: 2, name: "Стас Феоктистов", category: "Web" },
                    { id: 3, name: "Стас Феоктистов", category: "Web" },
                    { id: 4, name: "Стас Феоктистов", category: "Web" },
                ])
            })
            const users = new Promise((res, rej) => {
                setTimeout(res, 3000, [
                    { id: 1, name: "Глеб", nickname: "Gleb", email: "gleb@gmail.com", password: "12345321", surname: "surname", categories: [], studentCard: "img" },
                    { id: 2, name: "Стас", nickname: "Gleb", email: "gleb@gmail.com", password: "12345321", surname: "surname", categories: [], studentCard: "img" },
                    { id: 3, name: "Другой Стас", nickname: "Gleb", email: "gleb@gmail.com", password: "12345321", surname: "surname", categories: [], studentCard: "img" },
                    { id: 4, name: "Глеб", nickname: "Gleb", email: "gleb@gmail.com", password: "12345321", surname: "surname", categories: [], studentCard: "img" },
                    { id: 5, name: "Стас", nickname: "Gleb", email: "gleb@gmail.com", password: "12345321", surname: "surname", categories: [], studentCard: "img" },
                    { id: 6, name: "Другой Стас", nickname: "Gleb", email: "gleb@gmail.com", password: "12345321", surname: "surname", categories: [], studentCard: "img" }

                ])
            })
            const unusersData = new Promise((res, rej) => {
                setTimeout(res, 5000, [
                    { id: 2, name: "Стас Феоктистов", email: "viln1337@mail.ru", category: "Web" },
                    { id: 4, name: "Стас Феоктистов", email: "viln1337@mail.ru", category: "Web" },
                ])
            })


            Promise.all([newUsers, users, unusersData])
                .then((data) => {
                    setRequestsData(data[0]);
                    setUsersData(data[1]);
                    setUnusersData(data[2]);
                })
                .catch((err) => console.log(err))
        };

        fetchData();
    }, []);*/

    return (
        <>
            <div className="admin">
                <Requests  /> {/*data={requestsData}*/}
                <Users /> {/*data={usersData}*/}
                <Unusers /> {/*data={unusersData} */}
            </div>
        </>
    )
}