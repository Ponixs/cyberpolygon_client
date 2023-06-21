import $api from "../../http/api";
import { useUser } from "../../store/userStore";


class UserDataManager {
  constructor() {
    this.state = useUser.getState();
  }

  
}


const userDataManager = new UserDataManager();
export default userDataManager