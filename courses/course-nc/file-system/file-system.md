
----------------------------------------------------------------------------
# **File system**

[Link Documentacion](https://markdown.es/sintaxis-markdown/)

<br>

## TABLE DE CONTENIDO

- **[Promise example](#promise)**

- **Callback example**

- **Synchronous example**

- **Promises API**

    - Class: FileHandle
        - Event: 'close'
        - filehandle.appendFile(data[, options])
        - filehandle.chmod(mode)
        - filehandle.chown(uid, gid)
        - filehandle.close()
        - filehandle.createReadStream([options])
        - filehandle.createWriteStream([options])
        - filehandle.datasync()
        - filehandle.fd
        - filehandle.read(buffer, offset, length, position)
        - filehandle.read([options])
        - filehandle.read(buffer[, options])
        - filehandle.readableWebStream(options)
        - filehandle.readFile(options)
        - filehandle.readLines([options])
        - filehandle.readv(buffers[, position])
        - filehandle.stat([options])
        - filehandle.sync()
        - filehandle.truncate(len)
        - filehandle.utimes(atime, mtime)
        - filehandle.write(buffer, offset[, length[, position]])
        - filehandle.write(buffer[, options])
        - filehandle.write(string[, position[, encoding]])
        - filehandle.writeFile(data, options)
        - filehandle.writev(buffers[, position])
        <br>
    - fsPromises.access(path[, mode])
    - fsPromises.appendFile(path, data[, options])
    - fsPromises.chmod(path, mode)
    - fsPromises.chown(path, uid, gid)
    - fsPromises.copyFile(src, dest[, mode])
    - fsPromises.cp(src, dest[, options])
    - fsPromises.lchmod(path, mode)
    - fsPromises.lchown(path, uid, gid)
    - fsPromises.lutimes(path, atime, mtime)
    - fsPromises.link(existingPath, newPath)
    - fsPromises.lstat(path[, options])
    - fsPromises.mkdir(path[, options])
    - fsPromises.mkdtemp(prefix[, options])
    - fsPromises.open(path, flags[, mode])
    - fsPromises.opendir(path[, options])
    - fsPromises.readdir(path[, options])
    - fsPromises.readFile(path[, options])
    - fsPromises.readlink(path[, options])
    - fsPromises.realpath(path[, options])
    - fsPromises.rename(oldPath, newPath)
    - fsPromises.rmdir(path[, options])
    - fsPromises.rm(path[, options])
    - fsPromises.stat(path[, options])
    - fsPromises.statfs(path[, options])
    - fsPromises.symlink(target, path[, type])
    - fsPromises.truncate(path[, len])
    - fsPromises.unlink(path)
    - fsPromises.utimes(path, atime, mtime)
    - fsPromises.watch(filename[, options])
    - fsPromises.writeFile(file, data[, options])
    - fsPromises.constants
    <br><br>
    
- **Callback API**
    - fs.access(path[, mode], callback)
    - fs.appendFile(path, data[, options], callback)
    - fs.chmod(path, mode, callback)
        - File modes
        <br>
    - fs.chown(path, uid, gid, callback)
    - fs.close(fd[, callback])
    - fs.copyFile(src, dest[, mode], callback)
    - fs.cp(src, dest[, options], callback)
    - fs.createReadStream(path[, options])
    - fs.createWriteStream(path[, options])
    - fs.exists(path, callback)
    - fs.fchmod(fd, mode, callback)
    - fs.fchown(fd, uid, gid, callback)
    - fs.fdatasync(fd, callback)
    - fs.fstat(fd[, options], callback)
    - fs.fsync(fd, callback)
    - fs.ftruncate(fd[, len], callback)
    - fs.futimes(fd, atime, mtime, callback)
    - fs.lchmod(path, mode, callback)
    - fs.lchown(path, uid, gid, callback)
    - fs.lutimes(path, atime, mtime, callback)
    - fs.link(existingPath, newPath, callback)
    - fs.lstat(path[, options], callback)
    - fs.mkdir(path[, options], callback)
    - fs.mkdtemp(prefix[, options], callback)
    - fs.open(path[, flags[, mode]], callback)
    - fs.opendir(path[, options], callback)
    - fs.read(fd, buffer, offset, length, position, callback)
    - fs.read(fd[, options], callback)
    - fs.read(fd, buffer[, options], callback)
    - fs.readdir(path[, options], callback)
    - fs.readFile(path[, options], callback)
        - File descriptors
        - Performance Considerations
        <br>
    - fs.readlink(path[, options], callback)
    - fs.readv(fd, buffers[, position], callback)
    - fs.realpath(path[, options], callback)
    - fs.realpath.native(path[, options], callback)
    - fs.rename(oldPath, newPath, callback)
    - fs.rmdir(path[, options], callback)
    - fs.rm(path[, options], callback)
    - fs.stat(path[, options], callback)
    - fs.statfs(path[, options], callback)
    - fs.symlink(target, path[, type], callback)
    - fs.truncate(path[, len], callback)
    - fs.unlink(path, callback)
    - fs.unwatchFile(filename[, listener])
    - fs.utimes(path, atime, mtime, callback)
    - fs.watch(filename[, options][, listener])
        - Caveats
        - Availability
        - Inodes
        - Filename argument
        <br>
    - fs.watchFile(filename[, options], listener)
    - fs.write(fd, buffer, offset[, length[, position]], callback)
    - fs.write(fd, buffer[, options], callback)
    - fs.write(fd, string[, position[, encoding]], callback)
    - fs.writeFile(file, data[, options], callback)
        - Using fs.writeFile() with file descriptors
        <br>
    - fs.writev(fd, buffers[, position], callback)
    <br><br>

- **Synchronous API**

    - fs.accessSync(path[, mode])
    - fs.appendFileSync(path, data[, options])
    - fs.chmodSync(path, mode)
    - fs.chownSync(path, uid, gid)
    - fs.closeSync(fd)
    - fs.copyFileSync(src, dest[, mode])
    - fs.cpSync(src, dest[, options])
    - fs.existsSync(path)
    - fs.fchmodSync(fd, mode)
    - fs.fchownSync(fd, uid, gid)
    - fs.fdatasyncSync(fd)
    - fs.fstatSync(fd[, options])
    - fs.fsyncSync(fd)
    - fs.ftruncateSync(fd[, len])
    - fs.futimesSync(fd, atime, mtime)
    - fs.lchmodSync(path, mode)
    - fs.lchownSync(path, uid, gid)
    - fs.lutimesSync(path, atime, mtime)
    - fs.linkSync(existingPath, newPath)
    - fs.lstatSync(path[, options])
    - fs.mkdirSync(path[, options])
    - fs.mkdtempSync(prefix[, options])
    - fs.opendirSync(path[, options])
    - fs.openSync(path[, flags[, mode]])
    - fs.readdirSync(path[, options])
    - fs.readFileSync(path[, options])
    - fs.readlinkSync(path[, options])
    - fs.readSync(fd, buffer, offset, length[, position])
    - fs.readSync(fd, buffer[, options])
    - fs.readvSync(fd, buffers[, position])
    - fs.realpathSync(path[, options])
    - fs.realpathSync.native(path[, options])
    - fs.renameSync(oldPath, newPath)
    - fs.rmdirSync(path[, options])
    - fs.rmSync(path[, options])
    - fs.statSync(path[, options])
    - fs.statfsSync(path[, options])
    - fs.symlinkSync(target, path[, type])
    - fs.truncateSync(path[, len])
    - fs.unlinkSync(path)
    - vfs.utimesSync(path, atime, mtime)
    - fs.writeFileSync(file, data[, options])
    - fs.writeSync(fd, buffer, offset[, length[, position]])
    - fs.writeSync(fd, buffer[, options])
    - fs.writeSync(fd, string[, position[, encoding]])
    - fs.writevSync(fd, buffers[, position])
    <br><br>

- **Common Objects**

    - Class: fs.Dir
        - dir.close()
        - dir.close(callback)
        - dir.closeSync()
        - dir.path
        - dir.read()
        - dir.read(callback)
        - dir.readSync()
        - dir[Symbol.asyncIterator]()
        <br>
    - Class: fs.Dirent
        - dirent.isBlockDevice()
        - dirent.isCharacterDevice()
        - dirent.isDirectory()
        - dirent.isFIFO()
        - dirent.isFile()
        - dirent.isSocket()
        - dirent.isSymbolicLink()
        - dirent.name
        - dirent.path
        <br>
    - Class: fs.FSWatcher
        - Event: 'change'
        - Event: 'close'
        - Event: 'error'
        - watcher.close()
        - watcher.ref()
        - watcher.unref()
        <br>
    - Class: fs.StatWatcher
        - watcher.ref()
        - watcher.unref()
        <br>
    - Class: fs.ReadStream
        - Event: 'close'
        - Event: 'open'
        - Event: 'ready'
        - readStream.bytesRead
        - readStream.path
        - readStream.pending
        <br>
    - Class: fs.Stats
        - stats.isBlockDevice()
        - stats.isCharacterDevice()
        - stats.isDirectory()
        - stats.isFIFO()
        - stats.isFile()
        - stats.isSocket()
        - stats.isSymbolicLink()
        - stats.dev
        - stats.ino
        - stats.mode
        - stats.nlink
        - stats.uid
        - stats.gid
        - stats.rdev
        - stats.size
        - stats.blksize
        - stats.blocks
        - stats.atimeMs
        - stats.mtimeMs
        - stats.ctimeMs
        - stats.birthtimeMs
        - stats.atimeNs
        - stats.mtimeNs
        - stats.ctimeNs
        - stats.birthtimeNs
        - stats.atime
        - stats.mtime
        - stats.ctime
        - stats.birthtime
        - Stat time values
        <br>
    - Class: fs.StatFs
        - statfs.bavail
        - statfs.bfree
        - statfs.blocks
        - statfs.bsize
        - statfs.ffree
        - statfs.files
        - statfs.type
        <br>
    - Class: fs.WriteStream
        - Event: 'close'
        - Event: 'open'
        - Event: 'ready'
        - writeStream.bytesWritten
        - writeStream.close([callback])
        - writeStream.path
        - writeStream.pending
        <br>
    - fs.constants
        - FS constants
            - File access constants
            - File copy constants
            - File open constants
            - File type constants
            - File mode constants
            <br>

- **Notes**
    - Ordering of callback and promise-based operations
    - File paths
        - String paths
        - File URL paths
            - Platform-specific considerations
            <br>
        - Buffer paths
        - Per-drive working directories on Windows
        <br>
    - File descriptors
    - Threadpool usage
    - File system flags


<br>

-------------------------------------------------------------------
<div id='promise'></div>

## Promises

