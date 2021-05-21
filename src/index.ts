import {withNaming, NoStrictEntityMods} from '@bem-react/classname'
import {camelToDash} from 'camel-to-dash'

const bemClassName = withNaming({e: '__', m: '_', v: '-'})

const camelCaseModifiersToDash = (camelCaseModifiers: NoStrictEntityMods) => {
    let dashModifiers: {[key: string]: string | boolean} = {}

    Object.keys(camelCaseModifiers).forEach((camelCaseKey) => {
        let dashKey = camelToDash(camelCaseKey)

        dashModifiers[dashKey] = camelCaseModifiers[camelCaseKey] as string | boolean
    })

    return dashModifiers
}

const blockClassesConcat = (blockName:string, modifiers: NoStrictEntityMods, additionalClasses: string = ''):string => {

    let block = bemClassName(blockName),
        blockBemClasses = block(camelCaseModifiersToDash(modifiers)),
        blockClasses = `${blockBemClasses} ${additionalClasses}`.trim()

    return blockClasses
}

const elementClassesConcat = (blockName:string, element: string, modifiers: NoStrictEntityMods, additionalClasses: string = ''):string => {

    let block = bemClassName(blockName),
        blockBemClasses = block(element, camelCaseModifiersToDash(modifiers)),
        blockClasses = `${blockBemClasses} ${additionalClasses}`.trim()

    return blockClasses
}

export {
    bemClassName,
    blockClassesConcat,
    elementClassesConcat
}