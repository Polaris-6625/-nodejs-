import {readFileSync} from 'fs';
import {fileURLToPath} from 'url';
import {dirname, resolve} from 'path';

import {generate} from '../lib/generator.js';
import {randomInt,createRandomPicker} from '../lib/random.js';
import express from 'express';
import { create } from 'domain';
const router = express.Router();
router.post('/create',(req,resp)=>
{
    const reqs = req.body;
    console.log(reqs);
    const title = reqs.title;
    let max = reqs.Num;
    console.log('执行了');
    const __dirname = dirname(fileURLToPath(import.meta.url));

    function loadCorpus(src) {
    const path = resolve(__dirname,"..", src);
    const data = readFileSync(path, {encoding: 'utf-8'});
    return JSON.parse(data);
    }

    const corpus = loadCorpus('corpus/data.json');

    const pickTitle = createRandomPicker(corpus.title);
    // const title = pickTitle();
    max = Number(max);
    console.log(typeof max);
    console.log(corpus);
    const article = generate(title, {corpus},3,max);
    console.log(`${title}\n\n    ${article.join('\n    ')}`);
    resp.send(`${title}\n\n    ${article.join('\n    ')}`)
    return `${title}\n\n    ${article.join('\n    ')}`;
});
export default router;
