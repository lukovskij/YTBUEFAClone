import React from 'react'
// @ts-ignore
import SnackBar from 'react-native-snackbar-component'

import { View, Text } from 'react-native'
import { useRecoilState, useRecoilValue } from 'recoil'
import { errorsState } from '../atoms/Errors'

const SnackbarContainer = () => {
	const [err, setErr] = useRecoilState(errorsState)
	return (
		<SnackBar backgroundColor={'#ff0000'} accentColor={'yellow'} visible={err?.length} textMessage={err} actionHandler={() => setErr('')} actionText="ok"/>
	)
}

export default SnackbarContainer