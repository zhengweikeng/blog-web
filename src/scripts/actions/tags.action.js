import mutationType from '../config/mutation.type'

function makeAction (type) {
  return ({dispatch}, ...args) => dispatch(type, ...args)
}

// const selectYear = ({dispatch}, year) => {
//   console.log(mutationType.SELECTION_YEAR)
//   debugger
//   dispatch(mutationType.SELECTION_YEAR, year)
// }

const selectYear = makeAction(mutationType.SELECTION_YEAR)

export {selectYear}