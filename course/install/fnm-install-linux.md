
# FNM INSTALL LINUX

    -

## 1. Install Rust

    - Install rust

    $ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

    link: https://www.rust-lang.org/es/learn/get-started


## 2. Install Node Linux

    - Install fnm

        $ curl -fsSL https://fnm.vercel.app/install | bash


### 2.1 fnm ls-remote

    - List All the version node

        $ fnm ls-remote


### 2.2 fnm install

    - Install node

        $ fnm install v18.3.0


### 2.3 fnm install --lts

    - Install node LTS

        $ fnm install --lts


### 2.4 fnm install 20

    - install node version

        $ fnm install 20


### 2.5 fnm use v20.9.0

    - Use node version

        $ fnm use 20

        $ fnm use v20.9.0

### 2.6 fnm current

    - Show current node use

        $ fnm current


### 2.7 fnm ls

    - List all node version

        $ fnm ls


## 3. Upgrade

    $ curl -fsSL https://fnm.vercel.app/install | bash -s -- --install-dir "./.fnm" --skip-shell


## 4. Removing

    - To remove fnm (😢), just delete the .fnm folder in your home directory. You should also edit your shell configuration to remove any references to fnm (ie. read Shell Setup, and do the opposite).