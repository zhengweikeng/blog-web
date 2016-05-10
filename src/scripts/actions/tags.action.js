import {SELECTION_YEAR} from '../config/mutation.type'

function makeAction (type) {
  return ({dispatch}, ...args) => dispatch(type, ...args)
}

const selectYear = makeAction(SELECTION_YEAR)

export {selectYear}