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
