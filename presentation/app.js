require('reveal.js/lib/js/head.min.js')
const Reveal = require('reveal.js')
window.Reveal = Reveal
const hljs = require('reveal.js/plugin/highlight/highlight-origin.js')
require('reveal.js/plugin/highlight/highlight.js')
// Reveal assumes this is global
window.hljs = hljs
Reveal.initialize({
  postMessage: true,
  dependencies: [
    { src: 'resources/lib/reveal.js/plugin/markdown/marked.js' },
    { src: 'resources/lib/reveal.js/plugin/markdown/markdown.js' },
    { src: 'resources/lib/reveal.js/plugin/notes/notes.js', async: true },
    {
      src: 'plugin/highlight/highlight.js',
      async: true,
      callback: function () {
        hljs.initHighlightingOnLoad()
      }
    }
  ]
})
Reveal.addEventListener('ready', function () {
  Reveal.slide(99)
})
