function log(ctx) {
  console.log(ctx.method, ctx.header.host + ctx.url)
}

export function loggerFunc() {
  return async function (ctx, next) {
    log(ctx)
    await next()
  }
}