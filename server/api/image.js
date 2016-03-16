import config from '../../config'
import 'isomorphic-fetch'

const dockerApiPath = config.dockerApiPath

export async function queryImageList(ctx) {
  const containerList = await fetch(`${dockerApiPath}/images/json?all=0`).then(
    function (response) {
      return response.json()
    }
  ).catch(function (err) {
    throw new Error(err)
  })
  return containerList
}

export async function queryImageInfo(ctx) {
  const param = ctx.request.body
  const imageInfo = await fetch(`${dockerApiPath}/images/${param.name}/json`).then(
    function (response) {
      return response.json()
    }
  ).catch(function (err) {
    throw new Error(err)
  })
  return imageInfo
}

export async function createContainer(ctx) {
  const param = ctx.request.body
  const container = param.container
  const data = JSON.stringify(container)
  console.log(data)
  const response = await fetch(`${dockerApiPath}/containers/create?name=${container.Name}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'content-length': data.length
    },
    body: data
  }).then(
    function (response) {
      return response.json()
    }
  ).catch(function (err) {
    throw new Error(err)
  })
  return response
}
