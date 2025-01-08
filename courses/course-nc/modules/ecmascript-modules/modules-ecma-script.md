
# MODULES ECMA SCRIPT

    - The Modules ECMA SCRIPT are node modules that are imported with the word key 'import'

    - They can be stored inside variables or constans

    - They are not global

    For example

        import worker_threads from 'node:worker_threads';
        
        import { five } from './a.mjs';

        import { configure, resize } from 'https://example.com/imagelib.mjs';

        import * as M from './module.wasm';