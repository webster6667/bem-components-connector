import { NoStrictEntityMods } from '@bem-react/classname';
declare const bemClassName: import("@bem-react/classname").ClassNameInitilizer;
declare const blockClassesConcat: (blockName: string, modifiers: NoStrictEntityMods, additionalClasses?: string) => string;
declare const elementClassesConcat: (blockName: string, element: string, modifiers: NoStrictEntityMods, additionalClasses?: string) => string;
export { bemClassName, blockClassesConcat, elementClassesConcat };
