export const picExists = (pics, pic) => {
  return !!pics.find(p => p.id === Number(pic.id))
}