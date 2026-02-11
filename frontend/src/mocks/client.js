import { simulateApiCall } from './utils'

export const createApiResponse = (data, message) => ({
  data,
  success: true,
  message,
})

export const mockApiCall = async (dataFn, errorMessage) => {
  try {
    const data = await simulateApiCall(dataFn(), errorMessage)
    return createApiResponse(data)
  } catch (error) {
    throw {
      message:
        error instanceof Error
          ? error.message
          : 'An error occurred',
      code: 'MOCK_ERROR',
    }
  }
}
