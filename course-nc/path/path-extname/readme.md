
# path.extname(path)

    path <string>
    Returns: <string>

    - The path.extname() method returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last portion of the path. If there is no . in the last portion of the path, or if there are no . characters other than the first character of the basename of path (see path.basename()) , an empty string is returned.

    path.extname('index.html');
    // Returns: '.html'

    path.extname('index.coffee.md');
    // Returns: '.md'

    path.extname('index.');
    // Returns: '.'

    path.extname('index');
    // Returns: ''

    path.extname('.index');
    // Returns: ''

    path.extname('.index.md');
    // Returns: '.md'