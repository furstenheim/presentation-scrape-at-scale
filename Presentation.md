## Scraping at scale

## Plan

* Scraping with python
* What is a chrome extension
* Scraping with a chrome extension
* Chrome extensions inner workings
* From extension to server
* Next steps

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
