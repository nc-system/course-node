
# FNM INSTALL LINUX

    -

## 1. Install Rust

    $ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

    link: https://www.rust-lang.org/es/learn/get-started


## 2. Install Node Linux

    $ curl -fsSL https://fnm.vercel.app/install | bash


## 3. Upgrade

    $ curl -fsSL https://fnm.vercel.app/install | bash -s -- --install-dir "./.fnm" --skip-shell


## 4. Removing

    - To remove fnm (😢), just delete the .fnm folder in your home directory. You should also edit your shell configuration to remove any references to fnm (ie. read Shell Setup, and do the opposite).