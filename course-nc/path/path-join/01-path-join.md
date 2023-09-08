
#   PATH JOIN 

    * ...paths <string> A sequence of path segments
    * Returns: <string>

    - The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.

        Code

        path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
        // Returns: '/foo/bar/baz/asdf'

        path.join('foo', {}, 'bar');
        // Throws 'TypeError: Path must be a string. Received {}'

    - Zero-length path segments are ignored. If the joined path string is a zero-length string then '.' will be returned, representing the current working directory.