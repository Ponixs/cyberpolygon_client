import testDataManager from "./testDataManager"
import { useTestState } from "./testState"


export const FirstComponent = () => {
  const state = useTestState(state => state.state_1)

  return (
    <div onClick={testDataManager.change_1}>
      {state.map(elem => <blockquote key={elem}>text: {elem}</blockquote>)}
    </div>
  )
}