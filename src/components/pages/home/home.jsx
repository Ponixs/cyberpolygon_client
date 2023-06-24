import $api from '../../../http/api'
import './home.css'
import { SERVER_PATHS } from '../../../utils/serverUrls'
export const HomePage = () => {
  return (
    <>
      HomePage
      <div onClick={() => $api.get(SERVER_PATHS.getUsers(1)).then((res) => console.log(res)).catch(err => console.log(err))}>TRY TO SEND REQUEST FOR TEST API</div>
    </>
  )
}