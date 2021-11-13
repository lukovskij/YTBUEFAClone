import {atom, selector, selectorFamily} from 'recoil'

export const errorsState = atom({
	key: 'error',
	default: ''
})
