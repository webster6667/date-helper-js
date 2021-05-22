import {camelToDash} from 'camel-to-dash'

import babel from '@rollup/plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize'

import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'

const moduleFormat = process.env.NODE_ENV,
      shouldSqueeze = ['cjs'].includes(moduleFormat),
      isUMD = moduleFormat === 'umd'


const inputFile = 'src/index.ts',
      outputDir = 'dist',
      extensions = ['.js', '.ts'],
      libName = 'dateHelper',
      outputFileName = isUMD ? `${outputDir}/lib/${camelToDash(libName)}.js` : `${outputDir}/index.${moduleFormat}.js`



const plugins = [
    resolve({
    browser: true,
    extensions
}),
    babel({
        extensions,
        babelHelpers: 'runtime',
        presets: [
            [
                '@babel/preset-env',
                {
                    bugfixes: true,
                    modules: false,
                    targets: { browsers: '> 0.25%, ie 11, not op_mini all, not dead' }
                }
            ],
            '@babel/preset-typescript'
        ],
        plugins: [
            '@babel/plugin-transform-runtime'
        ],
        exclude: 'node_modules/**',
    }),
    commonjs(),
    filesize(),
    external()
]

if (shouldSqueeze === true) {
    plugins.push(terser())
}

export default [
    {
        input: inputFile,
        output: [
            {
                file: outputFileName,
                format: moduleFormat,
                name: libName
            }
        ],
        external: [/@babel\/runtime/],
        plugins
    }
]