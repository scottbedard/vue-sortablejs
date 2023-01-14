import { defineConfig } from 'rollup'
import { terser } from 'rollup-plugin-terser'
import del from 'rollup-plugin-delete'
import cleanup from 'rollup-plugin-cleanup'
import eslint from '@rbnlffl/rollup-plugin-eslint'
import pkg from './package.json'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  external: [
    ...Object.keys(pkg.dependencies || {}),
  ],
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
    {
      file: pkg.unpkg,
      format: 'es',
      plugins: [
        terser(),
      ],
      sourcemap: true,
    },
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    eslint(),
    typescript(),
    cleanup(),
  ],
})
