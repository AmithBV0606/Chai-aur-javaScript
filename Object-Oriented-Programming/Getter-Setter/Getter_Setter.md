## Getters and Setters

`get - The "get" syntax binds an object property to a function that will be called when that property is looked up`.

`set - The "set" syntax binds an object property to a function to be called when there is an attempt to set that property.`

#### In JavaScript, there are two kinds of object properties:

1) Data properties : 

    Here's an example of data property that we have been using in the previous tutorials.

    ```
    const student = {

        // data property
        firstName: 'Monica';
    };
    ```

2) Accessor Property : 

    In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:

    - `get` - to define a getter method to get the property value

    - `set` - to define a setter method to set the property value