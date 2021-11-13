import React, {ReactNode} from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { View, Text } from 'react-native'
import { useSetRecoilState } from 'recoil'
import { errorsState } from '../atoms/Errors'

type Props = {
	children: ReactNode
}
const Loader = () => <View style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}><Text style={{fontWeight: 'bold'}}>loading</Text></View>

const SuspenseContainer = (props: Props) => {
	const setError = useSetRecoilState(errorsState)
	const myErrorHandler = (error: Error, info: {componentStack: string}) => {
	 setError(error.message)
 }
	return (
		<ErrorBoundary
			onError={myErrorHandler}
    	fallbackRender={() => <Loader/>}
  	>
			<React.Suspense fallback={<Loader/>}>{props.children}</React.Suspense>
		</ErrorBoundary>
	)
}

export default SuspenseContainer
