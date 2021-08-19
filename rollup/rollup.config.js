/**
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import resolveModule from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import jsonplugin from '@rollup/plugin-json';

const plugins = [
  typescript({
    typescript: require('typescript')
  }),
  resolveModule({
    mainFields: ['esm2017', 'module']
  }),
  commonjs(),
  // terser({
  //   format: {
  //     comments: false
  //   },
  //   mangle: { toplevel: true },
  //   compress: false
  // }),
  jsonplugin()
];

const externals = []
// const externals = ['@firebase/app', '@firebase/util', '@firebase/logger', '@firebase/component']

export default [
  {
    input: 'index.ts',
    output: [
      { dir: 'dist', format: 'es' }
    ],
    plugins,
    // external: id => externals.some(dep => id === dep)
  },
];
