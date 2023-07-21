import { CmsifyHtmlFlag } from 'cmsify-utils'

class CmsifyText extends CmsifyHtmlFlag {
    constructor({ flagName, flagValue, htmlElement }) {
        super({ flagName, flagValue, htmlElement })
    }
    async ConvertHTML() {

    }
    async ConvertEditorHTML() {
        let text = this.htmlElement
        let input = document.createElement('input')
        input.value = text.innerHTML
        text.parentNode.appendChild(input)
        text.parentNode.removeChild(text)
    }
}

export default CmsifyText