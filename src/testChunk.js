/**
 * @Name: 
 * @Description: 用来测试chunk打包
 * @Author: 刘燕保
 * @Date: 2021-12-30 20:25:57
 **/
import('./branch').then(data => {
  console.log('展示data内容为：', data)
})

import('./branch2').then(data => {
  console.log('展示data内容为：', data)
})

const objective = '测试chunk打包'

console.log(objective)

// import('lib_remote/list').then(list => {
//   console.log('----- list is -----', list)
// })