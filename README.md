# AssemblyScript/ WebAssembly testing

## What is WebAssembly?

- WebAssembly (WA) is a binary code format designed to be portable and exist alongside a JS Engine.
- WA is mostly designed to not be written by hand, just like other Assembly Languages.
- WA is not the final Assembly that will then be executed but rather a format that allows for easy, cheap, trivial conversion to a wide range of architectures.
- WA has two filetypes text based `.wat` and the binary `.wasm`
  - `.wat` is designed to be more readable for humans to make debugging easier
  - `.wasm` is the actual binary designed to be executed.

---

## What is AssemblyScript?

- AssemblyScript (AS) is a staticly typed "Typescript-Like" language which compiles to WebAssembly.

- Has almost identical syntax to TypeScript.

  - `const foo: i32 = 2_100_000`
  - `let bar: f64 = 100_400.594`

- Notable Differences

  - There is no `any` or `undefined` because it's fully Statically and has no opt outs.
  - Because it's fully statically there is no `===` only `==`.
  - Objects must be Typed via map

    ```typescript
    var a = new Map<string, string>()

    a.set('prop', 'hello world')
    ```

    or class

    ```typescript
    class A {
    	constructor(public prop: string) {}
    }

    var a = new A('hello world')
    ```

  - unlike `TS` and `JS` there is not just one `number` type.
    - `boolean` in TS is `bool`
    - `number` and `bigint` have various types such as:
      - `i32` signed 32 bit int, `u32` unsigned 32 bit int, `i64` signed 64 bit int
      - `f32` and `f64` for 32 and 64 bit floats

- Pros of AS

  - The AS Compiler can be set to optimize for execution speed, compiled size, or compilation speed easily.
    - Most notably it can be much faster! Even 33%+ faster against V8 in simple loops which V8 will kick in and optimize easily.
  - Tho immature as `AS` and `WA` mature because it's a fully statically typed language it will allow for efficient and extensive tooling to make it easier to write very fast code for the web.
  - Very similar syntax to TS (and in turn JS) allowing for easy learning and easy working between the the two in a project.

- Cons of AS

  - AS is immature and still in the 0.x.x version stage.
    - WA is still a bit immature and lacks some features which will allow for wider usage
    - AS because of that and its own immaturity is missing some useful features of JS.
  - Of course being fully statically typed it can be more complicated and with a bit more boilerplate.
  - Compatiblity with various Libaries, Frameworks, tools is very hit or miss or difficult.
  - It currently is reccomended and defaulted to be written as a `.ts` file and therefore can lead to some confusion
  - A massive lack of tooling like proper linting, formatting, etc.
