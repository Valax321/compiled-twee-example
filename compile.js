import { compileTwine2HTML, parseTwee, parseStoryFormat } from 'extwee';
import { readFile, writeFile, mkdir } from 'node:fs/promises';

/**
 * Creates a directory if it does not exist.
 * @param {string} path The path to the directory to create.
 */
async function ensureDir(path) {
    try {
        await mkdir(path);
    }
    catch (err) {
        if (err.code != 'EEXIST')
            throw err;
    }
}

// Read in the story source file and parse it
const inputFile = await readFile('story.twee', 'utf-8');
const story = parseTwee(inputFile);

// Download the story format file (chapbook hosts them publically, nice!)
// Other formats may require other methods for fetching the format.js file
const storyFormatResponse = await fetch('https://klembot.github.io/chapbook/use/2.1.0/format.js');
const storyFormatText = await storyFormatResponse.text();
const storyFormat = parseStoryFormat(storyFormatText); // Now parse it

// Actually do the compilation
const compiledStory = compileTwine2HTML(story, storyFormat);

// Write out the result!
await ensureDir('dist');
await writeFile('dist/index.html', compiledStory, {
    encoding: 'utf-8'
});
