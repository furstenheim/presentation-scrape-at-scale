## Scraping at scale

## Plan

* Scraping
* Scraping with python
* What is a chrome extension
* Scraping with a chrome extension
* Chrome extensions inner workings
* From extension to server
* Next steps

## Scraping
Keep your data up to date O(n2)

## Scraping with python

### Pros
* Very mature libraries (mainly scrapy)
* Known language to data scientists

### Cons
* Lot of boilerplate repeated across projects
* It cannot execute JS
* Big entry barrier for non tech people


## Chrome extensions

Add functionality to the browser.

Examples:

* nCage (very useful at work)
* webscraper (show example of scraping)

## Scraping with chrome extensions

### Pros
* Low entry barrier for non tech people
* It executes JS

### Cons
* Extension do not work server side
* Most hated language amongst data scientist

## Chrome extension at work
(Show various pages:
context menu,
dev tools menu,
inspect dev tools)
A chrome extension consists on several JS contexts (mention JSSpain)
that access some window.
They all communicate with the background page.
Webscraper
Devtools page -> background -> context page
context page -> background -> devtools

## Webscraper server
Devtools -> library API
Background page -> Node.js
Context page -> ¿?

### Context page:
Important to have a different context from browser (mainly to avoid variable collision and security problems)
Needs access to DOM
Code has to be (mostly) transferable from webscraper

Welcome: jsdom. A pure js implementation of DOM and HTML standards.

### Next steps
Proper error propagation.
Chrome headless


# Warfare stories

## Webscraper code
### The good parts
Very well organized
Properly tested
55K LOC

### The bad parts
Created in 2013, latest commit on 2014.
No bundle: all files are loaded one by one. For all the different scripts.
Abuse of global variables: window is used as container to access variables.

    var selector = window[selectorKey]


No terminal test runner: own test runner in the browser

## The refactor

Final aim:
contentPageEvents <---- Background page <---- Devtools Page (user)
   |              -----> (events)
   |
   > (window, document, $), callback
contentPageFunction
   < (fake window, fake document, fake $)
   |
   |
Node.js background page
   <
   |
   |
   Library API

## Refactor loop
Run tests.
Refactor some part.
Fix tests

## Refactor steps
 * browserify
 * karma.js
 * standard.js (necessary to identify  most global variables)
 * Identify dependency tree
 * pass window, document, jquery accross all dependencies
 * Isomorphic tests
