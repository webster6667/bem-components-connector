<p align="center" style="text-align:center">
    <img src="./readme/ilustration.svg" alt="drawing" width="100"/>
</p>

# bem-components-connector
helper functions for concat component bem classes
with external classes and modifiers

## Install

```
npm i bem-components-connector
```

## Use
```javascript
import {blockClassesConcat, elementClassesConcat, bemClassName} from 'bem-components-connector'
```

* **bemClassName**
default bem function
```javascript
import {bemClassName} from 'bem-components-connector'

const block = bemClassName('block'), //return function
      element = block('element', {small: false}), //return 'block__element'
      elementWithMod = block('element', {small: true}) //return 'block__element block__element_small'
```

* **blockClassesConcat**
helper function for concat external classes and internal bem classes for block,
and convert camelCase modifier to dash

```typescript jsx
import {blockClassesConcat} from 'bem-components-connector'

const MyComponent = ({
                        className = '',
                        xAlign = false                            
                   }) => {
    let blockClasses = blockClassesConcat('component', {xAlign}, className)

    return (<div className={blockClasses} />)
}

export default function () {
    
    return (<>
        <MyComponent xAlign={true}/> {/*return <div className='component component_x-align' /> */}
        <MyComponent xAlign={true} className={'additional-class'}/> {/*return <div className='component component_x-align' additional-class' /> */}
        <MyComponent /> {/*return <div className='component' /> */}
    </>)
    
}
```

* **elementClassesConcat**
helper function for concat external classes and internal bem classes for element,
and convert camelCase modifier to dash

```typescript jsx
import {elementClassesConcat, bemClassName} from 'bem-components-connector'

const block = bemClassName('block')

//...block component

const MyComponent = ({
                        className = '',
                        xAlign = false                            
                   }) => {
    let elementClasses = elementClassesConcat(block(),'element', {xAlign}, className)

    return (<div className={elementClasses} />)
}

export default function () {
    
    return (<>
        <MyComponent xAlign={true}/> {/*return <div className='block__element block__element_x-align' /> */}
        <MyComponent xAlign={true} className={'additional-class'}/> {/*return <div className='block__element block__element_x-align' additional-class' /> */}
        <MyComponent /> {/*return <div className='block__element' /> */}
    </>)
    
}
```

## Author
webster6667