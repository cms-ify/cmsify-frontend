import htmlFlagMapper from './html-flag-mapper.js'
import { cmsifyGetHtmlFlags } from 'cmsify-utils'

const build = async (isCMS) => {
    console.log(`CMSIFY: build ${(isCMS ? 'cms' : 'frontend')}`)
    const flags = cmsifyGetHtmlFlags(htmlFlagMapper)
    for(let flag of flags) {
        console.log(flag)
        if(isCMS) await flag.ConvertEditorHTML()
        else await flag.ConvertHTML()
    }
}

export default build