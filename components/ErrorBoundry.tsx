import React,{ ReactNode } from 'react'
import {ErrorBoundary, FallbackProps} from 'react-error-boundary'
import { Pressable, Text, View } from 'react-native'

function ErrorFallback({error, resetErrorBoundary}: FallbackProps) {
  return (
    <View style={{justifyContent: 'center', height:'100%', alignItems:'center'}}>
      <Text>Something went wrong:</Text>
      <Text>{error.message}</Text>
      <Pressable onPress={resetErrorBoundary}><Text>Try again</Text></Pressable>
    </View>
  )
}

const ErrorBoundaryComponent = ({children}: {children: ReactNode}) => {
	return (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
  >
    {children}
  </ErrorBoundary>
	)
}

export default ErrorBoundaryComponent