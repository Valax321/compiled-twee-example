# Compiled Twee Example

An example project showing an extremely basic setup for writing twine games in the text-based twee format, which can be compiled into a playable game with a tool like extwee.

The Twine editor is a cool tool, but it doesn't play well with version control for us freaks who insist on keeping anything remotely text-based in git. With this workflow, a twine project can be stored in

## Usage

To build the project:
```
npm run build
```

To test the project in the browser:
```
npm run test
```

## Improvements/TODO

- Find a way to hot reload the twee file with vite when changes are detected.
- Find how to enable the debugging functions in chapbook for test builds.
- Add better error handling/robustness to the compile script.
- Parameterise the compile script (use a custom config file to specify input file/story format).
- Story format/twee syntax highlighting?
- Multi-twee file stories (#include? just append each file alphabetically? does twee care about the order of passage declarations?)

## License

`compile.js` is available under the Creative Commons CC0 license (public domain). The contents of `story.twee` are adapted from the Twine examples, check their licensing info if you want to use that (or simply use your own story).
