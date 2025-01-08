
# READDIR

    * fsPromises.readdir(path[, options])#

    * History
        Version	Changes
        v18.17.0	
        Added recursive option.

        v10.11.0	
        New option withFileTypes was added.

        v10.0.0	
        Added in: v10.0.0

    * path <string> | <Buffer> | <URL>

    * options <string> | <Object>
        encoding <string> Default: 'utf8'
        withFileTypes <boolean> Default: false
        recursive <boolean> Default: false
        
    * Returns: <Promise> Fulfills with an array of the names of the files in the directory excluding '.' and '..'.
        
        
    - Reads the contents of a directory.

    The optional options argument can be a string specifying an encoding, or an object with an encoding property specifying the character encoding to use for the filenames. If the encoding is set to 'buffer', the filenames returned will be passed as <Buffer> objects.

    If options.withFileTypes is set to true, the resolved array will contain <fs.Dirent> objects.

        * Code

        import { readdir } from 'node:fs/promises';

        try {
        const files = await readdir(path);
        for (const file of files)
            console.log(file);
        } catch (err) {
        console.error(err);
        } 