export function getCurrentLocale(url) {
  // your code here. have fun!
  const locale = url.split('/')[1]
  return ( locale == "en" || locale == "zh-cn" ) ? locale : "en" 
}
