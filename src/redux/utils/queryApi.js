import 'isomorphic-fetch'

export default async function queryApi(action, param) {
  console.log(param)
  const result = await fetch(`/api?action=${action}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(param)
  }).then((response) => {
    return response.json()
  })
  return result
}
