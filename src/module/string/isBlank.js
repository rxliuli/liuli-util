import { stringValidator } from '../../index'

/**
 * 判断一个字符串是否为空白的字符串
 * @param {String} str 字符串
 * @returns {Boolean} 是否为空字符串
 * @deprecated 已废弃，请使用 {@link stringValidator#isBlank}
 */
export function isBlank (str) {
  return stringValidator.isBlank(str)
}