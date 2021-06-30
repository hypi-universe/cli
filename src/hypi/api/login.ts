import AxiosConnection from '../axios-alpha'

const hypiLogin = async (email: string, password: string) => {
  let response
  try {
    response = await AxiosConnection.getAxios().post('/auth/login', {
      email: email,
      password: password,
    })
    const data = await response.data

    if (!data.data || data.data.errorCode) {
      return {error: 'Invalid email or password'}
      // this.error(response.data.data.errorCode + ' : ' + response.data.data.errorMsg)
    }
    return data.data
  } catch (error) {
    return {error: error}
  }
}
export default hypiLogin
