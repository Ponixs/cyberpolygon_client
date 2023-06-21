import testDataManager from "./testDataManager"
import { useTestState } from "./testState"


export const SecondComponent = () => {
  const state = useTestState(state => state.state_2)
  
  return (
    <div onClick={testDataManager.change_2}>
      {state.map(elem => <blockquote key={elem}>text: {elem}</blockquote>)}
    </div>
  )
}