// "XMLHttpRequest" (XHR) objects are used to interact with servers.

// You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.

// Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML.

const requestURL = 'https://api.github.com/users/AmithBV0606';

// XMLHttpRequest() : The constructor initializes an "XMLHttpRequest". It must be called before any other method calls.

const xhr = new XMLHttpRequest();

xhr.open('GET', requestURL); // New request opened.

// This function is used to track the request continuously.
xhr.onreadystatechange = function(){
    // The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in.
    console.log(xhr.readyState);
    
    if (xhr.readyState === 4) {
        console.log(this.responseText);
        let data = this.responseText;
        console.log(typeof data); // String

        // NOTE : Whenever we receive a response, that response will be in string format

        // In-order to convert data from string to object
        data = JSON.parse(this.responseText);
        console.log(typeof data);
        console.log(data.followers);
    }
}

xhr.send(); // Request sent.