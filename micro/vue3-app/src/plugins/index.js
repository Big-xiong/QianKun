
export function scopedScssPlugins() {
  return {
    // 插件名称
    name: 'scopedScssPlugins',
    transform(src, id) {
      // if ((/\.vue$/).test(id)) {
      //   const code = src.replace(/b4e148ca/g,(match) => {
      //     return `${match}-vue`
      //   }) 
      //   // console.log(code)
      //   return { code }
      // };
      return src
    }
  }
}