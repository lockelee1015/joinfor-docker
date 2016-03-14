import config from '../../config'
import 'isomorphic-fetch'

const dockerApiPath = config.dockerApiPath

export async function queryContainerList() {
  const containerList = await fetch(`${dockerApiPath}/containers/json?all=1`).then(
    function (response) {
      return response.json()
    }
  )
  return containerList
}

export async function startContainer(ctx) {
  const param = ctx.request.body
  const status = await fetch(`${dockerApiPath}/containers/${param.id}/start`, {
    method: 'POST'
  }).then(function (response) {
    return response.body
  }).catch(function (err) {
    throw new Error(err)
  })
  return status
}

export async function stopContainer(ctx) {
  const param = ctx.request.body
  const status = await fetch(`${dockerApiPath}/containers/${param.id}/stop`, {
    method: 'POST'
  }).then(function (response) {
    return response.body
  }).catch(function (err) {
    throw new Error(err)
  })
  return status
}

export async function restartContainer(ctx) {
  const param = ctx.request.body
  const status = await fetch(`${dockerApiPath}/containers/${param.id}/restart`, {
    method: 'POST'
  }).then(function (response) {
    return response.body
  }).catch(function (err) {
    throw new Error(err)
  })
  return status
}

export async function pauseContainer(ctx) {
  const param = ctx.request.body
  const status = await fetch(`${dockerApiPath}/containers/${param.id}/pause`, {
    method: 'POST'
  }).then(function (response) {
    return response.body
  }).catch(function (err) {
    throw new Error(err)
  })
  return status
}

export async function unpauseContainer(ctx) {
  const param = ctx.request.body
  const status = await fetch(`${dockerApiPath}/containers/${param.id}/unpause`, {
    method: 'POST'
  }).then(function (response) {
    return response.body
  }).catch(function (err) {
    throw new Error(err)
  })
  return status
}

export async function removeContainer(ctx) {
  const param = ctx.request.body
  const status = await fetch(`${dockerApiPath}/containers/${param.id}`, {
    method: 'DELETE'
  }).then(function (response) {
    return response.body
  }).catch(function (err) {
    throw new Error(err)
  })
  return status
}

export async function attachContainer(ctx) {
  const param = ctx.request.body
  const status = await fetch(`${dockerApiPath}/containers/${param.id}`, {
    method: 'DELETE'
  }).then(function (response) {
    return response.body
  }).catch(function (err) {
    throw new Error(err)
  })
  return status
}
