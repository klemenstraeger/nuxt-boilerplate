export default defineEventHandler(async (_event) => {
  logger.info("Hello Nitro")
  return "Hello Nitro"
})
