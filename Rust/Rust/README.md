
# 🦀 Rust Programming Language Learning Repository

Welcome to your personal journey to master **Rust**!
This repository uses a systematic, comprehensive checklist to learn Rust from scratch to advanced concepts.

---

## 🌐 Overview

This project is inspired by a **"One Size Fits All" learning template**, adapted specifically for **Rust**.
It’s designed to help you:

- ✅ Track your learning step by step
- 📚 Build a personal Rust reference
- 🚀 Progress from beginner to advanced confidently

---

## 📦 Basic Syntax & Setup

- [ ] Hello World (`println!`)
- [ ] How to run (`rustc`, `cargo run`)
- [ ] File extension (`.rs`)
- [ ] Comment syntax (`//`, `/* */`)

---

## 🔡 Data Types

### 🧊 Primitive
- [ ] Integer (`i8`, `i32`, `u64`, etc.)
- [ ] Float (`f32`, `f64`)
- [ ] Boolean (`bool`)
- [ ] Char (`char`)
- [ ] String (`String`, `&str`)

### 🧱 Composite
- [ ] Tuple
- [ ] Struct
- [ ] Enum

### 🧠 Special
- [ ] Option & `None`
- [ ] Result
- [ ] Unit type `()`

---

## 📦 Variables & Constants

- [ ] `let` vs `let mut`
- [ ] `const`
- [ ] Type inference & explicit types
- [ ] Shadowing
- [ ] Ownership, borrowing, references
- [ ] Lifetimes basics

---

## 🧮 Operators

- [ ] Arithmetic (`+`, `-`, `*`, `/`, `%`)
- [ ] Comparison (`==`, `!=`, `<`, `>`)
- [ ] Logical (`&&`, `||`, `!`)
- [ ] Assignment (`=`, `+=`)
- [ ] Bitwise
- [ ] Conditional expressions (using `if` as expression)

---

## 🔁 Control Flow

### ✅ Conditionals
- [ ] `if`, `else if`, `else`
- [ ] `match`

### 🔄 Loops
- [ ] `loop`
- [ ] `while`
- [ ] `for`
- [ ] `break`, `continue`

---

## 🧰 Functions

- [ ] `fn` syntax
- [ ] Parameters & Return
- [ ] Closures
- [ ] Recursion
- [ ] Traits & `impl`

---

## 🧱 Data Structures

### 📚 Collections
- [ ] Arrays `[T; N]`
- [ ] Vectors `Vec<T>`
- [ ] HashMap
- [ ] HashSet
- [ ] LinkedList

---

## 👨‍👩‍👧‍👦 Structs & Enums

- [ ] Structs with methods
- [ ] Enums & pattern matching
- [ ] Associated functions

---

## 🧬 Functional Aspects

- [ ] Immutability by default
- [ ] Iterators (`map`, `filter`, `fold`)
- [ ] Closures & higher-order functions
- [ ] Pattern matching power

---

## 🧹 Error Handling

- [ ] `Option`
- [ ] `Result`
- [ ] `unwrap`, `expect`
- [ ] `?` operator
- [ ] `panic!`

---

## 🔧 Standard Library & I/O

- [ ] File reading & writing (`std::fs`)
- [ ] User input (`std::io`)
- [ ] Time & Date (`std::time`)
- [ ] String manipulation, formatting

---

## 📦 Modules & Crates

- [ ] Modules (`mod`)
- [ ] `use`, `pub`
- [ ] Packages (`Cargo.toml`)
- [ ] External crates

---

## 🏗️ Build & Tooling

- [ ] `cargo build`, `cargo run`
- [ ] `cargo test`
- [ ] `cargo fmt`, `cargo clippy`
- [ ] Managing dependencies with `Cargo`

---

## 🧩 Advanced Concepts

- [ ] Generics (`<T>`)
- [ ] Traits & trait bounds
- [ ] Lifetimes (`'a`)
- [ ] Smart pointers (`Box`, `Rc`, `Arc`)
- [ ] Concurrency (`std::thread`, `tokio` async)

---

## 🧠 Algorithms

### 🔃 Sorting
- [ ] Bubble Sort
- [ ] Merge Sort
- [ ] Quick Sort

### 🔍 Searching
- [ ] Linear Search
- [ ] Binary Search
- [ ] Hash Lookup

---

## ✅ Quick Rust Reference

| Concept              | Syntax / Example                          |
|----------------------|------------------------------------------|
| Variable Declaration | `let x = 5;`                             |
| Mutable Variable     | `let mut y = 10;`                        |
| Function             | `fn add(a: i32, b: i32) -> i32 {}`       |
| Vector               | `let v = vec![1, 2, 3];`                 |
| For Loop             | `for i in 0..5 {}`                       |
| Pattern Match        | `match x { 1 => ..., _ => ... }`         |
| Error Handling       | `let s = file.read_to_string()?;`        |

---

## 🚀 Learning Roadmap

### 📅 Suggested Phases
1. **Setup & Hello World:** Get `cargo` running, write your first Rust program.
2. **Variables, types, control flow:** Learn `let`, `match`, `for` loops.
3. **Ownership & borrowing:** Core of Rust. Write examples that break and fix them.
4. **Structs, enums, pattern matching:** Build simple data models.
5. **Collections & iterators:** Use `Vec`, `HashMap`, practice with `map`, `filter`.
6. **Error handling:** Handle `Option` & `Result`.
7. **Generics, traits, lifetimes:** Build reusable abstractions.
8. **Modules & cargo:** Organize code into modules, import crates.
9. **Concurrency & async:** Play with threads, try `tokio` or `async-std`.
10. **Testing & linting:** Write `#[test]` functions, run `cargo fmt`, `clippy`.

---

## 💪 Build Something!

### Ideas:
- Command line todo app (file storage)
- Simple web scraper with `reqwest`
- Tinny HTTP Server with Rust.

---

## ⭐ Final Tip

Keep checking off boxes. Your `README.md` becomes a **record of your journey** in Rust.
Push commits often to track your growth. 🚀

---

### Happy hacking in Rust! 🦀
