import innet from 'innet'
import {State} from 'watch-state'
import getHTML from 'innet/utils/test/getHtml'
import renderElement from 'innet/utils/test/renderElement'

import portal from '.'

describe('portal', () => {
  test('simple', () => {
    const div = document.createElement('div')
    const element = renderElement(<div>test1<portal parent={div}>test2</portal></div>, {portal})
    expect(getHTML(element)).toBe('<div>test1</div>')
    expect(getHTML(div)).toBe('<div>test2</div>')
  })
  test('state', () => {
    const test1 = new State('foo')
    const test2 = new State('bar')
    const div = document.createElement('div')
    const element = renderElement(<div>{() => test1.value}{() => <portal parent={div}>{() => test2.value}</portal>}</div>, {portal})
    expect(getHTML(element)).toBe('<div>foo<!----><!----></div>')
    expect(getHTML(div)).toBe('<div>bar<!----></div>')

    test1.value = 'test1'
    expect(getHTML(element)).toBe('<div>test1<!----><!----></div>')
    expect(getHTML(div)).toBe('<div>bar<!----></div>')

    test2.value = 'test2'
    expect(getHTML(element)).toBe('<div>test1<!----><!----></div>')
    expect(getHTML(div)).toBe('<div>test2<!----></div>')
  })
})
