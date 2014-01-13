# Node.js Test

This is a simple test implementation of [another project](http://github.com/matheus23/School-Project).
The aim was to try out node.js and see how well it works compared to php.

Looking back, I should have probably started to use the [Jade Template Engine](http://jade-lang.com/), since
my code started to look like this:

````javascript
var html =
  ht.xhtml([
    ht.tag("head", u.includeFiles(reqFiles)),
    ht.tag("body", [
      u.stdBodyHeader("SecureShare"),
      ht.tag("center", genTable())
    ])
  ])
````

Using the functions:

````javascript
// Examples:
ht.tag("strong", "This text is bold.")
ht.tagA("strong", { style:"text-align: right;" }, "This is bold, right-aligned text.")
ht.sTagA("img", { src:"myImage.png" }) // This returns <img src="myImage.png" />
````

## Required Libraries:

### Express:

See http://expressjs.com
