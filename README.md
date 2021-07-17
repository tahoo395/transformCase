# Introduction

We often need to convert cases like camelCase to kebab-case , PascalCase to snake_case and so on. because in some frontend or backend technologies have some restrictions in case naming. In this case , we can directly rename them. But the best idea would be set a package which would change the cases and this package does this !

# Demo

Let's see a quick demo . Now suppose , we want to convert camelCase to snake_case.

It's a piece of cake for this package . We don't need to say what type of case you are passing . It will detect that automatically . We have to pass just the word and in which case we wanna convert . Let's see in the code !

```js
// Node js example

let ct = require('case-transformer')

console.log(ct.transformCase('case-transformer','PascalCase')) // CaseTransformer

```

Isn't that cool?

Let's go into the depth !

# Depth

## **caseOf()**

In case-transformer , we have a function called caseOf() . As the name suggests, its work is to say what case of the word is . Like we have a word 'caseTransformer' . We are seeing that it is camelCase and it will also say it is camelCase . But if we can say that it is camelCase , why is this function provided . Because in some cases , we don't know what the word is . So if you don't know it how can we transform the case manually? That's why it is provided . The usage of this function is very easy !

```js
console.log(ct.caseOf('case-transformer')) // kebab-case
```

## **transformCase()**

It is probably the main function of the package . It does the conversion of case . For example , we need to convert camelCase to snake_case or kebab-case to PascalCase and so on. For this, we have to pass two parameters in the function which are the word and the case which you want to transform to. Let's see a quick example .

```js
console.log(ct.transformCase('camelCase','snake_case')) // camel_case

console.log(ct.transformCase('kebab-case','PascalCase')) // KebabCase
```

and I know you can implement all the examples like this.

