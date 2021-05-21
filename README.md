<p align="center" style="text-align:center">
    <img src="./ilustration.svg" alt="ilustration" width="100"/>
</p>

# bem-components-connector

> helper functions for concat component bem classes with external classes and modifiers

[![npm version](https://badge.fury.io/js/bem-components-connector.svg)](https://www.npmjs.com/package/bem-components-connector)

## Install

```
npm i bem-components-connector
```

## Initialization

```javascript
import {blockClassesConcat, elementClassesConcat, bemClassName} from 'bem-components-connector'
```

* **bemClassName**

default bem function
```javascript
import {bemClassName} from 'bem-components-connector'

const block = bemClassName('block'), //return function
element = block('element', {small: false}), //return 'block__element'
elementWithBooleanMod = block('element', {small: true}), //return 'block__element block__element_small',
elementWithTextMod = block('element', {size: 'xl'}) //return 'block__element block__element_size-xl'

```

* **blockClassesConcat**

Helper function for concat external classes and internal bem classes for block,
and convert camelCase modifier to dash

```typescript jsx
import {blockClassesConcat} from 'bem-components-connector'

const MyComponent = ({
                        className = '',
                        xAlign = false,
                        size = false
                    }) => {
    let blockClasses = blockClassesConcat('component', {xAlign, size}, className)

    return (<div className={blockClasses} />)
}

export default function () {

    return (<>
        <MyComponent xAlign={true}/> {/*return <div className='component component_x-align' /> */}
        <MyComponent size={'xl'} className={'additional-class'}/> {/*return <div className='component component_size-xl additional-class' /> */}
        <MyComponent /> {/*return <div className='component' /> */}
    </>)

}
```

* **elementClassesConcat**

Helper function for concat external classes and internal bem classes for element,
and convert camelCase modifier to dash

```typescript jsx
import {elementClassesConcat, bemClassName} from 'bem-components-connector'

const block = bemClassName('block')

const MyComponent = ({
                        className = '',
                        xAlign = false,
                        size = false
                    }) => {
    let elementClasses = elementClassesConcat(block(),'element', {xAlign, size}, className)

    return (<div className={elementClasses} />)
}

export default function () {

return (<>
            <MyComponent xAlign={true}/> {/*return <div className='block__element block__element_x-align' /> */}
            <MyComponent size={'xl'} className={'additional-class'}/> {/*return <div className='block__element block__element_size-xl additional-class' /> */}
            <MyComponent /> {/*return <div className='block__element' /> */}
        </>)
}
```

## If component will be packed

Create object with dynamic keys
```typescript jsx
import {blockClassesConcat} from 'bem-components-connector'

const MyComponent = ({
                        className = '',
                        modifiers = {}
                    }) => {
    let blockClasses = blockClassesConcat('component', modifiers, className)

    return (<div className={blockClasses} />)
}

export default function () {
    return (<>
            <MyComponent modifiers={{anyBooleanMod: true}} /> {/*return <div className='component component_any-boolean-mod' /> */}
            <MyComponent modifiers={{anyTextMod: 'success'}} className={'additional-class'}/> {/*return <div className='component component_any-text-mod-success additional-class' /> */}
            <MyComponent /> {/*return <div className='component' /> */}
    </>)
}
```


## Author

webster6667
