import { useTestState } from "./testState"

class TestDataManager {
  constructor() {
    this.state = useTestState.getState();
  }

  change_1 = async () => {
    this.state.setState_1(Math.random())
  }

  change_2 = async () => {
    this.state.setState_2()
  }
}


const testDataManager = new TestDataManager();
export default testDataManager