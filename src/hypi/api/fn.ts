import AxiosConnection from '../axios-alpha'
import UserService from '../services/user-service'
import FormData from 'form-data'
import fs from 'fs'

export async function fenrirPush(name: string, file: string, makeLive: boolean = true) {
  const token = UserService.getUserConfig().sessionToken
  let response
  try {
    let form = new FormData()
    if (file.indexOf('/') != 0) {
      file = process.cwd() + '/' + file
    }
    if (!fs.existsSync(file)) {
      return {error: {response: {status: 400, data: `The file you\'re trying to push doesn\'t exist - ${file}`}}}
    }
    form.append('name', name)
    form.append('make_live', `${makeLive}`)
    form.append('file', fs.createReadStream(file)/* , {
      filename: file.split('/').pop(),
      filepath: file,
      contentType: 'application/octet-stream',
    } */)

    response = await AxiosConnection.getAxios().post('/fn/fenrir/deployment', form, {
      headers: form.getHeaders({'Authorization': token}),
    })
    return await response.data
  } catch (error) {
    return {error: error}
  }
}

export async function fenrirList() {
  const token = UserService.getUserConfig().sessionToken
  let response
  try {
    response = await AxiosConnection.getAxios().get('/fn/fenrir/deployment', {
      headers: {'Authorization': token},
    })
    return await response.data
  } catch (error) {
    return {error: error}
  }
}

export async function fenrirDeploy(name: string, version: string) {
  const token = UserService.getUserConfig().sessionToken
  let response
  try {
    let form = new FormData()
    form.append('name', name)
    form.append('version', version)
    response = await AxiosConnection.getAxios().put('/fn/fenrir/deployment', form, {
      headers: form.getHeaders({'Authorization': token}),
    })
    return await response.data
  } catch (error) {
    return {error: error}
  }
}

export async function fenrirInvoke(
  functionName: string | undefined,
  file: string | undefined,
  method: string | undefined,
  version: string | undefined,
  args: Map<String, String>,
  env: Map<String, String>,
  namespace: string | undefined,
) {
  const token = UserService.getUserConfig().sessionToken
  let response
  try {
    const data = {
      namespace: namespace, //normally store instance ID, optional - inferred from token
      'function': functionName,
      file: file,
      method: method,
      version: version,
      args: Object.fromEntries(args.entries()),
      env: Object.fromEntries(env.entries()),
    }
    response = await AxiosConnection.getAxios().post('/fn/fenrir/run', data, {
      headers: {'Authorization': token},
    })
    return await response.data
  } catch (error) {
    return {error: error}
  }
}

