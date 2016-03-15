import {
  queryContainerList,
  startContainer,
  stopContainer,
  pauseContainer,
  unpauseContainer,
  removeContainer} from '../api/container'

import {
  queryImageList,
  queryImageInfo
} from '../api/image'

async function queryApiMiddleware(ctx, next) {
  if (ctx.path === '/api') {
    switch (ctx.query.action) {
    /**
     * container
     */
      case 'queryContainerList':// 获取容器列表
        ctx.body = await queryContainerList(ctx)
        break
      case 'startContainer':// 启动一个容器
        ctx.body = await startContainer(ctx)
        break
      case 'stopContainer':// 停止一个容器
        ctx.body = await stopContainer(ctx)
        break
      case 'puaseContainer':// 暂停一个容器
        ctx.body = await pauseContainer(ctx)
        break
      case 'unpauseContainer':// 恢复一个容器
        ctx.body = await unpauseContainer(ctx)
        break
      case 'removeContainer':// 删除一个容器
        ctx.body = await removeContainer(ctx)
        break

    /**
     * image
     */
      case 'queryImageList':// 获取镜像列表
        ctx.body = await queryImageList(ctx)
        break
      case 'queryImageInfo'://获取镜像信息
        ctx.body = await queryImageInfo(ctx)
        break
      default :
        ctx.body = 'action not found'
        break
    }
  } else {
    await next()
  }
}

export default queryApiMiddleware
